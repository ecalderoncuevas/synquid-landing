import { Download, Globe, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ParallaxPhone } from "@/components/ParallaxPhone";

const HERO_DARK = "#1E4030";
const HERO_BG = "#F0EBE0";
const HERO_GREEN = "#4CAF7D";

const heroClasses = [
  { name: "1° DAW A", room: "Aula 101", schedule: "Lun/Mié/Vie 08:00-10:00" },
  { name: "2° SMR A", room: "Aula 301", schedule: "Mar/Jue/Vie 08:00-11:00" },
  { name: "1° ASIR A", room: "Aula 205", schedule: "Lun/Mié/Vie 10:00-12:00" },
];

function HeroPhoneMockup() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 264,
        height: 528,
        borderRadius: 44,
        border: "4px solid #111",
        boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(76,175,125,0.08) inset",
        overflow: "hidden",
        backgroundColor: HERO_BG,
      }}
    >
      <div
        style={{
          position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
          width: 12, height: 12, backgroundColor: "#111", borderRadius: "50%", zIndex: 10,
        }}
      />

      <div style={{ backgroundColor: HERO_DARK, padding: "32px 18px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div
            style={{
              width: 42, height: 30,
              backgroundColor: "rgba(255,255,255,0.14)",
              border: "1.5px solid rgba(255,255,255,0.22)",
              borderRadius: 7,
              display: "flex", flexDirection: "column", justifyContent: "center",
              gap: 5, padding: "0 7px",
            }}
          >
            <div style={{ height: 3, backgroundColor: "rgba(255,255,255,0.65)", borderRadius: 1 }} />
            <div style={{ width: "55%", height: 2, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 18, height: 2, backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }} />
            ))}
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 3 }}>Buenos días,</p>
        <p style={{ color: "#fff", fontSize: 26, fontWeight: 800, fontFamily: "var(--font-rowdies)", lineHeight: 1 }}>
          Alex García
        </p>
      </div>

      <div style={{ backgroundColor: HERO_BG, padding: "12px 16px" }}>
        <div style={{ textAlign: "right", marginBottom: 10 }}>
          <span style={{ color: HERO_DARK, fontSize: 10, fontWeight: 600 }}>Ver leyenda</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {heroClasses.map((c) => (
            <div key={c.name} style={{ backgroundColor: HERO_DARK, borderRadius: 13, overflow: "hidden" }}>
              <div style={{ padding: "11px 14px 8px" }}>
                <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-rowdies)", marginBottom: 3 }}>
                  {c.name}
                </p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10 }}>{c.room} - {c.schedule}</p>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  padding: "8px 14px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <div style={{ width: 14, height: 14, backgroundColor: HERO_GREEN, borderRadius: 3 }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 11 }}>ver faltas →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16"
      style={{ backgroundColor: "rgba(11,26,14,0.68)" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <Reveal direction="up" className="flex-1">
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm"
                style={{
                  backgroundColor: "rgba(76,175,125,0.12)",
                  border: "1px solid rgba(76,175,125,0.3)",
                  color: "#4CAF7D",
                }}
              >
                <Smartphone size={14} />
                <span>App Android gratuita</span>
              </div>

              <h1
                className="font-bold text-white leading-none mb-6"
                style={{ fontFamily: "var(--font-rowdies)", fontSize: "clamp(4rem, 10vw, 6rem)" }}
              >
                SYNQUID
              </h1>

              <p
                className="text-lg lg:text-xl mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                El control de asistencia que conecta alumnos y profesores en tiempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/ecalderoncuevas/proyectoFinal/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-105"
                  style={{ backgroundColor: "#4CAF7D", fontFamily: "var(--font-rowdies)" }}
                >
                  <Download size={18} />
                  Descargar App
                </a>
                <a
                  href="https://synquid.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-105"
                  style={{ border: "2px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-rowdies)" }}
                >
                  <Globe size={18} />
                  Ir a la web
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={250} className="flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute blur-3xl opacity-30 pointer-events-none"
                style={{ width: 320, height: 320, backgroundColor: "#4CAF7D", borderRadius: "50%" }}
              />
              <ParallaxPhone strength={8} lerp={0.07}>
                <HeroPhoneMockup />
              </ParallaxPhone>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}