import useFadeUp from '../hooks/useFadeUp'

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
]

const tech = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', name: 'TensorFlow' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', name: 'OpenCV' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', name: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase' },
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

        {/* Tech Stack Grid */}
        <div style={{ marginBottom: 60 }}>
          <h3 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 20, fontSize: '1rem' }} className="fade-up">Tech Stack</h3>
          <div className="tech-grid fade-up">
            {tech.map(t => (
              <div className="tech-card" key={t.name}>
                <img src={t.src} alt={t.name} />
                <span>{t.name}</span>
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
