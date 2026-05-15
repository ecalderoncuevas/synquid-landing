import { Download, Globe, Smartphone, Server, Wifi } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const downloads = [
  {
    Icon: Smartphone,
    badge: "Android",
    title: "Descargar App",
    subtitle: "Aplicación móvil · APK",
    desc: "La app para alumnos y profesores. Consulta tu asistencia, pasa lista y gestiona clases en tiempo real desde tu dispositivo Android.",
    href: "https://github.com/ecalderoncuevas/proyectoFinal/releases",
    isDownload: false,
    btnLabel: "Descargar App",
  },
  {
    Icon: Server,
    badge: "Windows",
    title: "Servidor Backend",
    subtitle: "API REST · EXE",
    desc: "Ejecutable Windows que levanta el servidor API, conecta con PostgreSQL y gestiona todas las peticiones y la lógica de negocio de la plataforma.",
    href: "https://github.com/Neudys/SYNQUID-BACKEND-API/releases",
    isDownload: false,
    btnLabel: "Descargar API",
  },
  {
    Icon: Wifi,
    badge: "Raspberry Pi",
    title: "Módulo Lector NFC",
    subtitle: "NFC Reader · EXE",
    desc: "Software para Raspberry Pi que lee tarjetas NFC de los alumnos y envía las peticiones de asistencia automáticamente al servidor.",
    href: "https://github.com/Neudys/SYNQUID-RASPBERRY-PI/releases",
    isDownload: false,
    btnLabel: "Descargar NFC",
  },
] as const;

export default function DownloadSection() {
  return (
    <section
      id="descarga"
      className="relative py-24 px-6"
      style={{ backgroundColor: "rgba(11,26,14,0.72)" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
              style={{
                backgroundColor: "rgba(76,175,125,0.12)",
                border: "1px solid rgba(76,175,125,0.3)",
                color: "#4CAF7D",
              }}
            >
              <Download size={14} />
              <span>Descargas</span>
            </div>

            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-rowdies)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Todo lo que necesitas
            </h2>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Descarga cada componente de la plataforma Synquid e instálalo en su entorno correspondiente.
            </p>
          </div>
        </Reveal>

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {downloads.map(({ Icon, badge, title, subtitle, desc, href, isDownload, btnLabel }, i) => (
            <Reveal key={title} direction="up" delay={i * 120}>
              <div
                className="flex flex-col h-full p-7 rounded-2xl"
                style={{
                  backgroundColor: "rgba(76,175,125,0.07)",
                  border: "1px solid rgba(76,175,125,0.18)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(76,175,125,0.15)" }}
                  >
                    <Icon size={24} color="#4CAF7D" />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(76,175,125,0.12)",
                      border: "1px solid rgba(76,175,125,0.25)",
                      color: "#4CAF7D",
                    }}
                  >
                    {badge}
                  </span>
                </div>

                {/* Text */}
                <h3
                  className="font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-rowdies)", fontSize: 18 }}
                >
                  {title}
                </h3>
                <p className="text-xs mb-4" style={{ color: "#4CAF7D" }}>
                  {subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-7 flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {desc}
                </p>

                {/* Button */}
                <a
                  href={href}
                  {...(isDownload ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-transform hover:scale-105"
                  style={{ backgroundColor: "#4CAF7D", fontFamily: "var(--font-rowdies)" }}
                >
                  <Download size={16} />
                  {btnLabel}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Secondary link */}
        <Reveal direction="fade" delay={200}>
          <div className="text-center">
            <a
              href="https://synquid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Globe size={14} />
              Abrir aplicación web →
            </a>
            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
              App v1.0.0 &nbsp;·&nbsp; Requiere Android 8.0 o superior
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}