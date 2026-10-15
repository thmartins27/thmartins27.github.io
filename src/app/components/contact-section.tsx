import { portfolio } from "@/data/portfolio";
import { ArrowIcon, GithubIcon, LocationIcon, MailIcon } from "./icons";
import { SectionLabel } from "./section-label";

export function ContactSection() {
  return (
    <section id="contato" className="contact section-anchor">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <SectionLabel index="04">Vamos conversar</SectionLabel>
          <h2>
            Vamos construir
            <br /> algo sólido <span>juntos.</span>
          </h2>
          <p>
            Estou aberto a oportunidades onde engenharia, produto e impacto
            caminham juntos.
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${portfolio.links.email}`}>
              Enviar e-mail <ArrowIcon />
            </a>
            <a
              className="text-link"
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon />
            </a>
            {portfolio.links.linkedin ? (
              <a
                className="text-link"
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowIcon />
              </a>
            ) : null}
          </div>

          <address className="contact-details">
            <a href={`mailto:${portfolio.links.email}`}>
              <MailIcon />
              {portfolio.links.email}
            </a>
            <span>
              <LocationIcon />
              {portfolio.location}
            </span>
          </address>
        </div>

        <div className="contact-mark" aria-hidden="true">
          <strong className="contact-monogram">
            TM<span>.</span>
          </strong>
          <i aria-hidden="true" />
        </div>
      </div>

      <footer className="footer">
        <div className="section-shell footer-inner">
          <div>
            <strong>{portfolio.name}</strong>
            <span>{portfolio.role}</span>
          </div>
          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
            <a href="#contato">Contato</a>
          </div>
          <a
            className="footer-github"
            href={portfolio.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Thiago Martins"
          >
            <GithubIcon />
          </a>
        </div>
      </footer>
    </section>
  );
}
