import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const PROFILE = [
  { label: 'NAME', value: 'Sharan Byju' },
  { label: 'ROLE', value: 'Software Engineer' },
  { label: 'DOMAIN', value: 'Frontend · AWS · DevOps' },
  { label: 'EXPERIENCE', value: '2+ Years Production' },
  { label: 'STATUS', value: '● ACTIVE', accent: '#4ade80' },
  { label: 'LOCATION', value: 'Chennai, India' },
  { label: 'CONTACT', value: 'byjusharan@gmail.com' },
];

function useInView(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); obs.disconnect(); }
    }, { threshold: 0.1, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

export function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useInView(leftRef);
  useInView(rightRef);

  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', position: 'relative', zIndex: 1 }}>
        {/* Left: Copy */}
        <div ref={leftRef}>
          <div className="slide-left" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
                01 — SYSTEM PROFILE
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: 24,
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            }}>
              Engineering<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Digital Products.</span>
            </h2>

            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
              Results-driven Software Engineer specializing in Front-end Development and AWS DevOps, with hands-on experience building responsive, scalable web applications and production-ready cloud environments.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
              I combine React and TypeScript development, RESTful API integration, CI/CD automation, Docker, and AWS infrastructure to deliver reliable and maintainable software solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <MapPin size={15} />, text: 'Chennai, Tamil Nadu, India' },
                { icon: <Mail size={15} />, text: 'byjusharan@gmail.com', href: 'mailto:byjusharan@gmail.com' },
              ].map(({ icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ color: 'var(--accent)' }}>{icon}</div>
                  {href
                    ? <a href={href} style={{ color: 'var(--muted)', fontSize: 14, textDecoration: 'none', cursor: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.target.style.color = 'var(--muted)'}>{text}</a>
                    : <span style={{ color: 'var(--muted)', fontSize: 14 }}>{text}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: System Profile Terminal */}
        <div ref={rightRef}>
          <div className="slide-right" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <div style={{
              background: 'rgba(2,4,8,0.95)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: 14,
              overflow: 'hidden',
              fontFamily: 'monospace',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,212,255,0.06)',
            }}>
              {/* Window chrome */}
              <div style={{
                padding: '10px 16px', background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
                ))}
                <span style={{ marginLeft: 8, fontSize: 10, color: '#4a5568', letterSpacing: '0.06em' }}>
                  SYSTEM_PROFILE.sh
                </span>
              </div>

              <div style={{ padding: '24px 28px' }}>
                <div style={{ fontSize: 10, color: 'rgba(0,212,255,0.4)', marginBottom: 20, lineHeight: 1.6, fontFamily: 'monospace' }}>
                  ┌─────────────────────────────────────┐<br />
                  │ INITIALIZING PROFILE SEQUENCE...    │<br />
                  └─────────────────────────────────────┘
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {PROFILE.map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      style={{
                        display: 'flex', gap: 24, padding: '10px 0',
                        borderBottom: i < PROFILE.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ width: 90, fontSize: 10, fontWeight: 700, color: '#4a5568', letterSpacing: '0.14em', flexShrink: 0 }}>
                        {row.label}
                      </span>
                      <span style={{
                        fontSize: 13, color: row.accent || '#e2e8f0',
                        fontWeight: row.accent ? 700 : 400,
                      }}>
                        {row.label === 'STATUS'
                          ? <><span className="status-dot" style={{ marginRight: 6 }} />{row.value.replace('● ', '')}</>
                          : row.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', animation: 'pulse-glow 2s infinite' }} />
                  <span style={{ fontSize: 10, color: '#4a5568', fontFamily: 'monospace' }}>SYSTEM READY_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile single column */}
      <style>{`
        @media (max-width: 768px) {
          #about .container { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
