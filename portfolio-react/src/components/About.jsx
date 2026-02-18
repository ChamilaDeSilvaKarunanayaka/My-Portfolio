import { FiCode, FiCpu, FiBook, FiBriefcase } from 'react-icons/fi'
import useFadeUp from '../hooks/useFadeUp'

const highlights = [
  { icon: <FiCode />, title: 'MERN Stack Expertise', desc: 'Full-stack development with MongoDB, Express.js, React, Node.js, Next.js, TypeScript, and PostgreSQL' },
  { icon: <FiCpu />, title: 'AI Integration', desc: 'Experience with Gemini AI, Speech-to-Text APIs, TensorFlow, and OpenCV for intelligent applications' },
  { icon: <FiBook />, title: 'Academic Foundation', desc: 'BSc (Hons) Software Engineering at Sabaragamuwa University of Sri Lanka' },
  { icon: <FiBriefcase />, title: 'Internship Ready', desc: 'Actively seeking opportunities to contribute to innovative projects and grow with industry-leading teams' },
]

export default function About() {
  const ref = useFadeUp()
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          <div className="about-img-wrap fade-up">
            <img src="/profile.jpg" alt="Dilshan Chamila" />
          </div>
          <div className="about-content fade-up">
            <p className="about-label">About Me</p>
            <h2 className="about-title">Building the Future with Code</h2>
            <p className="about-desc">
              I'm a <strong style={{ color: '#e2e8f0' }}>Full-Stack Software Developer</strong> specializing in modern web applications and AI-powered solutions.
              With hands-on experience in the <strong style={{ color: '#e2e8f0' }}>MERN stack</strong> and emerging AI technologies,
              I build scalable, user-centric digital products that solve real-world problems.
            </p>
            <p className="about-desc">
              Currently pursuing my BSc (Hons) in Software Engineering at Sabaragamuwa University of Sri Lanka,
              where I combine academic knowledge with practical project experience.
            </p>
            <div className="about-highlights">
              {highlights.map(h => (
                <div className="highlight" key={h.title}>
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-stats-row">
              <div className="about-stat"><div className="num grad">3+</div><div className="lbl">Projects Built</div></div>
              <div className="about-stat"><div className="num grad">2+</div><div className="lbl">Years Exp.</div></div>
              <div className="about-stat"><div className="num grad">10+</div><div className="lbl">Technologies</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
