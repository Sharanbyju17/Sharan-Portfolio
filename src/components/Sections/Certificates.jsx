import { useState } from 'react';
import { Award, X, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiJavascript, SiPython, SiDjango, SiDocker, SiGithubactions } from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';

const CERTIFICATES = [
  {
    id: 1,
    badge: 'FRONTEND',
    badgeColor: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.1)',
    accent: '#3b82f6',
    title: 'UI Development with ReactJS',
    image: `${import.meta.env.BASE_URL}Certificate/React Certificate.jpeg`,
    description: 'Comprehensive certification covering modern React development, hooks, state management, and building interactive UIs.',
    detailDescription: 'Built modern, responsive user interfaces using ReactJS with a strong focus on reusable components, clean architecture, and user experience.',
    learned: [
      'Developed reusable React components and responsive layouts.',
      'Implemented state management and API integration.',
      'Created interactive forms, dashboards, navigation, and data-driven interfaces.',
      'Applied modern JavaScript, HTML5, CSS3, and Tailwind CSS practices.',
      'Improved application performance, maintainability, and responsive behavior.',
      'Integrated REST APIs and handled authentication and application data.'
    ],
    techString: 'ReactJS · JavaScript · HTML5 · CSS3 · Tailwind CSS · REST APIs · Git',
    highlights: 'Responsive Design · Reusable Components · API Integration · State Management · Modern UI/UX',
    techs: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
    ]
  },
  {
    id: 2,
    badge: 'BACKEND',
    badgeColor: '#a855f7',
    badgeBg: 'rgba(168, 85, 247, 0.1)',
    accent: '#a855f7',
    title: 'Advanced Python with Django',
    image: `${import.meta.env.BASE_URL}Certificate/Python Certificate.JPG`,
    description: 'Advanced Python backend development covering Django framework, ORM, REST APIs, and scalable backend architecture.',
    detailDescription: 'Developed backend applications using Python and Django, focusing on REST APIs, database integration, authentication, and scalable backend architecture.',
    learned: [
      'Developed backend applications using Python and Django.',
      'Built RESTful APIs for frontend and third-party integrations.',
      'Implemented CRUD operations and database-driven features.',
      'Worked with Django ORM for efficient database interaction.',
      'Implemented authentication and authorization workflows.',
      'Structured backend applications using maintainable and reusable architecture.',
      'Integrated APIs with modern frontend applications.'
    ],
    techString: 'Python · Django · Django REST Framework · REST APIs · SQL · PostgreSQL · Git',
    highlights: 'REST API Development · Database Integration · Authentication · CRUD Operations · Backend Architecture',
    techs: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Django', Icon: SiDjango, color: '#44B78B' },
      { name: 'REST APIs', color: '#4ade80', isApi: true },
    ]
  },
  {
    id: 3,
    badge: 'DEVOPS',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.1)',
    accent: '#f59e0b',
    title: 'DevOps & Cloud Engineering',
    image: `${import.meta.env.BASE_URL}Certificate/DevOps Certificate.pdf`,
    description: 'Comprehensive training in DevOps practices covering AWS cloud architecture, CI/CD pipelines, Docker containerization, and modern deployment strategies.',
    detailDescription: 'Built practical experience in containerization, CI/CD automation, AWS cloud services, and deployment workflows to deliver applications reliably and efficiently.',
    learned: [
      'Containerized applications using Docker and Docker Compose.',
      'Created automated CI/CD pipelines using GitHub Actions.',
      'Worked with AWS services for application deployment and cloud infrastructure.',
      'Managed Docker images using Amazon ECR.',
      'Deployed containerized applications using Amazon ECS.',
      'Used Amazon S3 for cloud storage and application assets.',
      'Configured GitHub Actions secrets and environment variables securely.',
      'Worked with Redis for caching and performance optimization.',
      'Followed automated build, test, and deployment workflows.'
    ],
    techString: 'AWS · Docker · Amazon ECS · Amazon ECR · Amazon S3 · GitHub Actions · Redis · CI/CD · Linux · Git',
    highlights: 'CI/CD Automation · Containerization · AWS Cloud · Deployment Automation · Infrastructure & Reliability',
    techs: [
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', Icon: SiGithubactions, color: '#2088FF' },
    ]
  }
];

