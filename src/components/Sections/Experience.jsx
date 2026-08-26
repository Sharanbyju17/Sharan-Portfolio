import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const EXPERIENCE = [
  {
    period: 'Jun 2024 — Present',
    role: 'Software Engineer',
    company: 'Deemsys.ai',
    summary: 'Frontend Development & AWS DevOps Engineer',
    color: '#00d4ff',
    points: [
      'Built responsive, reusable React.js applications using TypeScript, Tailwind CSS and Bootstrap.',
      'Designed end-to-end GitHub Actions CI/CD pipelines, reducing manual deployment effort by ~70%.',
      'Deployed production React applications on S3 with CloudFront for globally cached delivery.',
      'Configured VPC networking, IAM least-privilege policies, ECS, ALB and CloudWatch monitoring.',
      'Dockerized applications with optimized multi-stage builds, reducing image size by ~45%.',
      'Integrated RESTful APIs and collaborated with cross-functional teams on production-ready solutions.',
    ],
  },
];

const EDUCATION = [
  { period: '2021 — 2023', degree: 'Master of Computer Applications', university: 'Anna University, Chennai', grade: 'CGPA 8.5 / 10' },
  { period: '2018 — 2021', degree: 'Bachelor of Computer Science', university: 'Madras University, Chennai', grade: 'CGPA 8.0 / 10' },
];

export function Experience() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [lineH, setLineH] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight;
      const visible = Math.max(0, Math.min(total, window.innerHeight - rect.top));
      setLineH((visible / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
              03 — EXPERIENCE
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            Professional <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Timeline.</span>
          </h2>
        </div>

        <div ref={containerRef} style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Track line */}
          <div style={{
            position: 'absolute', left: 10, top: 0, bottom: 0,
            width: 2, background: 'rgba(255,255,255,0.06)',
          }} />
          {/* Progress line */}
          <div style={{
            position: 'absolute', left: 10, top: 0, width: 2,
            height: `${lineH}%`,
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-blue))',
            boxShadow: '0 0 10px rgba(0,212,255,0.6)',
            transition: 'height 0.2s linear',
          }} />

          {/* Experience items */}
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', marginBottom: 60 }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -46, top: 6,
                width: 12, height: 12, borderRadius: '50%',
                background: item.color,
                boxShadow: `0 0 16px ${item.color}88`,
                border: '2px solid var(--bg)',
              }} />

              <div style={{
                background: 'rgba(8,13,26,0.8)',
                border: '1px solid rgba(0,212,255,0.12)',
                borderRadius: 16, padding: '28px 32px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Top glow stripe */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${item.color}, transparent)`,
                }} />

                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: item.color, fontFamily: 'monospace' }}>
                  {item.period}
                </span>
                <h3 style={{
                  fontSize: 28, fontWeight: 800, marginTop: 6, marginBottom: 4,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>{item.role}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>
                  {item.company} <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span> {item.summary}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {item.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color={item.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.65 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 24, fontFamily: 'monospace' }}>
              EDUCATION
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {EDUCATION.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    background: 'rgba(8,13,26,0.8)', border: '1px solid var(--line)',
                    borderRadius: 14, padding: '20px 24px',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'relative',
                    marginLeft: -54, marginBottom: 16,
                  }}>
                    <div style={{
                      position: 'absolute', left: 4, top: 0,
                      width: 10, height: 10, borderRadius: '50%',
                      background: '#4b5563', border: '2px solid var(--bg)',
                    }} />
                  </div>

                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted)', fontFamily: 'monospace' }}>
                    {ed.period}
                  </span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginTop: 6, marginBottom: 4, lineHeight: 1.3 }}>{ed.degree}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 6 }}>{ed.university}</p>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#4b5563' }}>{ed.grade}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience .container > div:last-child > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
