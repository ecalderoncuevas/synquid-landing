import { Download, Globe } from "lucide-react";

export default function DownloadSection() {
  return (
    <section
      id="descarga"
      className="py-24 px-6 text-center"
      style={{ backgroundColor: "#1B3A2D" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Android badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
          style={{
            backgroundColor: "rgba(76,175,125,0.12)",
            border: "1px solid rgba(76,175,125,0.3)",
            color: "#4CAF7D",
          }}
        >
          <span>🤖</span>
          <span>Android</span>
        </div>

        <h2
          className="font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-rowdies)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Disponible para Android
        </h2>

        <p
          className="text-lg mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Descarga la APK e instálala directamente en tu dispositivo Android.
          Sin tienda de apps, sin complicaciones.
        </p>

        {/* Primary CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg transition-transform hover:scale-105 mb-6"
          style={{
            backgroundColor: "#4CAF7D",
            fontFamily: "var(--font-rowdies)",
          }}
        >
          <Download size={22} />
          Descargar APK
        </a>

        {/* Secondary link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <Globe size={14} />
            Abrir aplicación web →
          </a>
        </div>

        {/* Version info */}
        <p
          className="mt-10 text-sm"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Versión 1.0.0 &nbsp;·&nbsp; Requiere Android 8.0 o superior
        </p>
      </div>
    </section>
  );
}