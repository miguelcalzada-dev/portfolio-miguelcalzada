import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://miguelcalzada.com"),
  title: {
    default: "Miguel Angel Calzada - Proyectos",
    template: "%s | Miguel Angel Calzada",
  },
  description:
    "Portal de proyectos de Miguel Angel Calzada Martin: inteligencia artificial aplicada, big data, desarrollo full-stack y datos en tiempo real.",
  keywords: [
    "Miguel Angel Calzada",
    "Software Developer",
    "Inteligencia Artificial",
    "Big Data",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Node.js",
    "Madrid",
  ],
  authors: [{ name: "Miguel Angel Calzada Martin" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Miguel Angel Calzada - Proyectos",
    description:
      "Inteligencia artificial aplicada, big data, desarrollo full-stack y datos en tiempo real.",
    url: "https://miguelcalzada.com",
    siteName: "Miguel Angel Calzada",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Angel Calzada - Proyectos",
    description:
      "Inteligencia artificial aplicada, big data, desarrollo full-stack y datos en tiempo real.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1020",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
