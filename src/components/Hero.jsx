import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiDownload, HiChevronDown } from 'react-icons/hi'
import { MdComputer, MdPsychology } from 'react-icons/md'

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCvOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
              Working with Machine Learning and Computer Vision using Python and TensorFlow.
            </p>
            <div className="hero-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Hire Me
              </a>

              {/* CV Dropdown */}
              <div className="cv-dropdown-wrap" ref={dropdownRef}>
                <button
                  className="btn btn-outline cv-btn"
                  onClick={() => setCvOpen(prev => !prev)}
                  aria-haspopup="true"
                  aria-expanded={cvOpen}
                  id="cv-dropdown-btn"
                >
                  <HiDownload />
                  Download CV
                  <HiChevronDown className={`cv-chevron ${cvOpen ? 'open' : ''}`} />
                </button>

                {cvOpen && (
                  <div className="cv-dropdown" role="menu" aria-labelledby="cv-dropdown-btn">
                    <a
                      href="/cv/cv-software-engineering.pdf"
                      download="Dilshan_Chamila_SE_CV.pdf"
                      className="cv-option"
                      role="menuitem"
                      onClick={() => setCvOpen(false)}
                    >
                      <span className="cv-option-icon se">
                        <MdComputer />
                      </span>
                      <span className="cv-option-text">
                        <strong>Software Engineering CV</strong>
                        <small>Full-Stack &amp; Web Development</small>
                      </span>
                      <HiDownload className="cv-option-dl" />
                    </a>

                    <a
                      href="/cv/cv-aiml.pdf"
                      download="Dilshan_Chamila_AIML_CV.pdf"
                      className="cv-option"
                      role="menuitem"
                      onClick={() => setCvOpen(false)}
                    >
                      <span className="cv-option-icon ai">
                        <MdPsychology />
                      </span>
                      <span className="cv-option-text">
                        <strong>AI / ML CV</strong>
                        <small>Machine Learning &amp; Computer Vision</small>
                      </span>
                      <HiDownload className="cv-option-dl" />
                    </a>
                  </div>
                )}
              </div>
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
              <img src="/images/profile/avatar.webp" alt="Dilshan Chamila"
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

