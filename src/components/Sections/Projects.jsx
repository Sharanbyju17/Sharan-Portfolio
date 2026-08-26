import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'gl',
    name: 'GL Scrutiny',
    category: 'AI-Powered Financial Audit Platform',
    stack: ['React', 'TypeScript', 'Tailwind', 'GitHub Actions'],
    desc: 'A multi-module financial audit platform for uploading, validating and scrutinizing General Ledger data against configurable rule books.',
    highlights: [
      'Real-time Workbench for client creation, GL uploads, validation and transaction-level results.',
      'Rulebook module with AI-assisted rule builder, versioning and rollback.',
      'Color-coded Excel audit exports reduced manual reporting time by ~60%.',
    ],
    accent: '#00d4ff',
  },
  {
    id: 'eltai',
    name: 'ELTAI Conference',
    category: 'Conference Management Platform',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Vite'],
    desc: 'A role-based conference platform covering dashboards, submissions, abstract management, registration and reporting.',
    highlights: [
      'Six role-specific dashboards for Submission Manager, Reviewer, Admin, Organiser, Registration Manager and Help Desk.',
      'Excel-based delegate reports, abstract downloads and configurable exports.',
      'Shared widgets and reusable table abstractions improved maintainability.',
    ],
    accent: '#7c3aed',
  },
  {
    id: 'alefitt',
    name: 'Alefitt',
    category: 'Cloud Infrastructure & DevOps',
    stack: ['AWS', 'Docker', 'GitHub Actions', 'ECS', 'VPC', 'CloudWatch'],
    desc: 'Production-oriented AWS infrastructure and automated delivery pipeline for containerized applications.',
    highlights: [
      'CI/CD pipelines reduced release cycles from days to under 30 minutes.',
      'Configured VPC networking, ECS clusters and ALB-based traffic distribution.',
      'Optimized multi-stage Docker builds, reducing image size by ~45%.',
    ],
    accent: '#FF9900',
  },
  {
    id: 'hrms',
    name: 'HRMS Project',
    category: 'Internal HR Management System',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query'],
    desc: 'An internal HR platform with planning, expenses and presentation workflows integrated with backend APIs.',
    highlights: [
      'Built PPT Maker with session creation, presenter/team assignment and task submission workflow.',
      'Designed Planner and Expenses modules from the ground up with API integration.',
      'Resolved access permissions, eligibility checks, pagination/filtering and dark-mode issues.',
    ],
    accent: '#10b981',
  },
  {
    id: 'jupiter',
    name: 'Jupiter Consulting',
    category: 'Corporate Website & Careers Portal',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    desc: 'Rebuilt a static corporate site as a dynamic React application with authentication and content modules.',
    highlights: [
      'Implemented Login, Careers, Blog and Downloads modules.',
      'Added user authentication and Careers publish/unpublish controls.',
      'Created a consistent theme system with responsive layouts across screen sizes.',
    ],
    accent: '#f59e0b',
  },
  {
    id: 'deemsys',
    name: 'Deemsys.ai Website',
    category: 'Company Website',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    desc: 'Designed and developed Leadership and Service pages aligned with the company\'s brand and messaging.',
    highlights: [
      'Translated requirements into responsive page layouts and reusable UI patterns.',
      'Focused on consistent visual language, content hierarchy and responsive presentation.',
    ],
    accent: '#2563eb',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative' }}
    >
      <div
        ref={cardRef}
        data-cursor="project"
        data-cursor-label="VIEW PROJECT"
        onMouseMove={handleMouseMove}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${project.accent}22`;
          e.currentTarget.style.borderColor = `${project.accent}33`;
        }}
        onMouseLeave={(e) => {
          if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        }}
        style={{
          background: 'rgba(8,13,26,0.9)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 18,
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
          cursor: 'none',
        }}
      >
        {/* Mock browser header */}
        <div style={{
          background: 'rgba(2,4,8,0.9)', padding: '10px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
          <div style={{
            flex: 1, marginLeft: 8,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 4, height: 18,
            display: 'flex', alignItems: 'center', padding: '0 10px',
          }}>
            <span style={{ fontSize: 9, color: '#4a5568', fontFamily: 'monospace' }}>
              {project.name.toLowerCase().replace(/\s+/g, '-')}.app
            </span>
          </div>
        </div>

        {/* Card content */}
        <div style={{ padding: '24px 28px' }}>
          {/* Project number + category */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{
              fontSize: 9, fontWeight: 800, letterSpacing: '0.16em',
              color: project.accent, fontFamily: 'monospace',
              background: `${project.accent}15`, padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${project.accent}33`,
            }}>{project.category.toUpperCase()}</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', fontWeight: 800 }}>
              0{index + 1}
            </span>
          </div>

          <h3 style={{
            fontSize: 24, fontWeight: 800, marginBottom: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1.2,
          }}>{project.name}</h3>

          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 18 }}>
            {project.desc}
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: project.accent, flexShrink: 0, marginTop: 6,
                }} />
                <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* Stack tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {project.stack.map(s => (
              <span key={s} style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                padding: '3px 8px', borderRadius: 4,
                background: 'rgba(255,255,255,0.04)', color: '#64748b',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 1, height: 40, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'monospace' }}>
              04 — SELECTED WORK
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            }}>
              Projects with <span style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>purpose.</span>
            </h2>
            <p style={{ maxWidth: 380, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
              Selected work spanning enterprise applications, internal platforms, corporate websites and cloud infrastructure.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #projects .container > div:last-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { #projects .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