export function Certificates() {
  const [selected, setSelected] = useState(null);

  // Lock body scroll when modal is open
  if (typeof window !== 'undefined') {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="certificates" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <div style={{ marginBottom: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--accent)'
          }}>
            <Award size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
              Certifications
            </h2>
            <p style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: 16 }}>
              Professional training and skill validations
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 24 }}>
          {CERTIFICATES.map(cert => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(10, 14, 23, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderLeft: `4px solid ${cert.accent}`,
                borderRadius: 16,
                padding: 'clamp(20px, 4vw, 32px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                boxShadow: `inset 20px 0 40px -20px ${cert.accent}15, 0 10px 30px -10px rgba(0,0,0,0.5)`,
              }}
            >
              <div style={{ display: 'flex', gap: 24, flex: 1, alignItems: 'stretch' }}>
                {/* Left image */}
                <div style={{ 
                  width: 170, flexShrink: 0,
                  borderRadius: 8, overflow: 'hidden',
                  background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {cert.image.endsWith('.pdf') ? (
                    <embed src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} type="application/pdf" style={{ width: '100%', height: '100%', pointerEvents: 'none', objectFit: 'cover' }} />
                  ) : (
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                
                {/* Right content */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{
                    background: cert.badgeBg, color: cert.badgeColor,
                    padding: '4px 10px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                    alignSelf: 'flex-start', marginBottom: 16
                  }}>
                    {cert.badge}
                  </div>
                  
                  <h3 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                    {cert.title}
                  </h3>
                  
                  <p style={{ margin: '0 0 20px', color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>
                    {cert.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
                    {cert.techs.map(tech => (
                      <div key={tech.name} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '4px 10px', borderRadius: 999,
                        fontSize: 11, color: '#e2e8f0', fontWeight: 500
                      }}>
                        {tech.Icon && <tech.Icon size={12} color={tech.color} />}
                        {tech.isApi && <span style={{ color: tech.color, fontWeight: 800, fontSize: 9 }}>REST</span>}
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)'
              }}>
                <a 
                  href={cert.image} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, color: cert.accent, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
                >
                  View Certificate <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setSelected(cert)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--ink)', padding: '6px 16px', borderRadius: 999,
                    fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(2, 4, 8, 0.9)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 'clamp(16px, 3vw, 24px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 24,
                width: '100%', maxWidth: 900,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)'
                }}
              >
                <X size={20} />
              </button>
              
              <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
                <div style={{ padding: 'clamp(20px, 4vw, 32px)', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
                  <div style={{
                    background: selected.badgeBg, color: selected.badgeColor,
                    padding: '4px 10px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                    display: 'inline-block', marginBottom: 12
                  }}>
                    {selected.badge}
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, color: 'var(--ink)' }}>{selected.title}</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(14px, 2vw, 16px)' }}>{selected.detailDescription || selected.description}</p>
                </div>
                
                <div style={{ padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px, 4vw, 40px)', overflowY: 'auto' }}>
                  
                  {/* Left Column: Details */}
                  <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 24, minWidth: 260 }}>
                    
                    <div>
                      <h4 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>What I Learned & Built</h4>
                      <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {selected.learned?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>Technologies</h4>
                      <p style={{ margin: 0, color: selected.accent, fontSize: 14, fontWeight: 600, lineHeight: 1.6 }}>
                        {selected.techString}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>Highlights</h4>
                      <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>
                        {selected.highlights}
                      </p>
                    </div>

                  </div>

                  {/* Right Column: Image/PDF Preview */}
                  <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minWidth: 260 }}>
                    {selected.image.endsWith('.pdf') ? (
                      <embed
                        src={`${selected.image}#view=FitH`}
                        type="application/pdf"
                        style={{
                          width: '100%',
                          height: '500px',
                          borderRadius: 12,
                          border: '1px solid rgba(255,255,255,0.05)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}
                      />
                    ) : (
                      <img
                        src={selected.image}
                        alt={selected.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '60vh',
                          objectFit: 'contain',
                          borderRadius: 12,
                          border: '1px solid rgba(255,255,255,0.05)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                          background: '#050810'
                        }}
                      />
                    )}
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}