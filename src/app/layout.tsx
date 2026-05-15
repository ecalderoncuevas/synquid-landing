import type { Metadata } from "next";
import { Rowdies, Inter } from "next/font/google";
import "./globals.css";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  variable: "--font-rowdies",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synquid | Control de Asistencia Escolar",
  description:
    "La app móvil de gestión de asistencia que conecta alumnos y profesores en tiempo real. Disponible para Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${rowdies.variable} ${inter.variable}`}>
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}