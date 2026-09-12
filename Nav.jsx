import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext.jsx'
import './Nav.css'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.55 1.55M18.25 18.25l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.55-1.55M18.25 5.75l1.55-1.55"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M20.6 15.3A8.7 8.7 0 1 1 8.7 3.4a7 7 0 0 0 11.9 11.9Z" />
    </svg>
  )
}

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-mark" aria-label="Home">
          <span className="nav-mark-dot" />
          RA
        </Link>
        <nav className="nav-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <Link to="/resume">Resume</Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="/#contact" className="btn btn-primary nav-cta">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
