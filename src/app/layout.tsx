import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sebastian Llamuca — Desarrollador Full Stack",
  description:
    "Desarrollador full stack en Lima, Perú. Construyo aplicaciones web de punta a punta con React, TypeScript, Node y Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans overflow-x-hidden antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
