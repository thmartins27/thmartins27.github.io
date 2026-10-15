---
name: portfolio-recruiter-review
description: Review software-engineering portfolios and resumes from a technical recruiter's perspective. Use when asked what recruiters notice, what content should be emphasized, removed, clarified, or reordered, or how well a portfolio matches a target role or vacancy. Produce analysis and recommendations only unless the user separately asks for implementation.
---

# Portfolio Recruiter Review

Evaluate whether a recruiter can quickly understand the candidate's target role, seniority, strongest evidence, and fit. Distinguish recruiter scanning from deeper hiring-manager evaluation; recommendations should serve both without turning the portfolio into a technical specification.

## Review Modes

- When a vacancy or target role is provided, assess relevance against its responsibilities and required skills.
- Otherwise infer the target role from the headline, experience, projects, and CV. State the inferred role before scoring.
- If the portfolio is implemented locally, inspect both visible content and rendered desktop/mobile pages when tools permit. Treat source code as supporting evidence, not as a substitute for reviewing the visible experience.

## Evaluation Passes

Review in this order:

1. **10-second scan:** Can a recruiter identify the candidate, role, location or availability, core stack, experience level, strongest result, and contact path?
2. **60-second fit check:** Do recent experience, projects, outcomes, and technologies support the target role without requiring careful interpretation?
3. **Technical credibility:** Do project descriptions explain the problem, the candidate's ownership, relevant complexity, decisions, and measurable outcome?
4. **Conversion:** Is there a clear next action such as contacting the candidate, viewing GitHub or LinkedIn, or downloading the CV?

## Signal Priorities

Give highest visibility to:

- target role and professional positioning;
- years and recency of relevant experience;
- business or operational outcomes with clear before/after context;
- ownership: what the candidate analyzed, designed, built, integrated, deployed, or sustained;
- 2–4 representative projects with problem, contribution, stack, and result;
- technologies directly relevant to the target role;
- trustworthy contact, GitHub, LinkedIn, and CV links when available.

Treat these as secondary unless they support a concrete result:

- long tool inventories;
- generic claims such as “robust”, “scalable”, or “modern”;
- architecture names without evidence of why they mattered;
- repetitive capability lists that duplicate projects or experience;
- decorative diagrams whose meaning is slower to understand than concise copy;
- operational details that are impressive technically but weakly connected to the target vacancy.

Do not recommend deleting a secondary signal solely because it is technical. Prefer moving it lower, shortening it, or connecting it to a business outcome. Relevance depends on the target vacancy.

## Evidence Rules

- Never invent metrics, employers, responsibilities, seniority, clients, or project scope.
- Flag unsupported or ambiguous claims and propose the exact evidence needed to strengthen them.
- Preserve confidentiality. Recommend generalized scale or context when exact internal numbers cannot be disclosed.
- Check dates, role names, links, language level, and claims for internal consistency.
- Separate evidence present in the portfolio from assumptions or inferences.

## Required Output

Lead with a concise recruiter verdict, then provide:

1. **What already works:** strongest signals worth preserving.
2. **Priority improvements:** ordered by likely hiring impact, each with location, problem, recruiter consequence, and a concrete recommendation or sample wording.
3. **Promote / reduce / remove:** a compact table showing which content deserves more visibility, less visibility, or removal, with reasons.
4. **Missing evidence:** facts or links that would materially improve credibility.
5. **Scorecard:** clarity, role fit, evidence of impact, project credibility, scanability, and conversion, each scored from 1–5 with one-line justification.

Label findings as `critical`, `high`, `medium`, or `low`. Prioritize no more than five changes as the immediate action plan; place remaining observations under later improvements.

Do not edit portfolio files, rewrite the entire site, contact recruiters, or publish changes unless the user explicitly asks for those actions after the review.
