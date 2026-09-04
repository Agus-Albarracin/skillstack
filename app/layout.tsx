import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skillstack — Skills para construir full stack",
  description:
    "Una colección curada de skills para diseñar, construir, probar y desplegar aplicaciones full stack.",
  metadataBase: new URL("https://gsfs.vercel.app"),
  openGraph: {
    title: "Skillstack — Tu stack completo, skill por skill",
    description:
      "21 skills open source para construir aplicaciones full stack con mejores prácticas.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f3ed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a className="fixed top-4 left-4 z-50 -translate-y-24 rounded-full bg-ink px-5 py-3 font-semibold text-surface transition-transform focus:translate-y-0" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
