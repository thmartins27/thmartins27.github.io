import type { Metadata, Viewport } from "next";
import "@fontsource-variable/nunito-sans";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thmartins27.github.io"),
  title: "Thiago Martins | Desenvolvedor Full Stack",
  description:
    "Portfólio de Thiago Martins, Desenvolvedor Full Stack especializado em Node.js, TypeScript, React, Next.js e integrações corporativas.",
  authors: [{ name: "Thiago Martins" }],
  creator: "Thiago Martins",
  keywords: [
    "Desenvolvedor Full Stack",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Belém",
  ],
  openGraph: {
    title: "Thiago Martins | Desenvolvedor Full Stack",
    description:
      "Sistemas robustos, integrações corporativas e resultados que importam.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050b11",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
