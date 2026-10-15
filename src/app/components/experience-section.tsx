import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "./section-label";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="experience section-anchor">
      <div className="section-shell experience-grid">
        <div className="experience-column">
          <SectionLabel index="02">Experiência</SectionLabel>
          <h2>
            Por trás dos
            <br /> projetos<span>.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-period">{portfolio.experience.period}</div>
            <article className="timeline-content">
              <span>{portfolio.experience.role}</span>
              <h3>{portfolio.experience.company}</h3>
              <p>{portfolio.experience.description}</p>
              <strong className="timeline-highlights-label">
                Eixos demonstrados nos projetos
              </strong>
              <ul>
                {portfolio.experience.highlights.map((highlight, index) => (
                  <li key={highlight.title}>
                    <span className="timeline-highlight-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{highlight.title}</h4>
                      <p>{highlight.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="capabilities-column">
          <span className="capabilities-intro">Tecnologias</span>
          <h2>
            Stack aplicada
            <br /> à produção<span>.</span>
          </h2>
          <p>
            Ferramentas utilizadas em produtos corporativos, integrações e
            sustentação de ambientes reais.
          </p>

          <div className="capability-list">
            {portfolio.capabilities.map((capability) => (
              <article className="capability-row" key={capability.title}>
                <span>{capability.index}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <ul>
                  {capability.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="education-bar">
        <div className="section-shell">
          <SectionLabel index="03">Formação</SectionLabel>
          <p>{portfolio.education}</p>
        </div>
      </div>
    </section>
  );
}
