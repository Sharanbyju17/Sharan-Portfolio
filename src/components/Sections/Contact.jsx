import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative', minHeight: '80vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', overflow: 'hidden',
        paddingTop: 120, paddingBottom: 80,
      }}
    >
      {/* Cinematic background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Grid */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        {/* Gradient glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '50%',
          transform: 'translateX(-50%)',
          width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        {/* Top separator */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
            06 — CONTACT
          </span>
          <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{
            fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 900, lineHeight: 0.95,
            letterSpacing: '-0.04em', marginBottom: 12,
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            HAVE AN<br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #2563eb 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>IDEA?</span>
          </h2>
          <p style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif" }}>
            LET'S ENGINEER IT.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}
        >
          Open to conversations around frontend engineering, AWS DevOps, and building robust digital products that scale.
        </motion.p>

        {/* Magnetic CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ display: 'inline-block', marginBottom: 60 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <a
            ref={btnRef}
            href="mailto:byjusharan@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '18px 44px', borderRadius: 999, textDecoration: 'none',
              background: 'linear-gradient(135deg, #00d4ff 0%, #2563eb 60%, #7c3aed 100%)',
              color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: '0.05em',
              cursor: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 20px 60px rgba(0,212,255,0.3), 0 0 100px rgba(37,99,235,0.2)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,212,255,0.5), 0 0 140px rgba(37,99,235,0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,212,255,0.3), 0 0 100px rgba(37,99,235,0.2)'}
          >
            Let's Connect
            <ArrowUpRight size={22} />
          </a>
        </motion.div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 60 }}>
          {[
            { href: 'https://linkedin.com/in/sharanbyju', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://github.com/sharanbyju17', Icon: Github, label: 'GitHub' },
            { href: 'mailto:byjusharan@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={label}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--muted)', textDecoration: 'none', cursor: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.color = 'var(--muted)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

        {/* Footer line */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
            fontSize: 11, color: '#334155', fontFamily: 'monospace',
          }}>
            <span>© {new Date().getFullYear()} Sharan Byju. All rights reserved.</span>
            <span>Engineered with React · Framer Motion · Tailwind</span>
            <a href="mailto:byjusharan@gmail.com" style={{ color: '#334155', textDecoration: 'none', cursor: 'none' }}>
              byjusharan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
