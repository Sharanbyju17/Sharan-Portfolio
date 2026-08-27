import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const NAV_ITEMS = ['about', 'skills', 'experience', 'education', 'projects', 'certificates', 'contact'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = 'home';
      const offset = window.innerHeight / 3;
      NAV_ITEMS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) current = id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`nav-pill glass ${scrolled ? 'scrolled' : ''}`}
        style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
      >
        {/* Brand */}
        <button
          onClick={() => go('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'none', color: 'white' }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4ff, #2563eb)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 800, color: '#000',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)',
          }}>SB</div>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '0.02em' }}>Sharan Byju</span>
        </button>

        {/* Desktop nav links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              style={{
                border: 'none', cursor: 'none',
                padding: '7px 14px', borderRadius: 999,
                fontSize: 13, fontWeight: 500,
                color: active === item ? 'var(--accent)' : 'var(--muted)',
                background: active === item ? 'rgba(0,212,255,0.08)' : 'transparent',
                transition: 'all 0.25s',
                letterSpacing: '0.02em',
                textTransform: 'capitalize',
              }}
            >{item}</button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Available status */}
          <div className="hide-on-mobile" style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            padding: '6px 12px', borderRadius: 999,
          }}>
            <span className="status-dot" />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: '#4ade80' }}>AVAILABLE</span>
          </div>

          <a
            href={`${import.meta.env.BASE_URL || '/'}Sharan_Byju_Resume.docx`}
            download
            className="hide-on-mobile"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 999,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
              color: '#000', fontSize: 12, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.04em',
              cursor: 'none',
            }}
          >
            <Download size={13} /> RESUME
          </a>

          {/* Mobile menu */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'none', color: 'white', padding: 4 }}
          >
            <div style={{ width: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', height: 2,
                  background: mobileOpen && i === 1 ? 'transparent' : 'white',
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  transform: mobileOpen
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                      : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                      : 'none'
                    : 'none',
                }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 80, left: 24, right: 24, zIndex: 99,
          background: 'rgba(8,13,26,0.98)', backdropFilter: 'blur(20px)',
          border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
        }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              style={{
                display: 'block', width: '100%', padding: '16px 24px',
                background: 'none', border: 'none', cursor: 'none',
                color: active === item ? 'var(--accent)' : 'var(--muted)',
                fontSize: 15, fontWeight: 600, textAlign: 'left',
                textTransform: 'capitalize', borderBottom: '1px solid var(--line)',
              }}
            >{item}</button>
          ))}
          <a
            href={`${import.meta.env.BASE_URL || '/'}Sharan_Byju_Resume.docx`}
            download
            style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '16px 24px',
              background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none', borderBottom: 'none',
            }}
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      )}
    </>
  );
}
