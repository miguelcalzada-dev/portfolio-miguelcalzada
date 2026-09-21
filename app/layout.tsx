import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
  colorScheme: "dark",
};

const SITE_URL = "https://miguelcalzada.com";
const TITLE = "Miguel Angel Calzada Martin - Software Developer | IA & Big Data";
const DESCRIPTION =
  "Desarrollador de Software especializado en Inteligencia Artificial y Big Data. Arquitecturas de microservicios, Full-Stack (Node.js/React), ingenieria de datos y DevOps. Disponible para remoto/hibrido desde Madrid.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: TITLE,
    template: "%s | Miguel Angel Calzada",
  },
  description: DESCRIPTION,
  applicationName: "Miguel Angel Calzada - Portfolio",
  authors: [{ name: "Miguel Angel Calzada Martin", url: SITE_URL }],
  creator: "Miguel Angel Calzada Martin",
  publisher: "Miguel Angel Calzada Martin",
  category: "technology",
  keywords: [
    "Miguel Angel Calzada",
    "Software Developer",
    "Inteligencia Artificial",
    "Big Data",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "RAG",
    "LLM",
    "Madrid",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Miguel Angel Calzada Martin",
    title: TITLE,
    description:
      "Desarrollador de Software especializado en Inteligencia Artificial y Big Data, disponible para remoto/hibrido desde Madrid.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Desarrollador especializado en IA, Big Data, microservicios y DevOps desde Madrid.",
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
    <html lang="es" className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="antialiased font-sans">
        <main className="brutalist-container">
          {children}
        </main>
        <CustomCursor />
      </body>
    </html>
  );
}
