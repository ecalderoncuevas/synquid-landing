const steps = [
  {
    num: "01",
    icon: "🎭",
    title: "Elige tu rol",
    desc: "Selecciona si eres alumno o profesor y elige tu institución educativa al registrarte.",
  },
  {
    num: "02",
    icon: "🔐",
    title: "Accede de forma segura",
    desc: "Inicia sesión con tu correo institucional. Verificación por email para garantizar tu identidad.",
  },
  {
    num: "03",
    icon: "📊",
    title: "Gestiona en tiempo real",
    desc: "Consulta tus faltas o gestiona la asistencia de tu clase. Todo sincronizado al instante.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-6"
      style={{ backgroundColor: "#F5F5EE" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#4CAF7D" }}
          >
            Simple y rápido
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-rowdies)",
              color: "#1B3A2D",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Big number */}
              <div
                className="font-bold leading-none mb-3"
                style={{
                  fontFamily: "var(--font-rowdies)",
                  fontSize: 64,
                  color: "rgba(76,175,125,0.18)",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>

              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5 shadow-md"
                style={{ backgroundColor: "#1B3A2D" }}
              >
                {step.icon}
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: "rgba(27,58,45,0.65)" }}
              >
                {step.desc}
              </p>

              {/* Arrow between steps (mobile: none, desktop: hidden on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}