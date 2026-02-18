import { FiBriefcase, FiCode } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

const experiences = [
  {
    icon: <FiBriefcase />,
    badge: 'Professional',
    title: 'Full Stack Developer',
    company: 'Freelancer',
    period: '2023 – Present',
    list: [
      'Design and develop scalable full-stack web applications using MERN stack',
      'Build responsive and performant user interfaces with Next.js, React, and Tailwind CSS',
      'Architect and implement RESTful APIs with Node.js and Express.js',
      'Integrate AI capabilities using Gemini AI and Speech-to-Text APIs',
      'Manage and optimize PostgreSQL and MongoDB databases with Drizzle ORM',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Gemini AI', 'Tailwind CSS'],
  },
  {
    icon: <FiCode />,
    badge: 'Project',
    title: 'Academic & Personal Projects',
    company: 'University & Self-Initiated',
    period: '2023 – Present',
    list: [
      'Developed InterviewGenie: AI-powered mock interview platform with real-time feedback',
      'Built Premier Scales Site: Complete management system for scale repairs and calibrations',
      'Created ATM Guard AI: Real-time surveillance system with computer vision and threat detection',
      'Implemented end-to-end authentication, role-based access control, and cloud deployment',
    ],
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React.js', 'Firebase', 'Google Cloud', 'Drizzle ORM'],
  },
]

export default function Experience() {
  const ref = useFadeUp()
  return (
    <section className="section" id="experience">
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">Experience</h2>
          <p className="fade-up">My professional and project experience</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item fade-up" key={i}>
              <div className="timeline-dot">{exp.icon}</div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-title">{exp.title}</span>
                    <span className="tag" style={{ marginLeft: 10 }}>{exp.badge}</span>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-sub">{exp.company}</p>
                <ul className="timeline-list">
                  {exp.list.map(item => (
                    <li key={item}>
                      <FaCheckCircle style={{ color: 'var(--green)', fontSize: '0.75rem', marginTop: 3 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
