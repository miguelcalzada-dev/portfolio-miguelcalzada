import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google"; // taste-skill-ignore
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

const spaceMono = Space_Mono({ // taste-skill-ignore
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

// Familias de la marca: serif de titulares, grotesca de texto y mono de etiquetas.
const fontVars = `${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`; // taste-skill-ignore

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eae8e3",
  colorScheme: "light",
};

const SITE_URL = "https://miguelcalzada.com";
const TITLE = "Miguel Ángel Calzada · Desarrollador Full-Stack e IA";
const DESCRIPTION =
  "Desarrollador Full-Stack especializado en Inteligencia Artificial y Big Data desde Madrid. Diseño y despliego APIs, microservicios y productos de datos reales sobre AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: TITLE,
    template: "%s | Miguel Ángel Calzada",
  },
  description: DESCRIPTION,
  applicationName: "Miguel Ángel Calzada · Portfolio",
  authors: [{ name: "Miguel Ángel Calzada Martín", url: SITE_URL }],
  creator: "Miguel Ángel Calzada Martín",
  publisher: "Miguel Ángel Calzada Martín",
  category: "technology",
  keywords: [
    "Miguel Ángel Calzada",
    "Software Developer",
    "Full-Stack",
    "Inteligencia Artificial",
    "Big Data",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
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
    siteName: "Miguel Ángel Calzada",
    title: TITLE,
    description:
      "Desarrollador Full-Stack e IA desde Madrid. APIs, microservicios y productos de datos reales desplegados en producción.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Desarrollador Full-Stack e IA desde Madrid: APIs, microservicios y productos de datos reales.",
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
    <html lang="es" className={fontVars} suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
