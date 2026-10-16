"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef, type FormEventHandler } from "react";
import { ArrowIcon } from "./icons";

const formId = "mdeayvow";

type ContactFields = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export function ContactForm() {
  const [state, handleSubmit] = useForm<ContactFields>(formId);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const clearContactError = () => {
    emailRef.current?.setCustomValidity("");
  };

  const submitForm: FormEventHandler<HTMLFormElement> = (event) => {
    const email = emailRef.current;
    const phone = phoneRef.current;

    if (email && phone && !email.value.trim() && !phone.value.trim()) {
      event.preventDefault();
      email.setCustomValidity("Informe um e-mail ou telefone para contato.");
      email.reportValidity();
      return;
    }

    clearContactError();
    void handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <div className="contact-form-success" role="status" aria-live="polite">
        <span>Mensagem enviada</span>
        <h3>Obrigado pelo contato.</h3>
        <p>
          Recebi sua mensagem e responderei pelo contato informado assim que
          possível.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action={`https://formspree.io/f/${formId}`}
      method="POST"
      onSubmit={submitForm}
    >
      <input
        type="hidden"
        name="_subject"
        value="Novo contato pelo portfólio"
      />

      <ValidationError
        className="contact-form-error contact-form-error-general"
        errors={state.errors}
      />

      <div className="contact-form-fields">
        <div className="contact-form-field">
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            placeholder="Ex.: Maria Silva…"
            required
          />
          <ValidationError
            className="contact-form-error"
            prefix="Nome"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-reason">Motivo</label>
          <select
            id="contact-reason"
            name="reason"
            autoComplete="off"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="Oportunidade profissional">
              Oportunidade profissional
            </option>
            <option value="Projeto ou colaboração">
              Projeto ou colaboração
            </option>
            <option value="Networking">Networking</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
          <ValidationError
            className="contact-form-error"
            prefix="Motivo"
            field="reason"
            errors={state.errors}
          />
        </div>

        <p
          className="contact-form-choice-hint contact-form-field-wide"
          id="contact-choice-hint"
        >
          Informe pelo menos uma forma de retorno: e-mail ou telefone.
        </p>

        <div className="contact-form-field">
          <label htmlFor="contact-email">E-mail</label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            maxLength={120}
            placeholder="Ex.: maria@email.com…"
            aria-describedby="contact-choice-hint"
            onInput={clearContactError}
          />
          <ValidationError
            className="contact-form-error"
            prefix="E-mail"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-phone">Telefone</label>
          <input
            ref={phoneRef}
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={24}
            placeholder="Ex.: (91) 99999-9999…"
            aria-describedby="contact-choice-hint"
            onInput={clearContactError}
          />
          <ValidationError
            className="contact-form-error"
            prefix="Telefone"
            field="phone"
            errors={state.errors}
          />
        </div>

        <div className="contact-form-field contact-form-field-wide">
          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            name="message"
            autoComplete="off"
            minLength={20}
            maxLength={2000}
            rows={6}
            placeholder="Ex.: Gostaria de conversar sobre uma oportunidade…"
            required
          />
          <ValidationError
            className="contact-form-error"
            prefix="Mensagem"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="contact-form-footer">
        <p>
          Seus dados serão usados apenas para responder ao contato. Proteção
          contra spam e CAPTCHA pelo Formspree.
        </p>
        <button
          className="button button-primary contact-form-submit"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Enviando…" : "Enviar mensagem"}
          <ArrowIcon aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
