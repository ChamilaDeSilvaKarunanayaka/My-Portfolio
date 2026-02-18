import { FiBookOpen, FiAward, FiBook } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

const education = [
  {
    icon: <FiBookOpen />,
    title: 'BSc (Hons) Software Engineering',
    institution: 'Sabaragamuwa University of Sri Lanka',
    period: '2023 – 2027',
    desc: 'Currently pursuing a comprehensive software engineering degree with focus on modern web technologies, AI integration, and software development methodologies.',
  },
  {
    icon: <FiBook />,
    title: 'G.C.E. Advanced Level (Physical Science Stream)',
    institution: "Pu/Science High School, Puttalam, Sri Lanka",
    period: '2021 – 2022',
    results: ['Physics – B', 'Chemistry – C', 'Combined Mathematics – C'],
  },
  {
    icon: <FiAward />,
    title: 'G.C.E. Ordinary Level',
    institution: "Pu/Ananda National College, Puttalam, Sri Lanka",
    period: '2018',
    achievement: '8 A\'s, 1 B  (Mathematics & Science – A, English – B)',
  },
]

export default function Education() {
  const ref = useFadeUp()
  return (
    <section className="section" id="education" style={{ background: 'var(--bg2)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">Education</h2>
          <p className="fade-up">My academic background and qualifications</p>
        </div>
        <div className="timeline">
          {education.map((e, i) => (
            <div className="timeline-item fade-up" key={i}>
              <div className="timeline-dot">{e.icon}</div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="timeline-title">{e.title}</span>
                  <span className="timeline-period">{e.period}</span>
                </div>
                <p className="timeline-sub">{e.institution}</p>
                {e.desc && <p className="timeline-desc">{e.desc}</p>}
                {e.results && (
                  <div className="edu-result">
                    {e.results.map(r => <span key={r}>{r}</span>)}
                  </div>
                )}
                {e.achievement && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
                    <FaCheckCircle style={{ color: 'var(--green)', fontSize: '0.9rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{e.achievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
