import { useState } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

export default function Contact() {
  const ref = useFadeUp()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contact">
      <div className="container" ref={ref}>
        <div className="section-header">
          <h2 className="fade-up">Get In Touch</h2>
          <p className="fade-up">Have a question or want to work together? Feel free to reach out!</p>
        </div>
        <div className="contact-grid">
          {/* Info side */}
          <div className="fade-up">
            <div className="contact-info-cards">
              <div className="contact-card">
                <div className="contact-icon"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:kdchamiladesilva@gmail.com">kdchamiladesilva@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Puttalam, Sri Lanka</p>
                </div>
              </div>
            </div>
            <h4 style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: 12, fontWeight: 600 }}>Follow Me</h4>
            <div className="contact-social-row">
              <a href="https://www.linkedin.com/in/dcdskarunanayaka" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://github.com/ChamilaDeSilvaKarunanayaka" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Form side */}
          <div className="fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="John Doe" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder="john@example.com" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Project Inquiry" required
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell me about your project..." required
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <FiSend /> {sent ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" style={{ marginTop: 60 }}>
          <h2>Let's Build Something Amazing Together</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a href="mailto:kdchamiladesilva@gmail.com" className="btn btn-primary">
            <FiMail /> Send Me a Message
          </a>
        </div>
      </div>
    </section>
  )
}
