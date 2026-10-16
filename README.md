# Portfólio — Thiago Martins

Portfólio profissional desenvolvido para apresentar minha trajetória como Desenvolvedor Full Stack, projetos relevantes, experiência com produtos corporativos e formas de contato.

O projeto foi construído com foco em uma leitura rápida para recrutadores e profissionais de tecnologia, combinando identidade visual, evidências de impacto e detalhes técnicos das soluções em que atuei.

**Acesse o portfólio:** [thmartins27.github.io](https://thmartins27.github.io)

## Sobre o projeto

O site organiza minha apresentação profissional em cinco áreas principais:

- **Início:** posicionamento profissional e resumo da minha experiência.
- **Sobre:** formação, forma de pensar e princípios que orientam meu trabalho.
- **Projetos:** casos reais, responsabilidades, desafios técnicos e resultados alcançados.
- **Experiência:** relação entre os projetos, minha atuação profissional e as tecnologias utilizadas.
- **Contato:** canais diretos e formulário para oportunidades, projetos e networking.

Além dos projetos corporativos, o portfólio apresenta projetos autorais utilizados para estudar novas tecnologias, validar ideias e aprofundar conhecimentos em arquitetura, testes e inteligência artificial.

## Construção

O desenvolvimento foi organizado para manter conteúdo, interface e comportamento com responsabilidades bem definidas:

- Os dados profissionais e os projetos ficam centralizados em `src/data/portfolio.ts`.
- Cada seção da página possui seu próprio componente React.
- A página utiliza Server Components por padrão e Client Components somente onde existe interação.
- O formulário de contato possui validação e envio assíncrono pelo Formspree.
- As animações de entrada são acionadas com `IntersectionObserver`.
- A apresentação inicial inclui uma animação de digitação construída com CSS.
- O layout é responsivo e adaptado para desktop, tablet e dispositivos móveis.
- O projeto gera uma exportação estática, adequada para hospedagem no GitHub Pages.

## Tecnologias utilizadas

### Interface

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- CSS customizado e CSS Modules
- Nunito Sans Variable

### Integrações e ferramentas

- Formspree para recebimento das mensagens de contato
- Next.js Image para o tratamento das imagens
- ESLint para análise estática
- PNPM para gerenciamento de dependências
- GitHub Actions para integração e deploy contínuos
- GitHub Pages para hospedagem

## Experiência da interface

Alguns cuidados aplicados na construção:

- HTML semântico e hierarquia clara de títulos.
- Link de salto para acesso direto ao conteúdo principal.
- Estados de foco visíveis para navegação por teclado.
- Contraste adequado ao tema escuro.
- Textos e controles responsivos.
- Animações compatíveis com `prefers-reduced-motion`.
- Carregamento do JavaScript de interação restrito aos componentes que realmente precisam dele.

## Estrutura principal

```text
src/
├── app/
│   ├── components/       # Seções, formulário, navegação e elementos visuais
│   ├── globals.css       # Tema, estilos compartilhados e animações
│   ├── layout.tsx        # Metadados e estrutura raiz
│   └── page.tsx          # Composição da página
└── data/
    └── portfolio.ts      # Fonte central do conteúdo profissional

public/
└── images/               # Fotografias e recursos visuais

.github/
└── workflows/
    └── deploy.yml        # Build e publicação no GitHub Pages
```

## Executando localmente

### Requisitos

- Node.js 24
- PNPM 12

### Instalação

```bash
git clone https://github.com/thmartins27/thmartins27.github.io.git
cd thmartins27.github.io
pnpm install
```

### Ambiente de desenvolvimento

```bash
pnpm dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

### Verificações e build

```bash
pnpm lint
pnpm build
```

O build utiliza a exportação estática do Next.js e gera o resultado no diretório `out`.

## Deploy

O deploy é realizado automaticamente pelo GitHub Actions a cada atualização enviada para a branch `main`:

1. Instalação das dependências com lockfile congelado.
2. Geração do build de produção.
3. Criação do artefato estático.
4. Publicação no GitHub Pages.

## Inteligência artificial como apoio

A inteligência artificial foi utilizada como ferramenta de apoio durante a construção do portfólio. Agentes de IA auxiliaram na exploração de alternativas visuais, revisão de textos, análise da experiência de recrutadores, identificação de melhorias de interface e revisão de trechos da implementação.

As decisões sobre conteúdo, arquitetura, identidade visual, tecnologias e validação final permaneceram sob minha responsabilidade. A IA foi aplicada como um recurso para ampliar a análise, acelerar iterações e comparar soluções — não como substituta do processo de engenharia.

Esse mesmo princípio aparece no **PlantUML Studio**, projeto autoral apresentado no portfólio: agentes de IA apoiaram a investigação e a implementação, enquanto o escopo, a arquitetura e a validação do produto foram conduzidos por mim.

## Contato

- [LinkedIn](https://www.linkedin.com/in/th-martins27/)
- [GitHub](https://github.com/thmartins27)
- [E-mail](mailto:thiago.olivmartins@gmail.com)

---

Desenvolvido por **Thiago Martins**.
