import { motion } from 'framer-motion';

const STEPS = [
  { id: '01', title: 'DISCOVER', desc: 'Understand the problem space, user needs, and technical constraints through deep research and collaboration.' },
  { id: '02', title: 'DESIGN', desc: 'Architect scalable solutions. Plan component hierarchies, API contracts, and infrastructure topology.' },
  { id: '03', title: 'ENGINEER', desc: 'Build resilient systems with clean, maintainable code. TypeScript-first, test-driven, performance-optimized.' },
  { id: '04', title: 'DEPLOY', desc: 'Ship via automated CI/CD. Monitor with CloudWatch. Iterate based on real production data.' },
];

const STATUS_ITEMS = [
  { label: 'Frontend', stack: 'React · TypeScript · Tailwind', color: '#61DAFB' },
  { label: 'Backend', stack: 'Python · FastAPI · REST', color: '#009688' },
  { label: 'Database', stack: 'PostgreSQL · MySQL · MongoDB', color: '#336791' },
  { label: 'DevOps', stack: 'Docker · GitHub Actions · CI/CD', color: '#2496ED' },
  { label: 'Cloud', stack: 'AWS · EC2 · S3 · ECS · CloudFront', color: '#FF9900' },
];

function ArchitectureDiagram() {
  const nodes = [
    { label: 'FRONTEND', sub: 'React · TypeScript', color: '#61DAFB', level: 0 },
    { label: 'API GATEWAY', sub: 'REST · OpenAPI', color: '#00d4ff', level: 1 },
    { label: 'FASTAPI', sub: 'Python · Async', color: '#009688', level: 2 },
    { label: null, level: 3 }, // split
    { label: 'DATABASE', sub: 'PostgreSQL · MySQL', color: '#336791', level: 4 },
    { label: 'CLOUD', sub: 'AWS · Docker · CI/CD', color: '#FF9900', level: 4 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {['FRONTEND', 'API GATEWAY', 'FASTAPI'].map((label, i) => {
        const n = [
          { sub: 'React · TypeScript', color: '#61DAFB' },
          { sub: 'REST · OpenAPI', color: '#00d4ff' },
          { sub: 'Python · Async', color: '#009688' },
        ][i];

        return (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="arch-box"
              style={{
                color: n.color, borderColor: `${n.color}44`,
                background: `${n.color}0d`,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em' }}>{label}</div>
              <div style={{ fontSize: 9, color: `${n.color}99`, marginTop: 2, letterSpacing: '0.06em' }}>{n.sub}</div>
            </motion.div>
            {i < 2 && <div className="arch-connector" />}
          </div>
        );
      })}

      {/* Split */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
        {[
          { label: 'DATABASE', sub: 'PostgreSQL · MySQL', color: '#336791' },
          { label: 'CLOUD', sub: 'AWS · Docker · CI/CD', color: '#FF9900' },
        ].map((n, i) => (
          <div key={n.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 2, height: 40, background: `linear-gradient(to bottom, rgba(0,212,255,0.5), ${n.color}88)` }} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="arch-box"
              style={{ color: n.color, borderColor: `${n.color}44`, background: `${n.color}0d` }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em' }}>{n.label}</div>
              <div style={{ fontSize: 9, color: `${n.color}99`, marginTop: 2, letterSpacing: '0.06em' }}>{n.sub}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
              05 — HOW I BUILD
            </span>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            The engineering <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>process.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left: 4 Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'rgba(8,13,26,0.6)',
                  border: '1px solid var(--line)',
                  borderRadius: 14,
                  position: 'relative', overflow: 'hidden',
                }}
                whileHover={{ borderColor: 'rgba(0,212,255,0.3)', backgroundColor: 'rgba(8,13,26,0.9)' }}
              >
                <div style={{
                  fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(37,99,235,0.15))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  flexShrink: 0, lineHeight: 1,
                }}>{step.id}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', color: 'var(--accent)', marginBottom: 6, fontFamily: 'monospace' }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Architecture + Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Architecture */}
            <div style={{
              background: 'rgba(8,13,26,0.8)', border: '1px solid var(--line)',
              borderRadius: 16, padding: '32px', fontFamily: 'monospace',
            }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 28, textAlign: 'center' }}>
                SYSTEM ARCHITECTURE
              </div>
              <ArchitectureDiagram />
            </div>

            {/* System Status */}
            <div style={{
              background: 'rgba(8,13,26,0.8)', border: '1px solid var(--line)',
              borderRadius: 16, padding: '24px 28px',
            }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 20, fontFamily: 'monospace' }}>
                SYSTEM STATUS
              </div>
              {STATUS_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: i < STATUS_ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 10, color: '#475569' }}>{item.stack}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 8px ${item.color}88`,
                      animation: 'pulse-glow 2s ease-in-out infinite',
                    }} />
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: item.color }}>ONLINE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
