import { portfolio } from "@/data/portfolio";
import { ArrowIcon } from "./icons";
import { SectionLabel } from "./section-label";

export function ProjectsSection() {
  return (
    <section id="projetos" className="projects section-anchor">
      <div className="section-shell">
        <div className="section-heading" data-reveal="up">
          <div>
            <SectionLabel index="01">Projetos</SectionLabel>
            <h2>
              Projetos que movem
              <br /> operações reais<span>.</span>
            </h2>
          </div>
          <p>
            Sistemas que resolvem problemas complexos, integram equipes e
            geram impacto direto em operações críticas.
          </p>
        </div>

        <article className="featured-project">
          <div className="featured-project-copy" data-reveal="left">
            <span className="project-index">01 / Projeto em destaque</span>
            <h3>
              {portfolio.featuredProject.title}
              <span>.</span>
            </h3>
            <p>{portfolio.featuredProject.description}</p>
            <div className="project-contribution">
              <span>Minha atuação</span>
              <ul>
                {portfolio.featuredProject.responsibilities.map(
                  (responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ),
                )}
              </ul>
            </div>
            <div className="project-results">
              <span className="project-index">Resultados alcançados</span>
              <div className="outcomes">
                {portfolio.featuredProject.outcomes.map((outcome) => (
                  <div className="outcome-card" key={outcome.label}>
                    <span className="outcome-title">{outcome.label}</span>
                    {"before" in outcome ? (
                      <div
                        className="outcome-comparison"
                        aria-label={`${outcome.before} antes, ${outcome.after} depois`}
                      >
                        <span className="outcome-stage">
                          <small>Antes</small>
                          <strong>{outcome.before}</strong>
                        </span>
                        <ArrowIcon className="outcome-arrow" />
                        <span className="outcome-stage outcome-stage-after">
                          <small>Depois</small>
                          <strong>{outcome.after}</strong>
                        </span>
                      </div>
                    ) : (
                      <strong className="outcome-value">{outcome.value}</strong>
                    )}
                    <span className="outcome-impact">{outcome.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project-system" data-reveal="right" data-reveal-delay="1">
            <span className="project-index">Desafios e soluções</span>
            <ol className="project-challenges">
              {portfolio.featuredProject.challenges.map((challenge, index) => (
                <li className="challenge-item" key={challenge.title}>
                  <span className="challenge-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="challenge-content">
                    <span className="challenge-category">
                      {challenge.category}
                    </span>
                    <h4>{challenge.title}</h4>
                    <p>{challenge.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="stack-list" aria-label="Tecnologias principais">
              {portfolio.featuredProject.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="project-list">
          {portfolio.projects.map((project) => (
            <article className="project-row" key={project.title} data-reveal="up">
              <div className="project-row-copy">
                <div className="project-row-label">
                  <span>{project.index}</span>
                  <i aria-hidden="true" />
                  <strong>{project.eyebrow}</strong>
                </div>
                <h3>
                  {project.title}
                  <span>.</span>
                </h3>
                <p>{project.description}</p>
              </div>
              <div className="project-row-details">
                <span className="project-index">{project.detailLabel}</span>
                <div className="project-case-list">
                  {project.cases.map((projectCase) => (
                    <div className="project-case" key={projectCase.title}>
                      <span>{projectCase.label}</span>
                      <h4>
                        {projectCase.title}
                        <strong>.</strong>
                      </h4>
                      <p>{projectCase.description}</p>
                    </div>
                  ))}
                </div>
                <div className="project-role">
                  <span>Minha atuação</span>
                  <i aria-hidden="true" />
                  <p>{project.contribution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
