import { ClipboardList, GraduationCap, Bell, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";

const pillars: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ClipboardList,
    title: "Registro automático",
    desc: "Las faltas se registran al instante en cada sesión, sin papeleo ni retrasos.",
  },
  {
    Icon: GraduationCap,
    title: "Vista diferenciada",
    desc: "Panel adaptado a cada rol: el alumno consulta sus faltas, el profesor gestiona sus clases.",
  },
  {
    Icon: Bell,
    title: "Sincronización real",
    desc: "Cambios visibles al momento en todos los dispositivos, sin necesidad de recargar.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="que-es"
      className="relative py-24 px-6"
      style={{ backgroundColor: "#F5F5EE" }}
    >
      <BackgroundOrbs variant="light" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#4CAF7D" }}>
              La plataforma
            </p>
            <h2
              className="font-bold mb-6"
              style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              ¿Qué es Synquid?
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(27,58,45,0.7)" }}>
              Synquid es una app móvil Android de gestión de asistencia escolar.
              Diseñada para dos roles —&nbsp;
              <strong style={{ color: "#1B3A2D" }}>alumno</strong> y&nbsp;
              <strong style={{ color: "#1B3A2D" }}>profesor</strong>&nbsp;—
              permite registrar, consultar y gestionar las faltas de forma ágil,
              en tiempo real y con soporte multiidioma.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} direction="up" delay={i * 130}>
              <div
                className="text-center p-8 rounded-3xl h-full"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(27,58,45,0.08)" }}
              >
                <div className="flex justify-center mb-5">
                  <Icon size={48} color="#4CAF7D" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D" }}>
                  {title}
                </h3>
                <p style={{ color: "rgba(27,58,45,0.6)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}