import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
