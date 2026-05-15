import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { FanPhoneLayout } from "@/components/FanPhoneLayout";

const DARK = "#1E4030";
const BG = "#F0EBE0";
const GREEN = "#4CAF7D";

interface PhoneFrameProps {
  children: ReactNode;
  label: string;
  featured?: boolean;
}

function PhoneFrame({ children, label, featured }: PhoneFrameProps) {
  const w = featured ? 240 : 216;
  const h = featured ? 488 : 440;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        style={{
          width: w,
          height: h,
          borderRadius: 36,
          border: "4px solid #111",
          boxShadow: featured
            ? "0 30px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(76,175,125,0.2)"
            : "0 20px 50px rgba(0,0,0,0.4)",
          overflow: "hidden",
          position: "relative" as const,
          backgroundColor: BG,
        }}
      >
        {/* Camera punch-hole */}
        <div
          style={{
            position: "absolute",
            top: 11,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            backgroundColor: "#111",
            borderRadius: "50%",
            zIndex: 10,
          }}
        />
        {children}
      </div>
      <p className="text-sm font-medium text-center" style={{ color: "rgba(27,58,45,0.55)" }}>
        {label}
      </p>
    </div>
  );
}

/* ── Hamburger helper ───────────────────────────────────────────────── */
function Hamburger({ light = false }: { light?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 16,
            height: 2,
            backgroundColor: light ? "rgba(255,255,255,0.8)" : DARK,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

/* ── Screen 1: Home del alumno ──────────────────────────────────────── */
function StudentHomeScreen() {
  const classes = [
    { name: "1° DAW A", room: "Aula 101", schedule: "Lun/Mié/Vie 08:00-10:00" },
    { name: "2° SMR A", room: "Aula 301", schedule: "Mar/Jue/Vie 08:00-11:00" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Dark header */}
      <div style={{ backgroundColor: DARK, padding: "26px 14px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          {/* Card icon */}
          <div
            style={{
              width: 38,
              height: 28,
              backgroundColor: "rgba(255,255,255,0.14)",
              border: "1.5px solid rgba(255,255,255,0.22)",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              padding: "0 6px",
            }}
          >
            <div style={{ height: 3, backgroundColor: "rgba(255,255,255,0.65)", borderRadius: 1 }} />
            <div style={{ width: "55%", height: 2, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
          </div>
          <Hamburger light />
        </div>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 3 }}>Buenos días,</p>
        <p style={{ color: "#fff", fontSize: 24, fontWeight: 800, fontFamily: "var(--font-rowdies)", lineHeight: 1 }}>
          Miguel
        </p>
      </div>

      {/* Light body */}
      <div style={{ flex: 1, backgroundColor: BG, padding: "10px 12px" }}>
        <div style={{ textAlign: "right", marginBottom: 8 }}>
          <span style={{ color: DARK, fontSize: 9.5, fontWeight: 600 }}>Ver leyenda</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {classes.map((c) => (
            <div key={c.name} style={{ backgroundColor: DARK, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "10px 12px 7px" }}>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "var(--font-rowdies)", marginBottom: 2 }}>
                  {c.name}
                </p>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 9 }}>
                  {c.room} - {c.schedule}
                </p>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  padding: "7px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: 14, height: 14, backgroundColor: GREEN, borderRadius: 3 }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 10 }}>ver faltas →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Detalle de ausencias ─────────────────────────────────── */
function AbsenceDetailScreen() {
  const absences = [
    { time: "08:00", date: "05-05-2026" },
    { time: "08:00", date: "04-05-2026" },
    { time: "08:00", date: "27-04-2026" },
    { time: "08:00", date: "25-03-2026" },
    { time: "08:00", date: "24-03-2026" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Dark header */}
      <div style={{ backgroundColor: DARK, padding: "26px 14px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1 }}>←</span>
          <Hamburger light />
        </div>
        <p style={{ color: "#fff", fontSize: 22, fontWeight: 800, fontFamily: "var(--font-rowdies)" }}>
          1° DAW A
        </p>
      </div>

      {/* Light body */}
      <div style={{ flex: 1, backgroundColor: BG, padding: "14px 12px" }}>
        {/* Ausencias row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ color: DARK, fontSize: 12, fontWeight: 600 }}>Ausencias</span>
          <span
            style={{
              color: GREEN,
              fontSize: 12,
              fontWeight: 700,
              border: `1.5px solid ${DARK}`,
              borderRadius: 20,
              padding: "2px 10px",
            }}
          >
            5/31
          </span>
        </div>

        {/* Absence list */}
        <div>
          {absences.map((a, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0" }}>
                <span style={{ color: DARK, fontSize: 11, fontWeight: 500, minWidth: 34 }}>{a.time}</span>
                <div style={{ width: 1, height: 16, backgroundColor: "rgba(27,58,45,0.22)" }} />
                <span style={{ color: DARK, fontSize: 11 }}>{a.date}</span>
              </div>
              {i < absences.length - 1 && (
                <div style={{ height: 1, backgroundColor: "rgba(27,58,45,0.08)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Screen 3: Pasar lista (profesor) ───────────────────────────────── */
function TeacherAttendanceScreen() {
  const calDays = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
  const calDates = [3, 4, 5, 6, 7, 8, 9];

  const students: { name: string; status: string; bg: string; color: string; border: string }[] = [
    { name: "diego cardona", status: "Presente",   bg: GREEN, color: "#fff", border: GREEN },
    { name: "juan perez",    status: "Justificado", bg: "transparent", color: GREEN, border: DARK },
    { name: "Miguel Pérez",  status: "Presente",   bg: GREEN, color: "#fff", border: GREEN },
    { name: "Pablo Díaz",    status: "Presente",   bg: GREEN, color: "#fff", border: GREEN },
    { name: "Sofía Gómez",   status: "Ausente",    bg: DARK,  color: "#fff", border: DARK },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: BG }}>
      {/* Calendar */}
      <div style={{ padding: "28px 12px 6px" }}>
        {/* Month nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
          <span style={{ color: DARK, fontSize: 12 }}>‹</span>
          <span style={{ color: DARK, fontSize: 10, fontWeight: 600 }}>mayo de 2026</span>
          <span style={{ color: DARK, fontSize: 12 }}>›</span>
        </div>

        {/* Day labels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 3 }}>
          {calDays.map((d) => (
            <div key={d} style={{ textAlign: "center", color: "rgba(27,58,45,0.4)", fontSize: 7.5 }}>
              {d}
            </div>
          ))}
        </div>

        {/* Date numbers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {calDates.map((d) => (
            <div
              key={d}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22,
                height: 22,
                margin: "0 auto",
                borderRadius: "50%",
                backgroundColor: d === 5 ? DARK : "transparent",
              }}
            >
              <span style={{ color: d === 5 ? "#fff" : DARK, fontSize: 10, fontWeight: d === 5 ? 700 : 400 }}>
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Date heading */}
      <div style={{ padding: "6px 12px 6px" }}>
        <p style={{ color: DARK, fontSize: 11, fontWeight: 500 }}>Mayo Martes</p>
        <p style={{ color: DARK, fontSize: 30, fontWeight: 800, fontFamily: "var(--font-rowdies)", lineHeight: 1 }}>5</p>
      </div>

      {/* Student list */}
      <div style={{ flex: 1, padding: "0 12px", overflowY: "hidden" }}>
        {students.map((s, i) => (
          <div key={s.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0" }}>
              <span style={{ color: DARK, fontSize: 10, fontWeight: 500 }}>{s.name}</span>
              <div
                style={{
                  backgroundColor: s.bg,
                  border: `1.5px solid ${s.border}`,
                  borderRadius: 6,
                  padding: "3px 7px",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <span style={{ color: s.color, fontSize: 8.5, fontWeight: 600 }}>{s.status}</span>
                <ChevronDown size={8} color={s.color} />
              </div>
            </div>
            {i < students.length - 1 && (
              <div style={{ height: 1, backgroundColor: "rgba(27,58,45,0.08)" }} />
            )}
          </div>
        ))}
      </div>

      {/* Save button */}
      <div style={{ padding: "8px 12px 12px" }}>
        <div
          style={{
            backgroundColor: DARK,
            borderRadius: 10,
            padding: "10px",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>Guardar asistencia</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
export default function ScreenshotsSection() {
  return (
    <section id="capturas" className="relative py-24 px-6" style={{ backgroundColor: "#F5F5EE" }}>
      <BackgroundOrbs variant="light" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#4CAF7D" }}>
              Vista previa
            </p>
            <h2
              className="font-bold"
              style={{ fontFamily: "var(--font-rowdies)", color: "#1B3A2D", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              La app en acción
            </h2>
          </div>
        </Reveal>

        <FanPhoneLayout
          left={
            <PhoneFrame label="Home del alumno">
              <StudentHomeScreen />
            </PhoneFrame>
          }
          center={
            <PhoneFrame label="Detalle de asignatura" featured>
              <AbsenceDetailScreen />
            </PhoneFrame>
          }
          right={
            <PhoneFrame label="Pasar lista">
              <TeacherAttendanceScreen />
            </PhoneFrame>
          }
        />
      </div>
    </section>
  );
}