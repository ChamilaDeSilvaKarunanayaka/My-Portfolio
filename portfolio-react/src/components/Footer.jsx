import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Talents', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo">DC<span style={{ color: 'var(--accent)' }}>.</span></div>
            <p>Full Stack Developer crafting impactful applications with passion and precision.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <a href="https://github.com/ChamilaDeSilvaKarunanayaka" target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--muted)' }}
              ><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dcdskarunanayaka" target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--muted)' }}
              ><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--muted)' }}
              ><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l) }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="mailto:kdchamiladesilva@gmail.com">kdchamiladesilva@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/dcdskarunanayaka" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
              <li><a href="https://github.com/ChamilaDeSilvaKarunanayaka" target="_blank" rel="noreferrer">GitHub Profile</a></li>
              <li><span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Open to opportunities</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Dilshan Chamila. All rights reserved.</p>
          <p>Built with React.js</p>
        </div>
      </div>
    </footer>
  )
}
