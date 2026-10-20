import type { Metadata, Viewport } from "next";
import { Archivo, Gloock, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";
import Chatbot from "@/components/Chatbot";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const fontVars = `${gloock.variable} ${archivo.variable} ${plexMono.variable}`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E9E5DA",
  colorScheme: "light",
};

const SITE_URL = "https://miguelcalzada.com";
const TITLE = "Miguel Calzada — Software, datos e IA en producción";
const DESCRIPTION =
  "Portfolio de Miguel Ángel Calzada Martín, Software Developer en Madrid. Cuatro sistemas públicos de IA, datos y web, con sus decisiones técnicas y su código.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: TITLE,
    template: "%s · Miguel Calzada",
  },
  description: DESCRIPTION,
  applicationName: "Miguel Calzada · Portfolio",
  authors: [{ name: "Miguel Ángel Calzada Martín", url: SITE_URL }],
  creator: "Miguel Ángel Calzada Martín",
  publisher: "Miguel Ángel Calzada Martín",
  category: "technology",
  keywords: [
    "Miguel Calzada",
    "Miguel Ángel Calzada Martín",
    "Software Developer",
    "Full-Stack",
    "Inteligencia Artificial",
    "Big Data",
    "Next.js",
    "TypeScript",
    "Python",
    "Java",
    "AWS",
    "Docker",
    "Kubernetes",
    "RAG",
    "LLM",
    "Madrid",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Miguel Calzada",
    title: TITLE,
    description:
      "Software, datos e IA en producción. Cuatro sistemas públicos con sus decisiones técnicas y su código.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Software, datos e IA en producción. Cuatro sistemas públicos con sus decisiones técnicas y su código.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={fontVars}>
      <body>
        <a className="skip" href="#main">
          Saltar al contenido
        </a>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <Chatbot />
        <noscript>
          <style>{`
            [data-page-transition], [data-reveal] { opacity: 1 !important; transform: none !important; }
            .site-header__nav { display: flex !important; }
            .index-trigger { display: none !important; }
          `}</style>
        </noscript>
      </body>
    </html>
  );
}
