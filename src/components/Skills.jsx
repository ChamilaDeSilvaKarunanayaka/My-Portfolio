import useFadeUp from '../hooks/useFadeUp'

/* ── Inline SVG icons — zero external HTTP requests ── */
const icons = {
  HTML5: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#E44D26"/>
      <path d="M16 27.6l6.2-1.7 2-22.9H16v24.6z" fill="#F16529"/>
      <path d="M16 13h-4.1l-.3-3H16V7H8.3l.8 9H16v-3zm.1 8.4l-3.9-1-.3-3H9l.6 6.4 6.5 1.8.1-.2z" fill="#EBEBEB"/>
      <path d="M16 13v3h3.8l-.4 4.4-3.4.9v3.1l6.4-1.8.9-9.6H16zm0-6v3h7.5l.3-3H16z" fill="#fff"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#1572B6"/>
      <path d="M16 27.6l6.2-1.7 2-22.9H16v24.6z" fill="#33A9DC"/>
      <path d="M16 13H9.3l.3 3H16v-3zm-6.7-6H16V7H8.9l.4 0zm.4 6l.3 3 3.4.9V13H9.7zm6.3 8.5l-3.4-.9-.2-2.6H9.5l.4 4.7 6 1.7.1-.2z" fill="#EBEBEB"/>
      <path d="M16 16v-3h6.7l-.6 6.3-6.1 1.7v-3.1l3.4-.9.4-4.4H16v3.4z" fill="#fff"/>
      <path d="M16 7v3h7l-.3-3H16z" fill="#fff"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="3" fill="#F7DF1E"/>
      <path d="M9.5 25.3l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7v-9.1h2.8v9.2c0 2.8-1.6 4-4 4-2.2 0-3.4-1.1-4.2-2.4zM20.2 25l2.3-1.4c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.3 0-.9-.8-1.3-2.1-1.8l-.7-.3c-2.1-.9-3.5-2-3.5-4.3 0-2.2 1.6-3.8 4.2-3.8 1.8 0 3.1.6 4 2.2l-2.2 1.4c-.5-.9-1-.9-1.8-.9-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.7 1.6l.7.3c2.5 1.1 3.9 2.1 3.9 4.5 0 2.6-2 4-4.7 4-2.6 0-4.3-1.2-5.2-2.9z" fill="#000"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="3" fill="#3178C6"/>
      <path d="M18.6 23v2.7c.5.3 1.1.5 1.7.6.7.1 1.3.2 2 .2.7 0 1.3-.1 1.9-.2.6-.2 1.1-.4 1.5-.7.4-.3.8-.8 1-1.3.2-.5.4-1.1.4-1.9 0-.5-.1-1-.2-1.4-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.6-1.1-.9-.4-.2-.9-.5-1.5-.7-.4-.1-.8-.3-1.1-.4-.3-.1-.6-.3-.8-.4-.2-.2-.4-.3-.5-.5-.1-.2-.2-.4-.2-.7 0-.2 0-.5.1-.6.1-.2.2-.3.4-.5.2-.1.4-.2.6-.3.3-.1.5-.1.8-.1.2 0 .5 0 .7.1.2 0 .5.1.7.2.2.1.5.2.7.4.2.2.4.3.5.5V16c-.4-.3-.9-.5-1.5-.6-.5-.1-1.1-.2-1.7-.2-.6 0-1.3.1-1.8.2-.6.2-1 .4-1.5.7-.4.3-.7.7-1 1.2-.2.5-.3 1-.3 1.7 0 .8.2 1.5.7 2.1.5.6 1.2 1 2.1 1.4l1.2.5c.4.1.7.3.9.4.3.2.5.3.6.5.1.2.2.4.2.7 0 .3 0 .5-.1.7-.1.2-.2.4-.4.5-.2.1-.4.2-.6.3-.3.1-.6.1-.9.1-.6 0-1.2-.1-1.8-.4-.5-.3-1-.7-1.5-1.2zM12.7 18.3H16V16H6v2.3h3.3V26h3.4v-7.7z" fill="white"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#000"/>
      <path d="M9 22V10h9.5l-7 9.5H19V10" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M22 10v12" stroke="white" strokeWidth="1.8"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L4 9.5v13L16 29l12-6.5V9.5L16 3z" fill="#539E43"/>
      <path d="M16 7.5L7.5 12v8l8.5 4.5L24 20v-8L16 7.5z" fill="#3C873A"/>
      <path d="M16 13v6m0-6l-3 2m3-2l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="3" fill="#000"/>
      <text x="5" y="20" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">express</text>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3c-3.5 0-6.5.7-6.5 3v2.5h6.5v1H7c-2 0-4 1.5-4 4.5s1.5 5 4 5.5h2.5V17c0-2.5 1.5-4 4-4h7.5c2 0 3.5-1 3.5-3V6c0-2-2-3-6.5-3zm-1.5 2c.7 0 1.3.5 1.3 1.2S15.2 7.5 14.5 7.5 13.2 7 13.2 6.2 13.8 5 14.5 5z" fill="#3776AB"/>
      <path d="M16 29c3.5 0 6.5-.7 6.5-3v-2.5H16v-1h9c2 0 4-1.5 4-4.5S27.5 13 25 12.5h-2.5V15c0 2.5-1.5 4-4 4H11c-2 0-3.5 1-3.5 3v4c0 2 2 3 6.5 3zm1.5-2c-.7 0-1.3-.5-1.3-1.2s.6-1.3 1.3-1.3 1.3.5 1.3 1.3S18.2 27 17.5 27z" fill="#FFD43B"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="9" rx="9" ry="5" fill="#336791"/>
      <path d="M7 9v14c0 2.8 4 5 9 5s9-2.2 9-5V9" stroke="#336791" strokeWidth="2" fill="none"/>
      <ellipse cx="16" cy="9" rx="9" ry="5" fill="#336791"/>
      <ellipse cx="16" cy="9" rx="9" ry="5" fill="none" stroke="#6ea7cf" strokeWidth="1"/>
      <path d="M7 16c0 2.8 4 5 9 5s9-2.2 9-5" stroke="#6ea7cf" strokeWidth="1" fill="none"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3c0 0-7 8-7 15a7 7 0 0014 0C23 11 16 3 16 3z" fill="#4FAA41"/>
      <path d="M16 3v24" stroke="#B8C4B9" strokeWidth="1.5"/>
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3l-9 5.2v10.4l4.5 2.6V13l4.5 2.6v-2.8L11.5 10l4.5-2.6 9 5.2v10.4L16 25.6l-4.5-2.6v2.8l4.5 2.6 9-5.2V8.2L16 3z" fill="#FF6F00"/>
      <path d="M16 13v5l4.5-2.6V10L16 13z" fill="#FFA000"/>
    </svg>
  ),
  OpenCV: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6" fill="#5C3EE8"/>
      <circle cx="22" cy="10" r="6" fill="#E44D26"/>
      <circle cx="16" cy="20" r="6" fill="#4CAF50"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="8" y="11" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="13" y="11" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="18" y="11" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="8" y="6" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="13" y="6" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <rect x="13" y="16" width="4" height="4" rx="0.5" fill="#2396ED"/>
      <path d="M28 14.5s-1-1.5-3-1c-.5-2-2-3-4-3a4.5 4.5 0 00-4 2.5H4C4 19 6 23 13 23h6c5 0 8-3 9-7l.2-1.5z" fill="#2396ED" opacity=".5"/>
      <path d="M28 14.5c-.5 0-1 .3-1.5.5" stroke="#2396ED" strokeWidth="1.5"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 19.5c-2 .8-4 .4-5-1-.6-1 0-2.2 1.3-2.7L9 15l.5 4.5z" fill="#FF9900"/>
      <path d="M10 12l3.5-2.5c1-.7 2.2-.5 3 .5l6 8c.7 1 .3 2.2-.7 2.7L18 22l-8-10z" fill="#FF9900"/>
      <path d="M19 22l2.5 1c1 .5 2.2 0 2.7-1L27 16c.5-1 0-2.2-1-2.7L23.5 12 19 22z" fill="#FF9900"/>
      <path d="M5 24h22" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.6 5l3 3A2 2 0 0118.5 11l2.9 2.9A2 2 0 1120 16.5a2 2 0 01-.5-1.3l-2.7-2.7v7a2 2 0 11-2 0V12a2 2 0 01-1.1-3.3L10.9 5.9l-8.4 8.4a1.7 1.7 0 000 2.4l12 12a1.7 1.7 0 002.4 0l12.6-12.6a1.7 1.7 0 000-2.4z" fill="#F05032"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3C9 3 3 9 3 16.2c0 5.8 3.8 10.8 9 12.5.7.1.9-.3.9-.6v-2.1c-3.7.8-4.5-1.8-4.5-1.8-.6-1.5-1.5-2-1.5-2-1.3-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3-.3-6-1.5-6-6.6 0-1.5.5-2.7 1.4-3.6-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.4 3.3-.4 1.1 0 2.3.1 3.3.4 2.6-1.8 3.7-1.4 3.7-1.4.7 1.8.3 3.2.1 3.5.8 1 1.4 2.2 1.4 3.6 0 5.2-3 6.3-6 6.6.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.9.6 5.2-1.7 9-6.7 9-12.5C29 9 23 3 16 3z" fill="currentColor"/>
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.8 24.6L9.2 5.4l5.7 10.7-9.1 8.5z" fill="#FFA000"/>
      <path d="M17 12.3l-2 5.1 3.7-6.9 4.5 14.1-14-4.3 7.8-8z" fill="#F57F17"/>
      <path d="M5.8 24.6l.5-.2L23.2 24.6 16 3 10.3 18l-4.5 6.6z" fill="#FFCA28"/>
      <path d="M5.8 24.6l10.2-5 1.4 5.1-11.6-.1z" fill="#FFA000"/>
    </svg>
  ),
  '.Net': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="#512BD4"/>
      <text x="7" y="21" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">.NET</text>
    </svg>
  ),
  'C#': (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3l11 6.3v12.7L16 28.1 5 22V9.3L16 3z" fill="#9B4F96"/>
      <path d="M12.5 20.5a6 6 0 110-9m7 3h3m0 0v-2m0 2v2m0-2h2m-2 0h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

const tech = [
  'HTML5','CSS3','JavaScript','TypeScript','React','Next.js',
  'Node.js','Express','Python','PostgreSQL','MongoDB',
  'TensorFlow','OpenCV','Docker','AWS','Git','GitHub','Firebase','.Net','C#',
]

const skills = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'TypeScript', pct: 82 },
  { name: 'Node.js / Express', pct: 88 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'PostgreSQL', pct: 78 },
  { name: 'MongoDB', pct: 80 },
  { name: 'Python', pct: 75 },
  { name: 'TensorFlow / OpenCV', pct: 65 },
  { name: 'Gemini AI', pct: 72 },
  { name: 'Docker / AWS', pct: 60 },
  { name: 'Git / GitHub', pct: 90 },
  { name: 'REST APIs', pct: 88 },
  { name: 'Figma', pct: 70 },
  { name: '.Net', pct: 70 },
  { name: 'C#', pct: 70 },
]

export default function Skills() {
  const ref = useFadeUp()
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">Technical Skills</h2>
          <p className="fade-up">Technologies and tools I use to bring ideas to life</p>
        </div>

        {/* Tech Stack Grid — inline SVGs, zero external requests */}
        <div style={{ marginBottom: 60 }}>
          <h3 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 20, fontSize: '1rem' }} className="fade-up">Tech Stack</h3>
          <div className="tech-grid fade-up">
            {tech.map(name => (
              <div className="tech-card" key={name}>
                <div className="tech-icon">{icons[name]}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div>
          <h3 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 20, fontSize: '1rem' }} className="fade-up">Proficiency</h3>
          <div className="skills-row fade-up">
            {skills.map(s => (
              <div className="skill-bar-card" key={s.name}>
                <div className="skill-bar-top">
                  <span className="skill-bar-name">{s.name}</span>
                  <span className="skill-bar-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
