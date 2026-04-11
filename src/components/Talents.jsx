import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'

const images = [
  { src: '/talent1.jpeg', alt: 'Announcing' },
  { src: '/talent2.jpeg', alt: 'Leadership' },
  { src: '/talent3.jpg', alt: 'IEEE Event' },
  { src: '/talent4.jpg', alt: 'Society Event' },
  { src: '/talent5.jpg', alt: 'Extra Activities' },
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
