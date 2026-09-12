import Reveal from '../Reveal.jsx'
import './Contact.css'

const ports = [
  { label: 'EMAIL', value: 'abdulrafaynabi6@gmail.com', href: 'mailto:abdulrafaynabi6@gmail.com' },
  { label: 'GITHUB', value: 'github.com/abdulrafaynab1', href: 'https://github.com/abdulrafaynab1' },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/abdul-rafay-nabi',
    href: 'https://www.linkedin.com/in/abdul-rafay-nabi/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2>Let's build something.</h2>
          <p>
            Looking for a Summer 2027 internship in power, electrical
            design, or robotics — reach out any of these ways.
          </p>

          <div className="port-row">
            {ports.map((p) => (
              <a className="port" href={p.href} key={p.label}>
                <span className="port-label">{p.label}</span>
                <span className="port-value">{p.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
