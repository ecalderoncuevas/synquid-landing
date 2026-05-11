import { ReactNode } from "react";

/* ── Shared phone frame ─────────────────────────────────────────────── */

interface PhoneFrameProps {
  children: ReactNode;
  navActiveIndex?: number;
  label: string;
  featured?: boolean;
}

function PhoneFrame({ children, navActiveIndex = 0, label, featured }: PhoneFrameProps) {
  const w = featured ? 240 : 216;
  const h = featured ? 488 : 440;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        style={{
          width: w,
          height: h,
          backgroundColor: "#0F2219",
          borderRadius: 36,
          border: "3.5px solid rgba(255,255,255,0.1)",
          boxShadow: featured
            ? "0 30px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(76,175,125,0.15)"
            : "0 20px 50px rgba(0,0,0,0.35)",
          overflow: "hidden",
          position: "relative" as const,
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 68,
            height: 22,
            backgroundColor: "#000",
            borderRadius: 11,
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
            bottom: 48,
            paddingTop: 40,
            paddingLeft: 12,
            paddingRight: 12,
            overflowY: "hidden",
          }}
        >
          {children}
        </div>

        {/* Bottom nav */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            backgroundColor: "#0F2219",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {["🏠", "📋", "📅", "⚙️"].map((ic, i) => (
            <span key={i} style={{ fontSize: 16, opacity: i === navActiveIndex ? 1 : 0.3 }}>
              {ic}
            </span>
          ))}
        </div>
      </div>

      <p
        className="text-sm font-medium text-center"
        style={{ color: "rgba(27,58,45,0.55)" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Screen 1: Home del alumno ─────────────────────────────────────── */

function StudentHomeScreen() {
  const subjects = [
    { name: "Matemáticas", pct: "95%", bg: "#A8D5A2", text: "#1B3A2D" },
    { name: "Historia", pct: "78%", bg: "#F5D86E", text: "#1B3A2D" },
    { name: "Inglés", pct: "92%", bg: "#A8D5A2", text: "#1B3A2D" },
    { name: "Física", pct: "62%", bg: "#E87070", text: "#fff" },
    { name: "Filosofía", pct: "85%", bg: "#A8D5A2", text: "#1B3A2D" },
  ];

  return (
    <>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 2 }}>
        Buenos días,
      </p>
      <p
        style={{
          color: "#fff",
          fontFamily: "var(--font-rowdies)",
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Alex García 👋
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 12 }}>
        {[
          { v: "3", l: "Faltas", c: "#E87070" },
          { v: "1", l: "Just.", c: "#F5D86E" },
          { v: "48", l: "Clases", c: "#A8D5A2" },
        ].map((s) => (
          <div
            key={s.l}
            style={{ backgroundColor: "rgba(76,175,125,0.1)", borderRadius: 10, padding: "6px 4px", textAlign: "center" }}
          >
            <div style={{ color: s.c, fontSize: 16, fontWeight: 700, lineHeight: 1 }}>{s.v}</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 9, letterSpacing: "0.07em", marginBottom: 7 }}>
        ASIGNATURAS
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {subjects.map((s) => (
          <div
            key={s.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "8px 10px",
            }}
          >
            <span style={{ color: "#fff", fontSize: 11 }}>{s.name}</span>
            <span
              style={{
                backgroundColor: s.bg,
                color: s.text,
                fontSize: 9,
                fontWeight: 700,
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {s.pct}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Screen 2: Detalle de asignatura ───────────────────────────────── */

function SubjectDetailScreen() {
  const sessions = [
    { date: "05 May", day: "Lun", ok: true },
    { date: "07 May", day: "Mié", ok: false },
    { date: "09 May", day: "Vie", ok: true },
    { date: "12 May", day: "Lun", ok: true },
    { date: "14 May", day: "Mié", ok: true },
  ];

  return (
    <>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 2 }}>← Volver</p>
      <p
        style={{ color: "#fff", fontFamily: "var(--font-rowdies)", fontSize: 14, fontWeight: 700, marginBottom: 2 }}
      >
        Matemáticas
      </p>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginBottom: 12 }}>
        Prof. García · 2º DAM
      </p>

      {/* Big % */}
      <div
        style={{
          backgroundColor: "rgba(168,213,162,0.12)",
          borderRadius: 16,
          padding: "12px 8px",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-rowdies)",
            fontSize: 40,
            color: "#A8D5A2",
            lineHeight: 1,
          }}
        >
          95%
        </div>
        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, marginTop: 4 }}>
          Asistencia general
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 6 }}>
          <span style={{ color: "#A8D5A2", fontSize: 9 }}>✓ 19 presencias</span>
          <span style={{ color: "#E87070", fontSize: 9 }}>✗ 1 falta</span>
        </div>
      </div>

      <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 9, letterSpacing: "0.07em", marginBottom: 7 }}>
        ÚLTIMAS SESIONES
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {sessions.map((s) => (
          <div
            key={s.date}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "8px 10px",
            }}
          >
            <div>
              <span style={{ color: "#fff", fontSize: 11 }}>{s.date}</span>
              <span style={{ color: "rgba(255,255,255,0.38)", fontSize: 10, marginLeft: 8 }}>{s.day}</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: s.ok ? "rgba(168,213,162,0.2)" : "rgba(232,112,112,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: s.ok ? "#A8D5A2" : "#E87070", fontSize: 10 }}>
                {s.ok ? "✓" : "✗"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Screen 3: Agenda del profesor ─────────────────────────────────── */

function TeacherScheduleScreen() {
  const classes = [
    { time: "08:00", name: "Matemáticas 1A", students: "28/30", pct: 93, color: "#A8D5A2" },
    { time: "10:00", name: "Matemáticas 2B", students: "25/30", pct: 83, color: "#A8D5A2" },
    { time: "12:00", name: "Matemáticas 3A", students: "18/30", pct: 60, color: "#E87070" },
    { time: "15:00", name: "Matemáticas 1B", students: "29/30", pct: 97, color: "#A8D5A2" },
  ];

  return (
    <>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 2 }}>Lun, 11 Mayo</p>
      <p
        style={{ color: "#fff", fontFamily: "var(--font-rowdies)", fontSize: 13, fontWeight: 700, marginBottom: 10 }}
      >
        Mis Clases 📋
      </p>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
        <div style={{ backgroundColor: "rgba(76,175,125,0.1)", borderRadius: 10, padding: "6px 8px", textAlign: "center" }}>
          <div style={{ color: "#4CAF7D", fontSize: 18, fontWeight: 700 }}>4</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9 }}>Clases hoy</div>
        </div>
        <div style={{ backgroundColor: "rgba(76,175,125,0.1)", borderRadius: 10, padding: "6px 8px", textAlign: "center" }}>
          <div style={{ color: "#A8D5A2", fontSize: 18, fontWeight: 700 }}>83%</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9 }}>Media asistencia</div>
        </div>
      </div>

      <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 9, letterSpacing: "0.07em", marginBottom: 7 }}>
        AGENDA DE HOY
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {classes.map((c) => (
          <div
            key={c.time}
            style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "8px 10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>{c.time}</span>
              <span style={{ color: c.color, fontSize: 10, fontWeight: 700 }}>{c.pct}%</span>
            </div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>{c.name}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "rgba(255,255,255,0.38)", fontSize: 10 }}>👥 {c.students}</span>
              <div
                style={{
                  width: 52,
                  height: 4,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{ width: `${c.pct}%`, height: "100%", backgroundColor: c.color, borderRadius: 999 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */

export default function ScreenshotsSection() {
  return (
    <section
      id="capturas"
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
            Vista previa
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-rowdies)",
              color: "#1B3A2D",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            La app en acción
          </h2>
        </div>

        {/* Phone grid */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 lg:gap-10">
          <PhoneFrame label="Home del alumno" navActiveIndex={0}>
            <StudentHomeScreen />
          </PhoneFrame>

          {/* Middle phone is taller */}
          <div className="md:mb-6">
            <PhoneFrame label="Detalle de asignatura" navActiveIndex={1} featured>
              <SubjectDetailScreen />
            </PhoneFrame>
          </div>

          <PhoneFrame label="Agenda del profesor" navActiveIndex={2}>
            <TeacherScheduleScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}