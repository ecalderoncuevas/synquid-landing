import { Download, Globe } from "lucide-react";

const subjects = [
  { name: "Matemáticas", pct: "95%", bg: "#A8D5A2", text: "#1B3A2D" },
  { name: "Historia", pct: "78%", bg: "#F5D86E", text: "#1B3A2D" },
  { name: "Inglés", pct: "92%", bg: "#A8D5A2", text: "#1B3A2D" },
  { name: "Física", pct: "62%", bg: "#E87070", text: "#fff" },
];

function HeroPhoneMockup() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 264,
        height: 528,
        backgroundColor: "#0F2219",
        borderRadius: 44,
        border: "4px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset",
        overflow: "hidden",
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: 84,
          height: 28,
          backgroundColor: "#000",
          borderRadius: 14,
          zIndex: 10,
        }}
      />

      {/* Content area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 56,
          paddingTop: 52,
          paddingLeft: 16,
          paddingRight: 16,
          overflowY: "hidden",
        }}
      >
        {/* Greeting */}
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 2 }}>
          Buenos días,
        </p>
        <p
          style={{
            color: "#fff",
            fontFamily: "var(--font-rowdies)",
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Alex García 👋
        </p>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { label: "Faltas", value: "3", color: "#E87070" },
            { label: "Justif.", value: "1", color: "#F5D86E" },
            { label: "Clases", value: "48", color: "#A8D5A2" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                backgroundColor: "rgba(76,175,125,0.1)",
                borderRadius: 12,
                padding: "8px 4px",
                textAlign: "center",
              }}
            >
              <div style={{ color: s.color, fontSize: 18, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.08em", marginBottom: 8 }}>
          MIS ASIGNATURAS
        </p>

        {/* Subjects */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {subjects.map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: "10px 12px",
              }}
            >
              <span style={{ color: "#fff", fontSize: 12 }}>{s.name}</span>
              <span
                style={{
                  backgroundColor: s.bg,
                  color: s.text,
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 999,
                }}
              >
                {s.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 56,
          backgroundColor: "#0F2219",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {["🏠", "📋", "📅", "⚙️"].map((icon, i) => (
          <span key={i} style={{ fontSize: 20, opacity: i === 0 ? 1 : 0.3 }}>
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center pt-20 pb-16"
      style={{ backgroundColor: "#1B3A2D" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm"
              style={{
                backgroundColor: "rgba(76,175,125,0.12)",
                border: "1px solid rgba(76,175,125,0.3)",
                color: "#4CAF7D",
              }}
            >
              <span>📱</span>
              <span>App Android gratuita</span>
            </div>

            {/* Title */}
            <h1
              className="font-bold text-white leading-none mb-6"
              style={{
                fontFamily: "var(--font-rowdies)",
                fontSize: "clamp(4rem, 10vw, 6rem)",
              }}
            >
              SYNQUID
            </h1>

            {/* Tagline */}
            <p
              className="text-lg lg:text-xl mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              El control de asistencia que conecta alumnos y profesores en
              tiempo real.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-105"
                style={{
                  backgroundColor: "#4CAF7D",
                  fontFamily: "var(--font-rowdies)",
                }}
              >
                <Download size={18} />
                Descargar APK
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-105"
                style={{
                  border: "2px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-rowdies)",
                }}
              >
                <Globe size={18} />
                Ir a la web
              </a>
            </div>
          </div>

          {/* Right: Phone mockup with glow */}
          <div className="flex-shrink-0 relative flex items-center justify-center">
            <div
              className="absolute blur-3xl opacity-25 pointer-events-none"
              style={{
                width: 320,
                height: 320,
                backgroundColor: "#4CAF7D",
                borderRadius: "50%",
              }}
            />
            <div className="relative">
              <HeroPhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}