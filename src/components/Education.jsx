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
    extra: { label: 'BSc (Hons) Software Engineering', value: 'Current GPA: 3.32 / 4.00' },
  },
  {
    icon: <FiBook />,
    title: 'G.C.E. Advanced Level (Physical Science Stream)',
    institution: "Pu/Science High School, Puttalam, Sri Lanka",
    period: '2019 – 2021',
    results: ['Physics – B', 'Chemistry – C', 'Combined Mathematics – C'],
    extra: { label: 'G.C.E. Advanced Level (Physical Science Stream)', value: 'Z-Score – 1.178' },
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
                {e.extra && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 12, padding: '8px 12px', background: 'rgba(99,102,241,0.07)', borderRadius: 8, borderLeft: '3px solid var(--accent)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{e.extra.label}</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--white)' }}>{e.extra.value}</span>
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
