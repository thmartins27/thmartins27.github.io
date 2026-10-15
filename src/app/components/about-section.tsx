import { Fragment } from "react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { ArrowIcon } from "./icons";
import { SectionLabel } from "./section-label";

export function AboutSection() {
  return (
    <section id="sobre" className="about section-anchor">
      <div className="section-shell about-grid">
        <div className="about-portrait-frame">
          <Image
            className="about-portrait"
            src="/images/thiago-martins.png"
            alt="Retrato profissional de Thiago Martins"
            width={1122}
            height={1402}
            loading="lazy"
            sizes="(max-width: 900px) calc(100vw - 40px), 38vw"
          />
        </div>

        <div className="about-content">
          <SectionLabel index="00">Sobre mim</SectionLabel>
          <h2>
            {portfolio.about.headline.map((line, index) => (
              <Fragment key={line}>
                {line}
                {index < portfolio.about.headline.length - 1 ? (
                  <>
                    {" "}
                    <br className="about-heading-break" />
                  </>
                ) : null}
              </Fragment>
            ))}
            <span>.</span>
          </h2>

          <div className="about-copy">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <strong className="about-strength-label">
            {portfolio.about.strengthLabel}
          </strong>
          <ol className="about-strengths">
            {portfolio.about.strengths.map((strength, index) => (
              <li key={strength.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className="about-cta" href="#projetos">
            {portfolio.about.ctaLabel} <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
