import { motion } from 'framer-motion';

const EDUCATION = [
  { period: '2021 — 2023', degree: 'Master of Computer Applications', university: 'Anna University, Chennai', grade: 'First Class (CGPA 8.5 / 10)' },
  { period: '2018 — 2021', degree: 'Bachelor of Computer Science', university: 'Madras University, Chennai', grade: 'First Class with Distinction (CGPA 8.0 / 10)' },
];

export function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
              04 — EDUCATION
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            Academic <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Background.</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="education-grid">
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: 'rgba(8,13,26,0.8)', border: '1px solid var(--line)',
                  borderRadius: 14, padding: '24px 28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--line)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--accent)', border: '2px solid var(--bg)',
                    boxShadow: '0 0 10px rgba(0,212,255,0.5)',
                  }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted)', fontFamily: 'monospace' }}>
                    {ed.period}
                  </span>
                </div>

                <h4 style={{ fontSize: 18, fontWeight: 700, marginTop: 6, marginBottom: 8, lineHeight: 1.3 }}>{ed.degree}</h4>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 12 }}>{ed.university}</p>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(0, 212, 255, 0.1)',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 12, fontWeight: 600, color: 'var(--accent)'
                }}>{ed.grade}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .education-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
