import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiSend, FiLoader } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import useFadeUp from '../hooks/useFadeUp'

export default function Contact() {
  const ref = useFadeUp()
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setSending(false)
        setTimeout(() => setStatus(null), 5000)
      })
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
            <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                {/* name="from_name" must match your EmailJS template variable */}
                <input id="contact-name" type="text" name="from_name"
                  placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                {/* name="user_email" must match your EmailJS template variable */}
                <input id="contact-email" type="email" name="user_email"
                  placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                {/* name="subject" must match your EmailJS template variable */}
                <input id="contact-subject" type="text" name="subject"
                  placeholder="Project Inquiry" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                {/* name="message" must match your EmailJS template variable */}
                <textarea id="contact-message" name="message"
                  placeholder="Tell me about your project..." required />
              </div>

              {/* Inline status feedback */}
              {status === 'success' && (
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ff6b6b', fontWeight: 600, marginBottom: 8 }}>
                  ✗ Something went wrong. Please try again.
                </p>
              )}

              {/* Button is disabled while sending to prevent duplicate submissions */}
              <button
                type="submit"
                id="contact-submit"
                className="btn btn-primary form-submit"
                disabled={sending}
                style={{ opacity: sending ? 0.65 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
              >
                <FiSend />
                {sending ? ' Sending…' : ' Send Message'}
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
