import { portfolio } from "@/data/portfolio";
import { ArrowIcon, LocationIcon } from "./icons";

export function HeroSection() {
  const [firstSentence, secondSentence] = portfolio.headline.split(". ");

  return (
    <section id="inicio" className="hero section-anchor">
      <div className="hero-grid" aria-hidden="true" />
      <div className="section-shell hero-inner">
        <div className="hero-copy">
          <p className="hero-identity">
            <strong>{portfolio.name}</strong>
            <span aria-hidden="true">—</span>
            <span>{portfolio.role}</span>
          </p>
          <h1>
            {firstSentence}.<br />
            <span>{secondSentence}</span>
          </h1>
          <p className="hero-summary">{portfolio.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#contato">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-plane plane-a" />
          <div className="visual-plane plane-b" />
          <div className="code-window">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>thiago/portfolio</span>
            </div>
            <pre>
              <code>
                <span className="code-line">
                  <span className="code-muted">01</span>
                  <span className="code-line-text"> <b>const</b> developer = &#123;</span>
                </span>
                <span className="code-line">
                  <span className="code-muted">02</span>
                  <span className="code-line-text"> {"  "}focus: <em>&quot;impacto&quot;</em>,</span>
                </span>
                <span className="code-line">
                  <span className="code-muted">03</span>
                  <span className="code-line-text"> {"  "}stack: [<em>&quot;Node.js&quot;</em>,</span>
                </span>
                <span className="code-line">
                  <span className="code-muted">04</span>
                  <span className="code-line-text"> {"    "}<em>&quot;React&quot;</em>, <em>&quot;Next.js&quot;</em>],</span>
                </span>
                <span className="code-line">
                  <span className="code-muted">05</span>
                  <span className="code-line-text"> {"  "}delivery: <em>&quot;produção&quot;</em></span>
                </span>
                <span className="code-line">
                  <span className="code-muted">06</span>
                  <span className="code-line-text"> &#125;;</span>
                </span>
              </code>
            </pre>
            <div className="system-steps">
              <span>Entender</span>
              <i />
              <span>Construir</span>
              <i />
              <span>Entregar</span>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <LocationIcon />
          <span>{portfolio.location}</span>
        </div>
      </div>

    </section>
  );
}
