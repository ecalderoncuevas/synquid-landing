const pillars = [
  {
    icon: "📋",
    title: "Registro automático",
    desc: "Las faltas se registran al instante en cada sesión, sin papeleo ni retrasos.",
  },
  {
    icon: "👨‍🏫",
    title: "Vista diferenciada",
    desc: "Panel adaptado a cada rol: el alumno consulta sus faltas, el profesor gestiona sus clases.",
  },
  {
    icon: "🔔",
    title: "Sincronización real",
    desc: "Cambios visibles al momento en todos los dispositivos, sin necesidad de recargar.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="que-es"
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
            La plataforma
          </p>
          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-rowdies)",
              color: "#1B3A2D",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            ¿Qué es Synquid?
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(27,58,45,0.7)" }}
          >
            Synquid es una app móvil Android de gestión de asistencia escolar.
            Diseñada para dos roles —&nbsp;
            <strong style={{ color: "#1B3A2D" }}>alumno</strong> y&nbsp;
            <strong style={{ color: "#1B3A2D" }}>profesor</strong>&nbsp;—
            permite registrar, consultar y gestionar las faltas de forma ágil,
            en tiempo real y con soporte multiidioma.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="text-center p-8 rounded-3xl"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 24px rgba(27,58,45,0.08)",
              }}
            >
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D" }}
              >
                {p.title}
              </h3>
              <p style={{ color: "rgba(27,58,45,0.6)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}