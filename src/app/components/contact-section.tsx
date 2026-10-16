import { portfolio } from "@/data/portfolio";
import {
  ArrowIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";
import { SectionLabel } from "./section-label";

const contactChannels = [
  {
    label: "LinkedIn",
    handle: "/in/th-martins27",
    href: portfolio.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    handle: "@th.martins27",
    href: portfolio.links.instagram,
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    handle: "Iniciar uma conversa",
    href: portfolio.links.whatsapp,
    icon: WhatsappIcon,
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="contact section-anchor">
      <div className="section-shell contact-grid">
        <div className="contact-copy" data-reveal="left">
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

        <div className="contact-channels" data-reveal="right" data-reveal-delay="1">
          <div className="contact-channels-heading">
            <span>Outros canais</span>
            <h3>
              Escolha como prefere <strong>conversar.</strong>
            </h3>
          </div>

          <ul className="contact-channel-list">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Acessar ${channel.label} de Thiago Martins`}
                  >
                    <span className="contact-channel-icon">
                      <Icon />
                    </span>
                    <span className="contact-channel-copy">
                      <strong>{channel.label}</strong>
                      <small>{channel.handle}</small>
                    </span>
                    <ArrowIcon className="contact-channel-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
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
