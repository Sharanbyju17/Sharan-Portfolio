import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiPython, SiFastapi, SiPostgresql, SiDocker, SiGithubactions } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

/* ─── Particle Background ─────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Mouse repulsion
        const mdx = p.x - mouseX, mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100) {
          p.vx += (mdx / mdist) * 0.05;
          p.vy += (mdy / mdist) * 0.05;
        }

        // Move and bounce
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  );
}

/* ─── Tech Orbit ─────────────────────────────────────── */
const ORBIT_TECHS = [
  { Icon: SiReact, label: 'React', color: '#61DAFB', ring: 210, angle: 0 },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6', ring: 210, angle: 72 },
  { Icon: SiPython, label: 'Python', color: '#3776AB', ring: 210, angle: 144 },
  { Icon: SiFastapi, label: 'FastAPI', color: '#009688', ring: 210, angle: 216 },
  { Icon: FaAws, label: 'AWS', color: '#FF9900', ring: 210, angle: 288 },
  { Icon: SiDocker, label: 'Docker', color: '#2496ED', ring: 290, angle: 30 },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#336791', ring: 290, angle: 120 },
  { Icon: SiGithubactions, label: 'CI/CD', color: '#2088FF', ring: 290, angle: 210 },
];

function TechOrbit() {
  const [hovered, setHovered] = useState(null);
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let last = 0;
    const tick = (t) => {
      const dt = t - last;
      last = t;
      setAngle1(a => a + dt * 0.008);
      setAngle2(a => a - dt * 0.006);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const getPos = (ring, baseAngle, rotOffset) => {
    const rad = ((baseAngle + rotOffset) * Math.PI) / 180;
    return { x: Math.cos(rad) * ring, y: Math.sin(rad) * ring };
  };

  const size = 660;
  const center = size / 2;

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {/* Orbit rings */}
      {[210, 290].map(r => (
        <div key={r} className="orbit-ring" style={{ width: r * 2, height: r * 2 }} />
      ))}

      {/* Tech nodes */}
      {ORBIT_TECHS.map((t, i) => {
        const rot = t.ring === 210 ? angle1 : angle2;
        const { x, y } = getPos(t.ring, t.angle, rot);
        const isHov = hovered === i;
        return (
          <div
            key={t.label}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              left: center + x - 22,
              top: center + y - 22,
              width: isHov ? 54 : 44,
              height: isHov ? 54 : 44,
              borderRadius: '50%',
              background: isHov ? `${t.color}22` : 'rgba(8,13,26,0.9)',
              border: `1px solid ${isHov ? t.color : 'rgba(255,255,255,0.1)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'none',
              transition: 'all 0.3s ease',
              boxShadow: isHov ? `0 0 20px ${t.color}66` : 'none',
              zIndex: 10,
            }}
          >
            <t.Icon size={isHov ? 20 : 16} color={isHov ? t.color : '#6b7a99'} />
            {isHov && (
              <div style={{
                position: 'absolute', top: -32,
                background: 'rgba(8,13,26,0.95)',
                border: `1px solid ${t.color}44`,
                borderRadius: 6, padding: '4px 10px',
                fontSize: 10, fontWeight: 700,
                color: t.color, whiteSpace: 'nowrap',
                letterSpacing: '0.08em',
                pointerEvents: 'none',
              }}>{t.label}</div>
            )}
          </div>
        );
      })}

      {/* Center node */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.15), rgba(8,13,26,0.9))',
        border: '1.5px solid rgba(0,212,255,0.4)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        boxShadow: '0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.08)',
        zIndex: 20,
        overflow: 'hidden',
      }}>
        {/* Glow behind photo */}
        <div
          style={{
            position: 'absolute',
            inset: -25,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.20) 0%, rgba(0,212,255,0.06) 40%, transparent 70%)',
            filter: 'blur(12px)',
            zIndex: 0,
          }}
        />

        {/* Existing center ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(0,212,255,0.45)',
            boxShadow: '0 0 20px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.08)',
            zIndex: 1,
          }}
        />

        {/* Your profile picture */}
        <img
          src={`${import.meta.env.BASE_URL}sharan-profile.png`}
          alt="Sharan Byju"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 3,
            transform: 'scale(1.1) translateY(8px)',
          }}
        />

        {/* Outer rotating ring */}
        <div
          style={{
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            border: '1px solid rgba(0,212,255,0.15)',
            animation: 'spin-slow 20s linear infinite',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}

      /* ─── Terminal ────────────────────────────────────────── */
      const TERMINAL_SCRIPT = [
      {type: 'cmd', text: '$ whoami' },
      {type: 'out', text: 'Sharan Byju' },
      {type: 'blank' },
      {type: 'cmd', text: '$ role' },
      {type: 'out', text: 'Software Engineer' },
      {type: 'out', text: 'Frontend · AWS · DevOps' },
      {type: 'blank' },
      {type: 'cmd', text: '$ stack' },
      {type: 'out', text: 'React  TypeScript  Python' },
      {type: 'out', text: 'FastAPI  PostgreSQL  Docker' },
      {type: 'out', text: 'AWS  GitHub Actions  CI/CD' },
      {type: 'blank' },
      {type: 'cmd', text: '$ status' },
      {type: 'status', text: '● Available for opportunities' },
      ];

      function Terminal() {
  const [lines, setLines] = useState([]);
      const [typing, setTyping] = useState({lineIdx: 0, charIdx: 0, current: '' });
      const endRef = useRef(null);

  useEffect(() => {
    if (typing.lineIdx >= TERMINAL_SCRIPT.length) return;
      const line = TERMINAL_SCRIPT[typing.lineIdx];

      if (line.type === 'blank') {
      const timer = setTimeout(() => {
        setLines(l => [...l, { ...line, text: '' }]);
        setTyping(t => ({lineIdx: t.lineIdx + 1, charIdx: 0, current: '' }));
      }, 200);
      return () => clearTimeout(timer);
    }

      if (typing.charIdx < line.text.length) {
      const delay = line.type === 'cmd' ? 60 : 30;
      const timer = setTimeout(() => {
        setTyping(t => ({ ...t, charIdx: t.charIdx + 1, current: line.text.slice(0, t.charIdx + 1) }));
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLines(l => [...l, { ...line, text: line.text }]);
        setTyping(t => ({lineIdx: t.lineIdx + 1, charIdx: 0, current: '' }));
      }, line.type === 'cmd' ? 400 : 100);
      return () => clearTimeout(timer);
    }
  }, [typing]);

  useEffect(() => {
    // Scroll the terminal window only, without moving the entire page
    if (endRef.current && endRef.current.parentElement) {
      const parent = endRef.current.parentElement;
      parent.scrollTop = parent.scrollHeight;
    }
  }, [lines]);

      const currentLine = typing.lineIdx < TERMINAL_SCRIPT.length ? TERMINAL_SCRIPT[typing.lineIdx] : null;

      return (
      <div style={{
        background: 'rgba(2,4,8,0.95)', border: '1px solid rgba(0,212,255,0.15)',
        borderRadius: 12, overflow: 'hidden',
        fontFamily: 'monospace', fontSize: 13,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.08)',
        maxWidth: 440, width: '100%',
      }}>
        {/* Title bar */}
        <div style={{
          padding: '10px 16px', background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
          <span style={{ marginLeft: 8, fontSize: 10, color: '#4a5568', letterSpacing: '0.06em' }}>sharan@portfolio — zsh</span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: '20px 20px 16px', height: 280, overflowY: 'auto', scrollbarWidth: 'none' }}>
          {lines.map((line, i) => (
            <div key={i} style={{
              marginBottom: line.type === 'blank' ? 8 : 3,
              color: line.type === 'cmd' ? '#00d4ff'
                : line.type === 'status' ? '#4ade80'
                  : '#94a3b8',
            }}>
              {line.type === 'status' ? <><span style={{ color: '#4ade80' }}>●</span> {line.text.replace('● ', '')}</> : line.text}
            </div>
          ))}
          {currentLine && currentLine.type !== 'blank' && (
            <div style={{ color: currentLine.type === 'cmd' ? '#00d4ff' : '#94a3b8' }}>
              {typing.current}<span className="terminal-cursor" />
            </div>
          )}
          <div ref={endRef} />
        </div>
      </div>
      );
}

      /* ─── Hero ────────────────────────────────────────────── */
      export function Hero() {
  const words = ['SOFTWARE', 'ENGINEER'];
      const subWords = ['Building scalable digital experiences', 'with modern cloud technologies.'];

      return (
      <section
        id="home"
        className="noise"
        style={{
          position: 'relative', minHeight: '100vh',
          display: 'flex', alignItems: 'center',
          overflow: 'hidden', paddingTop: 100,
        }}
      >
        {/* Gradient blobs */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)',
        }}>
          <div style={{
            position: 'absolute', width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
            top: '10%', left: '-10%', borderRadius: '50%',
            filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
            top: '20%', right: '-5%', borderRadius: '50%',
            filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite 2s',
          }} />
        </div>

        {/* Grid */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5 }} />

        {/* Canvas particles */}
        <ParticleField />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: 60, alignItems: 'center',
          }}>
            {/* Left: Text */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: i === 0 ? 24 : i === 1 ? 12 : 6, height: 4,
                      borderRadius: 2, background: i === 0 ? 'var(--accent)' : 'rgba(0,212,255,0.3)',
                    }} />
                  ))}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                  color: 'var(--accent)', textTransform: 'uppercase',
                  fontFamily: 'monospace',
                }}>Full Stack Engineer · AWS · DevOps</span>
              </div>

              {/* Main heading */}
              <div style={{ overflow: 'hidden', marginBottom: 8 }}>
                {words.map((word, i) => (
                  <div key={word} style={{ overflow: 'hidden', lineHeight: 1 }}>
                    <div
                      className="hero-word"
                      style={{
                        fontSize: 'clamp(56px, 9vw, 120px)',
                        fontWeight: 800, letterSpacing: '-0.04em',
                        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                        animationDelay: `${0.1 + i * 0.15}s`,
                        display: 'block',
                        color: i === 0 ? '#ffffff' : undefined,
                        background: i === 1
                          ? 'linear-gradient(135deg, #00d4ff 0%, #2563eb 60%, #7c3aed 100%)'
                          : undefined,
                        WebkitBackgroundClip: i === 1 ? 'text' : undefined,
                        WebkitTextFillColor: i === 1 ? 'transparent' : undefined,
                        backgroundClip: i === 1 ? 'text' : undefined,
                      }}
                    >{word}</div>
                  </div>
                ))}
              </div>

              {/* Subtitle */}
              <div style={{ marginBottom: 40, overflow: 'hidden' }}>
                {subWords.map((line, i) => (
                  <div
                    key={i}
                    className="hero-word"
                    style={{
                      fontSize: 'clamp(15px, 1.8vw, 20px)',
                      color: 'var(--muted)', lineHeight: 1.7,
                      fontWeight: 400, display: 'block',
                      animationDelay: `${0.5 + i * 0.1}s`,
                    }}
                  >{line}</div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 40, marginBottom: 44, flexWrap: 'wrap' }}>
                {[
                  { val: '~70%', label: 'Less manual deployment' },
                  { val: '<30 min', label: 'Release cycles' },
                  { val: '~45%', label: 'Smaller Docker images' },
                ].map(({ val, label }) => (
                  <div key={val}>
                    <div style={{
                      fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: 'linear-gradient(135deg, white, var(--accent))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{val}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  className="mag-btn mag-btn-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore My Work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <a
                  href="mailto:byjusharan@gmail.com"
                  className="mag-btn mag-btn-secondary"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Let's Connect
                </a>
              </div>

              {/* Terminal (mobile) */}
              <div style={{ marginTop: 48, display: 'block' }} className="lg-hidden">
                <Terminal />
              </div>
            </div>

            {/* Right: Tech Orbit + Terminal stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
              <TechOrbit />
              <div style={{ display: 'block' }}>
                <Terminal />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2,
        }}>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: 24, height: 40, border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 4,
          }}>
            <div style={{
              width: 4, height: 8, background: 'var(--accent)', borderRadius: 2,
              animation: 'float 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>
      );
}
