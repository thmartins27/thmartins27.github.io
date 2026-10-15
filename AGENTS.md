<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project context

## Goal

- This is Thiago Martins' professional portfolio, aimed at Full Stack roles using Node.js, TypeScript, React, and Next.js.
- The site must help recruiters quickly understand his positioning, experience, strongest projects, business impact, and contact paths.
- Visible copy is written in Brazilian Portuguese.

## Content structure

- `src/data/portfolio.ts` is the source of truth for professional content, project cases, metrics, technologies, links, and contact details.
- The page order is: Início, Sobre, Projetos, Experiência/tecnologias/formação, and Contato.
- Início establishes identity and positioning; Sobre explains Thiago's professional profile and way of working; Projetos proves capability; Experiência connects the projects to his role at the hospital; Contato provides the next action.
- Keep sections complementary. Do not repeat the same stack list or project description in multiple sections.

## Content rules

- Prioritize evidence: problem, Thiago's contribution, technical complexity, and operational or business outcome.
- Never invent metrics, seniority, responsibilities, clients, dates, links, or project scope. Ask for missing evidence when it would materially change the content.
- Describe healthcare projects clearly while preserving confidential internal information.
- Avoid generic claims such as “passionate”, “proactive”, “robust”, or “scalable” unless the surrounding content demonstrates them.
- Prefer concise recruiter-friendly copy over exhaustive technical specifications.

## Visual direction

- Preserve the established dark blue-black background, mint accent, rounded Nunito typography, large headings, thin borders, and square card corners.
- Maintain strong hierarchy, generous spacing, accessible contrast, and responsive behavior on desktop and mobile.
- The professional portrait is at `public/images/thiago-martins.png`. Use it purposefully to reinforce identity; avoid large repeated instances on the same page.

## Working agreements

- Inspect the current implementation and `src/data/portfolio.ts` before changing copy or layout.
- Use `.agents/skills/portfolio-recruiter-review` for recruiting relevance, `.agents/skills/web-design-guidelines` for UI/UX review, and `.agents/skills/react-best-practices` for React/Next.js changes when applicable.
- Follow the existing component and CSS conventions instead of introducing a new design system or unnecessary dependency.
- Visual concept generation is allowed when it materially helps define or improve the design.
- Do not use screen control, browser automation, automated screenshots, or visual validation tools unless Thiago explicitly authorizes them for the current task. Thiago performs the visual validation and reports any adjustments needed.
- After implementation changes, use code-level checks such as `pnpm lint`, `git diff --check`, TypeScript checks, and a production build as appropriate. Do not treat these checks as authorization for browser-based visual validation.
