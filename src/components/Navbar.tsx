import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: "rgba(11,26,14,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(76,175,125,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span
          className="text-white text-xl tracking-wider"
          style={{ fontFamily: "var(--font-rowdies)", fontWeight: 700 }}
        >
          SYNQUID
        </span>

        <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          <a href="#que-es" className="hover:text-white transition-colors">¿Qué es?</a>
          <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
          <a href="#descarga" className="hover:text-white transition-colors">Descarga</a>
        </div>

        <a
          href="#descarga"
          className="hidden sm:flex items-center gap-2 text-white text-sm font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-85"
          style={{ backgroundColor: "#4CAF7D", fontFamily: "var(--font-rowdies)" }}
        >
          <Download size={15} />
          Descargar App
        </a>
      </div>
    </nav>
  );
}