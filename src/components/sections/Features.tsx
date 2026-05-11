const features = [
  {
    icon: "📊",
    title: "Historial de asistencia",
    desc: "El alumno consulta sus faltas por asignatura con indicador de color: verde, amarillo o rojo según su nivel.",
    tag: { text: "Alumno", bg: "#A8D5A2", color: "#1B3A2D" },
  },
  {
    icon: "🎓",
    title: "Gestión de clases",
    desc: "El profesor ve todos sus grupos y puede editar la asistencia de cada sesión desde un panel claro.",
    tag: { text: "Profesor", bg: "#4CAF7D", color: "#1B3A2D" },
  },
  {
    icon: "📅",
    title: "Calendario escolar",
    desc: "Vista semanal con las franjas horarias de cada clase. El alumno siempre sabe qué tiene y cuándo.",
    tag: { text: "Ambos", bg: "#A8D5A2", color: "#1B3A2D" },
  },
  {
    icon: "✏️",
    title: "Corrección de faltas",
    desc: "El profesor puede justificar o corregir la asistencia de un alumno concreto en cualquier sesión pasada.",
    tag: { text: "Profesor", bg: "#4CAF7D", color: "#1B3A2D" },
  },
  {
    icon: "🌐",
    title: "Multiidioma",
    desc: "Disponible en español, catalán e inglés. La app detecta el idioma del dispositivo o permite cambiarlo.",
    tag: { text: "ES · CA · EN", bg: "#F5D86E", color: "#1B3A2D" },
  },
  {
    icon: "🌙",
    title: "Tema claro / oscuro",
    desc: "Toggle en ajustes para adaptar la interfaz al entorno de cada usuario, sin esfuerzo.",
    tag: { text: "Ajustes", bg: "#A8D5A2", color: "#1B3A2D" },
  },
];

const trafficLight = [
  { color: "#A8D5A2", label: "≥ 80% — Todo correcto", textColor: "#1B3A2D" },
  { color: "#F5D86E", label: "60 – 79% — Atención", textColor: "#1B3A2D" },
  { color: "#E87070", label: "< 60% — Riesgo", textColor: "#fff" },
];

export default function FeaturesSection() {
  return (
    <section
      id="funcionalidades"
      className="py-24 px-6"
      style={{ backgroundColor: "#1B3A2D" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#4CAF7D" }}
          >
            Todo lo que necesitas
          </p>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "var(--font-rowdies)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Funcionalidades
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{
                backgroundColor: "rgba(76,175,125,0.1)",
                border: "1px solid rgba(76,175,125,0.18)",
              }}
            >
              <div style={{ fontSize: 36 }}>{f.icon}</div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-rowdies)", fontSize: 16 }}
                  >
                    {f.title}
                  </h3>
                  <span
                    className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: f.tag.bg, color: f.tag.color }}
                  >
                    {f.tag.text}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Traffic light legend */}
        <div className="mt-14">
          <p
            className="text-sm text-center mb-5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Sistema de semáforo de asistencia
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trafficLight.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: item.color, color: item.textColor }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.textColor === "#fff" ? "rgba(255,255,255,0.6)" : "#1B3A2D" }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}