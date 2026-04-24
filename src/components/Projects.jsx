import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

const projects = [
  {
    title: 'InterviewGenie',
    badge: 'AI-Powered',
    img: '/images/projects/interviewgenie/thumbnail.webp',
    desc: 'AI-powered mock interview platform with real-time feedback and intelligent question generation.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Drizzle ORM', 'Gemini AI', 'Tailwind CSS'],
    demo: 'https://www.linkedin.com/posts/dcdskarunanayaka_%F0%9D%90%88%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%AB%F0%9D%90%A8%F0%9D%90%9D%F0%9D%90%AE%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%88%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%AF%F0%9D%90%A2%F0%9D%90%9E%F0%9D%90%B0%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%A2%F0%9D%90%9E-activity-7358534778528100354-ggg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE51YIEBrTCtX1BSo373XMSL-9dyXkfWh1o',
    code: 'https://github.com/stars/ChamilaDeSilvaKarunanayaka/lists/interviewgenie',
  },
  {
    title: 'Premier Scales Management',
    badge: 'Client Project',
    img: '/images/projects/premier-scales/thumbnail.webp',
    desc: 'Complete platform for scale repairs, calibrations, parts management, and billing with RBAC.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Google Cloud', 'JWT/RBAC'],
    demo: '#',
    code: 'https://github.com/stars/ChamilaDeSilvaKarunanayaka/lists/premier-scales-syste',
  },
  {
    title: 'ATM Guard AI',
    badge: 'Computer Vision',
    img: '/images/projects/atm-guard/thumbnail.webp',
    desc: 'Real-time surveillance system using computer vision and deep learning for ATM security.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React.js', 'MongoDB', 'Firebase'],
    demo: 'https://www.linkedin.com/posts/activity-7432323055974244352-S2dN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE51YIEBrTCtX1BSo373XMSL-9dyXkfWh1o',
    code: 'https://github.com/stars/ChamilaDeSilvaKarunanayaka/lists/atm-guard-ai',
  },
  {
    title: 'GlowCart',
    badge: 'Ongoing',
    img: '/images/projects/glowcart/thumbnail.webp',
    desc: 'Scalable MERN-based e-commerce platform for online beauty product shopping with cart, checkout, and secure authentication features.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JWT/RBAC'],
    demo: '#',
    code: 'https://github.com/stars/ChamilaDeSilvaKarunanayaka/lists/glowcart-e-commerce',
  },
  {
    title: 'Integrated Academic Information System',
    badge: 'Group Project/Ongoing',
    img: '/images/projects/academic-system/thumbnail.webp',
    desc: 'Secure, scalable mark management system with 3-tier RBAC, 10+ RESTful APIs, and automated PDF & Excel report generation — reducing manual academic record processing by ~70%.',
    tags: ['React Native', '.NET', 'MySQL', 'JWT', 'RESTful APIs'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Student Performance Predictor',
    badge: 'ML Model',
    img: '/student-predictor.png',
    desc: 'Predictive analytics tool using Scikit-learn to forecast student outcomes (pass/fail) with 92% accuracy, powered by a FastAPI for instant predictions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI'],
    demo: '#',
    code: 'https://github.com/stars/ChamilaDeSilvaKarunanayaka/lists/premier-scales-system',
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
