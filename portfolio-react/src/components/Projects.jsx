import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

const projects = [
  {
    title: 'InterviewGenie',
    badge: 'AI-Powered',
    img: '/interviewgenie.png',
    desc: 'AI-powered mock interview platform with real-time feedback and intelligent question generation.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Drizzle ORM', 'Gemini AI', 'Tailwind CSS'],
    demo: '#',
    code: 'https://github.com/InterviewGenie-SUSL/interview-mocker-application',
  },
  {
    title: 'Premier Scales Management',
    badge: 'Client Project',
    img: '/premier-scales.png',
    desc: 'Complete platform for scale repairs, calibrations, parts management, and billing with RBAC.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Google Cloud', 'JWT/RBAC'],
    demo: '#',
    code: 'https://github.com/DutheeshChelaka/primier-scales-site',
  },
  {
    title: 'ATM Guard AI',
    badge: 'Computer Vision',
    img: '/atm-guard.png',
    desc: 'Real-time surveillance system using computer vision and deep learning for ATM security.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React.js', 'MongoDB', 'Firebase'],
    demo: '#',
    code: 'https://github.com/SE5104-Mini-Project/ATM-GuardAI',
  },
]

export default function Projects() {
  const ref = useFadeUp()
  return (
    <section className="section" id="projects">
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">Featured Projects</h2>
          <p className="fade-up">Here are some of my recent projects that showcase my skills and experience.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card fade-up" key={p.title}>
              <div className="project-thumb">
                <img src={p.img} alt={p.title} />
                <div className="project-badge">{p.badge}</div>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-actions">
                  <a href={p.demo} className="primary" target="_blank" rel="noreferrer">
                    <FiExternalLink /> Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
