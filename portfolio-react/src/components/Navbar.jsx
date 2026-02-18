import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#talents', label: 'Talents' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const pos = window.scrollY + 100
      for (const l of links) {
        const el = document.querySelector(l.href)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(l.href)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}>
          DC<span>.</span>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l.href) }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
            Get in Touch
          </a>
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}
