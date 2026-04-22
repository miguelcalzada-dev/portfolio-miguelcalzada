import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

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
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Miguel Angel Calzada Martín — Software Developer | IA & Big Data",
  description:
    "Desarrollador de Software especializado en Inteligencia Artificial y Big Data. Arquitecturas de microservicios, Full-Stack (Node.js/React), ingeniería de datos y DevOps. Disponible para remoto/híbrido desde Madrid.",
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
    "Machine Learning",
    "Madrid",
  ],
  authors: [{ name: "Miguel Angel Calzada Martín" }],
  openGraph: {
    title: "Miguel Angel Calzada Martín — Software Developer | IA & Big Data",
    description:
      "Desarrollador de Software especializado en Inteligencia Artificial y Big Data, disponible para remoto/híbrido desde Madrid.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Angel Calzada Martín — Software Developer",
    description:
      "Desarrollador especializado en IA, Big Data, microservicios y DevOps desde Madrid.",
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
