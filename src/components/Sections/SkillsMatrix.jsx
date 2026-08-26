import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiRedux, SiReacthookform,
  SiPython, SiFastapi, SiPostgresql, SiMysql, SiMongodb,
  SiGithubactions, SiDocker, SiBootstrap, SiNextdotjs,
} from 'react-icons/si';
import { FaAws, FaNetworkWired, FaCogs, FaLayerGroup } from 'react-icons/fa';

const MATRIX = [
  {
    category: 'FRONTEND',
    color: '#61DAFB',
    techs: [
      { id: 'react', name: 'React.js', Icon: SiReact, color: '#61DAFB', desc: 'Component architecture, hooks, performance optimization', related: ['TypeScript', 'Redux', 'Vite'] },
      { id: 'ts', name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', desc: 'Static typing, interfaces, generics, strict mode', related: ['React.js'] },
      { id: 'js', name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', desc: 'ES6+, async/await, closures, DOM APIs', related: ['React.js'] },
      { id: 'redux', name: 'Redux', Icon: SiRedux, color: '#764ABC', desc: 'RTK, RTK Query, state normalization', related: ['React.js', 'TypeScript'] },
      { id: 'tailwind', name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4', desc: 'Utility-first CSS, custom themes, responsive design', related: ['React.js'] },
      { id: 'next', name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', desc: 'SSR, ISR, App Router, API routes', related: ['React.js', 'TypeScript'] },
    ],
  },
  {
    category: 'BACKEND',
    color: '#009688',
    techs: [
      { id: 'python', name: 'Python', Icon: SiPython, color: '#3776AB', desc: 'Scripting, automation, data processing', related: ['FastAPI'] },
      { id: 'fastapi', name: 'FastAPI', Icon: SiFastapi, color: '#009688', desc: 'Async REST APIs, Pydantic, OpenAPI docs', related: ['Python', 'PostgreSQL'] },
      { id: 'postgres', name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', desc: 'Relational data, complex queries, indexing', related: ['FastAPI'] },
      { id: 'rest', name: 'REST APIs', Icon: FaNetworkWired, color: '#10b981', desc: 'API design, authentication, versioning', related: ['FastAPI', 'React.js'] },
    ],
  },
  {
    category: 'AWS & DEVOPS',
    color: '#FF9900',
    techs: [
      { id: 'aws', name: 'AWS Cloud', Icon: FaAws, color: '#FF9900', desc: 'EC2, S3, ECS, VPC, ALB, IAM, CloudWatch, CloudFront', related: ['Docker', 'CI/CD'] },
      { id: 'docker', name: 'Docker', Icon: SiDocker, color: '#2496ED', desc: 'Multi-stage builds, image optimization (~45% smaller)', related: ['AWS Cloud', 'CI/CD'] },
      { id: 'cicd', name: 'CI/CD', Icon: FaCogs, color: '#a855f7', desc: 'Automated pipelines, deploy gates, rollbacks (~70% effort reduction)', related: ['GitHub Actions', 'Docker'] },
      { id: 'actions', name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF', desc: 'Workflow automation, runners, secrets management', related: ['CI/CD', 'Docker'] },
    ],
  },
];

export function SkillsMatrix() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="skills"
      className="section dot-grid"
      style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
              02 — TOOLKIT MATRIX
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            Tools I use to <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>ship.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {MATRIX.map(({ category, color, techs }) => (
            <div key={category}>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: '0.2em',
                color, marginBottom: 20,
                paddingBottom: 12, borderBottom: `1px solid ${color}33`,
                fontFamily: 'monospace',
              }}>{category}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {techs.map((tech) => {
                  const isHov = hovered === tech.id;
                  return (
                    <motion.div
                      key={tech.id}
                      layout
                      onHoverStart={() => setHovered(tech.id)}
                      onHoverEnd={() => setHovered(null)}
                      style={{
                        background: isHov ? `${tech.color}11` : 'rgba(2,4,8,0.6)',
                        border: `1px solid ${isHov ? tech.color + '55' : 'var(--line)'}`,
                        borderRadius: 12, padding: 14, cursor: 'none',
                        boxShadow: isHov ? `0 0 24px ${tech.color}22` : 'none',
                        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                        gridColumn: isHov ? 'span 2' : 'span 1',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: isHov ? 12 : 0 }}>
                        <tech.Icon size={20} color={isHov ? tech.color : '#6b7a99'} style={{ flexShrink: 0 }} />
                        <span style={{
                          fontSize: 12, fontWeight: 600,
                          color: isHov ? tech.color : '#94a3b8',
                          transition: 'color 0.2s',
                        }}>{tech.name}</span>
                      </div>

                      <AnimatePresence>
                        {isHov && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 10 }}>
                              {tech.desc}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                              {tech.related.map(r => (
                                <span key={r} style={{
                                  fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                                  padding: '3px 8px', borderRadius: 999,
                                  background: `${tech.color}22`, color: tech.color,
                                  border: `1px solid ${tech.color}44`,
                                }}>{r}</span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
