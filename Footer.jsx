import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Rafay</span>
        <span className="footer-note">Built with React + Vite</span>
      </div>
    </footer>
  )
}
