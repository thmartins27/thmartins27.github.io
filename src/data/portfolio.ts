export const portfolio = {
  name: "Thiago Martins",
  initials: "TM",
  role: "Desenvolvedor Full Stack",
  location: "Belém, PA · Brasil",
  headline: "Onde há desafios. Eu enxergo possibilidades.",
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
    linkedin: "https://www.linkedin.com/in/th-martins27/",
    instagram: "https://www.instagram.com/th.martins27/",
    whatsapp:
      "https://wa.me/5591989629402?text=Ol%C3%A1%2C%20Thiago!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
    email: "thiago.olivmartins@gmail.com",
  },
  featuredProject: {
    title: "Plataforma de agendamento",
    description:
      "Plataforma de agendamento de uma rede hospitalar, integrada ao ERP Oracle e às regras de negócio da operação.",
    responsibilities: [
      "Análise de requisitos e planejamento técnico.",
      "Desenvolvimento da interface, APIs e integrações.",
      "Testes automatizados com Jest nas APIs e interfaces.",
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
      title: "Integrações hospitalares e clínicas",
      description:
        "Aplicações e integrações entre sistemas internos e plataformas especializadas para apoiar internações, diagnósticos e controle de acesso.",
      contribution:
        "Desenvolvimento e sustentação de aplicações, fluxos de integração e mecanismos de rastreabilidade entre sistemas internos e parceiros externos.",
      cases: [
        {
          label: "DRG Brasil",
          title: "Gestão de internações",
          description:
            "Dados de internação e CID para apoiar análises de permanência, previsão de alta e giro de leitos.",
        },
        {
          label: "PHP · Laravel",
          title: "Exames de imagem",
          description:
            "Aplicação em Laravel para envio de imagens e pedidos, recebimento de laudos assinados digitalmente e testes automatizados com Pest e PHPUnit.",
        },
        {
          label: "MongoDB · Logs",
          title: "Totens e acesso",
          description:
            "Logs da integração entre totens, ERP hospitalar e catracas com reconhecimento facial para rastrear fluxos e investigar falhas.",
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
  authorProjects: {
    eyebrow: "Projetos autorais",
    title: "Tecnologia em evolução contínua",
    description:
      "Produtos e desafios onde valido ideias, aprofundo novas tecnologias e transformo necessidades reais em soluções próprias.",
    items: [
      {
        index: "A01",
        status: "IA aplicada ao desenvolvimento",
        title: "PlantUML Studio",
        description:
          "Ferramenta criada para escrever, visualizar e organizar diagramas PlantUML durante a documentação de sistemas.",
        evidence:
          "Nasceu da necessidade de documentar a arquitetura da nova plataforma de agendamento. Utilizei agentes de IA para explorar soluções, acelerar a implementação e revisar decisões, mantendo sob minha responsabilidade o escopo, a arquitetura e a validação do produto.",
        technologies: ["PlantUML", "Agentes de IA", "Documentação técnica"],
      },
      {
        index: "A02",
        status: "Em desenvolvimento",
        title: "Nova plataforma de agendamento",
        description:
          "Projeto pessoal com o back-end desenvolvido em .NET e C#, criado para aprofundar minha experiência no ecossistema por meio de uma aplicação completa.",
        evidence:
          "A estrutura prioriza separação de responsabilidades, regras de negócio independentes da infraestrutura e testes automatizados com xUnit.",
        technologies: [".NET", "C#", "xUnit", "Clean Architecture", "SOLID"],
      },
      {
        index: "A03",
        status: "Desafio técnico",
        title: "Controle de estoque",
        description:
          "Aplicação pública de controle de estoque desenvolvida para um processo seletivo e utilizada pelos avaliadores durante a análise técnica.",
        evidence:
          "O projeto foi estruturado para demonstrar testes automatizados com xUnit, Clean Architecture e princípios SOLID aplicados em .NET e C#.",
        technologies: [".NET", "C#", "xUnit", "Clean Architecture", "SOLID"],
      },
    ],
  },
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
          "Integrações com a DRG Brasil e desenvolvimento em PHP e Laravel para a troca de imagens, pedidos e laudos digitais com parceiros de diagnóstico.",
      },
      {
        title: "Rastreabilidade operacional",
        description:
          "MongoDB aplicado aos logs da integração entre totens, ERP hospitalar e catracas com reconhecimento facial.",
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
      technologies: [
        "Node.js",
        "TypeScript",
        "NestJS",
        "PHP",
        "Laravel",
        "Swagger/OpenAPI",
      ],
    },
    {
      index: "02",
      title: "Front-end",
      description: "Aplicações responsivas, formulários e dashboards orientados à operação.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      index: "03",
      title: "Dados e persistência",
      description: "Bancos relacionais, cache e armazenamento de logs operacionais.",
      technologies: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      index: "04",
      title: "DevOps",
      description: "Deploy e sustentação em Linux com containers, proxy reverso, logs e auditoria.",
      technologies: ["Docker", "Nginx", "Linux", "Git"],
    },
    {
      index: "05",
      title: "Arquitetura e testes",
      description:
        "Separação de responsabilidades, princípios SOLID e testes automatizados adequados a cada ecossistema.",
      technologies: [
        "Clean Architecture",
        "SOLID",
        "Jest",
        "xUnit",
        "Pest",
        "PHPUnit",
      ],
    },
  ],
  education: "Graduação concluída em Análise e Desenvolvimento de Sistemas · UNIP",
} as const;
