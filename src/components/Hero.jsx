import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-grid">
          {/* Text */}
          <div className="hero-text fade-up visible">
            <div className="hero-eyebrow">
              <span />
              Available for Opportunities
            </div>
            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="grad">Dilshan Chamila</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer &amp; Aspiring AI/ML Engineer</p>
            <p className="hero-desc">
              Building scalable web &amp; AI-powered applications using the MERN stack.
              BSc (Hons) Software Engineering at Sabaragamuwa University of Sri Lanka.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Hire Me
              </a>
              <a href="#" className="btn btn-outline">
                <HiDownload /> Download CV
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/ChamilaDeSilvaKarunanayaka" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dcdskarunanayaka" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Image */}
          <div className="hero-img-wrap fade-up visible">
            <div className="hero-img-ring">
              <img src="/profile.jpg" alt="Dilshan Chamila"
                onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }}
              />
              <div className="hero-img-placeholder" style={{ display: 'none' }}>👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
