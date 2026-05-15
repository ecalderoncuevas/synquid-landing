import { Users, Lock, BarChart2, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";

const steps: { num: string; Icon: LucideIcon; title: string; desc: string }[] = [
  {
    num: "01",
    Icon: Users,
    title: "Elige tu rol",
    desc: "Selecciona si eres alumno o profesor y elige tu institución educativa al registrarte.",
  },
  {
    num: "02",
    Icon: Lock,
    title: "Accede de forma segura",
    desc: "Inicia sesión con tu correo institucional. Verificación por email para garantizar tu identidad.",
  },
  {
    num: "03",
    Icon: BarChart2,
    title: "Gestiona en tiempo real",
    desc: "Consulta tus faltas o gestiona la asistencia de tu clase. Todo sincronizado al instante.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 px-6"
      style={{ backgroundColor: "#F5F5EE" }}
    >
      <BackgroundOrbs variant="light" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#4CAF7D" }}>
              Simple y rápido
            </p>
            <h2
              className="font-bold"
              style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              ¿Cómo funciona?
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map(({ num, Icon, title, desc }, i) => (
            <Reveal key={num} direction="up" delay={i * 150}>
              <div className="flex flex-col items-center text-center">
                <div
                  className="font-bold leading-none mb-3"
                  style={{
                    fontFamily: "var(--font-rowdies)",
                    fontSize: 64,
                    color: "rgba(76,175,125,0.18)",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md"
                  style={{ backgroundColor: "#1B3A2D" }}
                >
                  <Icon size={28} color="#4CAF7D" />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(27,58,45,0.65)" }}>
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}