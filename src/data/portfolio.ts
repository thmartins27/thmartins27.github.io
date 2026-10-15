export const portfolio = {
  name: "Thiago Martins",
  initials: "TM",
  role: "Desenvolvedor Full Stack",
  location: "Belém, PA · Brasil",
  headline: "Sistemas robustos. Resultados que importam.",
  description:
    "4 anos desenvolvendo aplicações corporativas, APIs e integrações com Node.js, TypeScript, React e Next.js.",
  about: {
    headline: ["Entender bem", "para resolver melhor"],
    paragraphs: [
      "Sou formado em Análise e Desenvolvimento de Sistemas pela UNIP e construí minha trajetória profissional a partir da curiosidade de entender como processos funcionam e como podem ser melhorados.",
      "Tenho facilidade para analisar cenários, organizar problemas complexos e encontrar soluções claras e viáveis. Antes de tomar uma decisão, procuro compreender o contexto, as pessoas envolvidas e o impacto que aquela solução terá no dia a dia.",
      "Valorizo responsabilidade, aprendizado contínuo e colaboração. Gosto de acompanhar meu trabalho de perto, aprender com os resultados e buscar melhorias que realmente façam diferença para as pessoas e para a operação.",
    ],
    strengthLabel: "O que orienta meu trabalho",
    strengths: [
      {
        title: "Pensamento analítico",
        description:
          "Investigo o contexto e as causas do problema antes de definir uma solução.",
      },
      {
        title: "Compromisso com o resultado",
        description:
          "Acompanho o trabalho até que a solução esteja funcionando e cumprindo seu objetivo.",
      },
      {
        title: "Aprendizado contínuo",
        description:
          "Busco evoluir a partir de novos desafios, experiências e trocas com outras pessoas.",
      },
    ],
    ctaLabel: "Conheça meus projetos",
  },
  links: {
    github: "https://github.com/thmartins27",
    linkedin: "",
    email: "thiago.olivmartins@gmail.com",
  },
  featuredProject: {
    title: "Plataforma de agendamento",
    description:
      "Plataforma de agendamento de uma rede hospitalar, integrada ao ERP Oracle e às regras de negócio da operação.",
    responsibilities: [
      "Análise de requisitos e planejamento técnico.",
      "Desenvolvimento da interface, APIs e integrações.",
      "Implantação e sustentação da aplicação em produção.",
    ],
    challenges: [
      {
        category: "Lógica de negócio",
        title: "Regras de agendamento",
        description:
          "Implementei validações por convênio e médico, além do controle de dias e horários bloqueados.",
      },
      {
        category: "Mensageria",
        title: "Processamento assíncrono",
        description:
          "Estruturei o envio de e-mails com BullMQ e Redis, desacoplando as notificações do fluxo principal do agendamento.",
      },
      {
        category: "Otimização",
        title: "Cache e desempenho",
        description:
          "Utilizei Redis como cache de dados frequentemente acessados, evitando consultas repetidas durante o uso da plataforma.",
      },
    ],
    outcomes: [
      {
        label: "Tempo médio de agendamento",
        before: "15 min",
        after: "3 min",
        impact: "80% mais rápido",
      },
      {
        label: "Fila de espera do call center",
        value: "−30%",
        impact: "menos pessoas aguardando",
      },
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Oracle", "BullMQ", "Redis"],
  },
  projects: [
    {
      index: "02",
      eyebrow: "Integrações clínicas",
      detailLabel: "Casos de integração",
      title: "Integrações clínicas e hospitalares",
      description:
        "Integrações entre sistemas internos e plataformas especializadas para apoiar a gestão de internações e o fluxo digital de exames e laudos.",
      contribution:
        "Desenvolvimento e sustentação dos fluxos de integração entre sistemas internos e parceiros externos.",
      cases: [
        {
          label: "DRG Brasil",
          title: "Gestão de internações",
          description:
            "Dados de internação e CID para apoiar análises de permanência, previsão de alta e giro de leitos.",
        },
        {
          label: "Laudos digitais",
          title: "Exames de imagem",
          description:
            "Envio de imagens e pedidos ao parceiro responsável e recebimento do laudo assinado digitalmente.",
        },
      ],
    },
    {
      index: "03",
      eyebrow: "Dados e operação",
      detailLabel: "Soluções implementadas",
      title: "BI e painéis operacionais",
      description:
        "Relatórios analíticos e painéis em tempo real para áreas administrativas, financeiras e assistenciais.",
      contribution:
        "Consultas, integrações de dados, relatórios no Power BI e interfaces React conectadas a APIs.",
      cases: [
        {
          label: "Business Intelligence",
          title: "Power BI",
          description:
            "Planejamento, orçamento matricial, produtividade e giro de leitos com dados de bancos, APIs e planilhas.",
        },
        {
          label: "Tempo real",
          title: "Painéis React",
          description:
            "Alertas assistenciais e informações operacionais para recepções, integrados a APIs.",
        },
      ],
    },
  ],
  experience: {
    period: "Jan 2022 — Ago 2026",
    role: "Desenvolvedor Full Stack",
    company: "Hospital Adventista de Belém",
    description:
      "Os projetos apresentados fazem parte de uma atuação de ponta a ponta: análise de requisitos, planejamento técnico, desenvolvimento, integração, implantação e sustentação.",
    highlights: [
      {
        title: "Impacto operacional",
        description:
          "A plataforma de agendamento reduziu o tempo médio de 15 para 3 minutos e a fila do call center em pelo menos 30%.",
      },
      {
        title: "Integrações clínicas",
        description:
          "Integrações com a DRG Brasil para análise de permanência e com parceiros de diagnóstico para troca de imagens, pedidos e laudos digitais.",
      },
      {
        title: "Dados e operação",
        description:
          "Relatórios em Power BI e painéis React para planejamento, produtividade, giro de leitos, alertas assistenciais e rotinas financeiras.",
      },
      {
        title: "Produção e sustentação",
        description:
          "Deploys, logs, auditoria e investigação de falhas em ambientes Linux com Docker e Nginx.",
      },
    ],
  },
  capabilities: [
    {
      index: "01",
      title: "Back-end",
      description: "APIs REST, BFFs, regras de negócio e integrações com sistemas legados.",
      technologies: ["Node.js", "TypeScript", "NestJS", "Swagger/OpenAPI"],
    },
    {
      index: "02",
      title: "Front-end",
      description: "Aplicações responsivas, formulários e dashboards orientados à operação.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      index: "03",
      title: "Dados",
      description: "Consultas, modelagem e persistência em diferentes bancos relacionais.",
      technologies: ["Oracle", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      index: "04",
      title: "DevOps",
      description: "Deploy e sustentação em Linux com containers, proxy reverso, logs e auditoria.",
      technologies: ["Docker", "Nginx", "Linux", "Git"],
    },
  ],
  education: "Graduação concluída em Análise e Desenvolvimento de Sistemas · UNIP",
} as const;
