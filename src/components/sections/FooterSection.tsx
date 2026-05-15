import { GitBranch, Globe } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "rgba(9,18,12,0.88)", backdropFilter: "blur(8px)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & description */}
          <div className="sm:col-span-2 md:col-span-1">
            <div
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-rowdies)" }}
            >
              SYNQUID
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Gestión de asistencia escolar para Android. Conecta alumnos y
              profesores en tiempo real.
            </p>
          </div>

          {/* Proyecto */}
          <div>
            <h4
              className="text-xs font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-rowdies)" }}
            >
              Proyecto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://synquid.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <Globe size={13} />
                  Web oficial
                </a>
              </li>
              <li>
                <a
                  href="#descarga"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Descargar App
                </a>
              </li>
              <li>
                <a
                  href="#capturas"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Capturas de pantalla
                </a>
              </li>
            </ul>
          </div>

          {/* Código */}
          <div>
            <h4
              className="text-xs font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-rowdies)" }}
            >
              Código
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {/* Aquí está el primer cambio 👇 */}
                  <GitBranch size={13} />
                  App Flutter (Frontend)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {/* Aquí está el segundo cambio 👇 */}
                  <GitBranch size={13} />
                  Backend (API)
                </a>
              </li>
            </ul>
          </div>

          {/* Equipo */}
          <div>
            <h4
              className="text-xs font-bold text-white mb-5 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-rowdies)" }}
            >
              Equipo
            </h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Proyecto DAM · 2024
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>
            © 2024 Synquid. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#4CAF7D" }}
            />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}