import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'

const images = [
  { src: '/images/profile/talent-1.webp', alt: 'Announcing' },
  { src: '/images/profile/talent-2.webp', alt: 'Leadership' },
  { src: '/images/profile/talent-3.webp', alt: 'IEEE Event' },
  { src: '/images/profile/talent-4.webp', alt: 'Society Event' },
  { src: '/images/profile/talent-5.webp', alt: 'Extra Activities' },
]

export default function Talents() {
  const ref = useFadeUp()
  const scrollRef = useRef(null)

  const startDrag = (e) => {
    const el = scrollRef.current
    el._isDown = true
    el._startX = e.pageX - el.offsetLeft
    el._scrollLeft = el.scrollLeft
    el.style.cursor = 'grabbing'
  }
  const stopDrag = () => {
    const el = scrollRef.current
    el._isDown = false
    el.style.cursor = 'grab'
  }
  const onDrag = (e) => {
    const el = scrollRef.current
    if (!el._isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    el.scrollLeft = el._scrollLeft - (x - el._startX) * 2
  }

  return (
    <section className="section" id="talents" style={{ background: 'var(--bg2)' }}>
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">✨ Talents &amp; Beyond</h2>
        </div>
        <p className="talents-desc fade-up">
          🎤 I'm a <strong style={{ color: '#e2e8f0' }}>skilled announcer</strong> with experience in{' '}
          <strong style={{ color: '#e2e8f0' }}>several cultural events</strong>. Beyond announcing, I excel in{' '}
          <strong style={{ color: '#e2e8f0' }}>leadership roles</strong> and actively{' '}
          <strong style={{ color: '#e2e8f0' }}>organize extracurricular events</strong> with <strong style={{ color: '#e2e8f0' }}>IEEE</strong> and the{' '}
          <strong style={{ color: '#e2e8f0' }}>Society of Computer Science</strong> at Sabaragamuwa University of Sri Lanka.
        </p>

        {/* Role Badge */}
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            background: 'var(--card)',
            border: '1px solid rgba(99,102,241,0.35)',
            borderLeft: '4px solid var(--accent)',
            borderRadius: 12,
            padding: '14px 24px',
            boxShadow: '0 4px 24px rgba(99,102,241,0.12)',
          }}>
            <span style={{ fontSize: '1.6rem' }}>🎙️</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Current Role
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)' }}>
                Sub-Coordinator — Main Announcing Circle
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                Sabaragamuwa University of Sri Lanka (SUSL)
              </span>
            </div>
          </div>
        </div>
        <div
          className="talents-scroll"
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={onDrag}
          style={{ cursor: 'grab' }}
        >
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
