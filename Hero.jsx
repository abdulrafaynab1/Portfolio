import './Hero.css'

const leftPins = [
  { label: 'STATUS', value: 'Seeking Summer 2027 internship' },
  { label: 'BASED', value: 'Saskatoon, SK' },
  { label: 'FOCUS', value: 'Power Eng. + Autonomous Robotics' },
]

const rightPins = [
  { label: 'STACK', value: 'Python · MATLAB · AutoCAD' },
  { label: 'TOOLS', value: 'C · Code Composer Studio · Git' },
  { label: 'CONTACT', value: 'abdulrafaynabi6@gmail.com' },
]

function Pin({ label, value, align = 'left' }) {
  return (
    <div className={`pin pin-${align}`}>
      {align === 'right' && <span className="pin-line" />}
      <div className="pin-text">
        <span className="pin-label">{label}</span>
        <span className="pin-value">{value}</span>
      </div>
      {align === 'left' && <span className="pin-line" />}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Power Engineering · Autonomous Robotics</span>
          <h1>
            I learned to enjoy failing.
            <br />
            Everything since has been <em>building</em>.
          </h1>
          <p>
            For most of my life I got by without really trying — it worked,
            until I realized it wasn't teaching me anything. Breaking that
            habit meant finding pleasure in failure: trying, breaking things,
            and fixing them until they worked. A grade 10 design class handed
            me an Arduino, and I knew what I wanted to do. I'm specializing
            in power engineering with a minor in autonomous robotics, and
            right now I'm looking for a Summer 2027 internship — a place to
            put that Python, MATLAB, and AutoCAD toolkit to work on real
            electrical design and power problems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="chip-assembly" aria-hidden="false">
          <div className="pin-col">
            {leftPins.map((p) => (
              <Pin key={p.label} {...p} align="left" />
            ))}
          </div>

          <div className="chip-body">
            <span className="chip-notch" />
            <span className="chip-eyebrow">RAFAY-PWR-01</span>
            <span className="chip-name">RAFAY</span>
            <span className="chip-sub">Power &amp; Robotics</span>
          </div>

          <div className="pin-col">
            {rightPins.map((p) => (
              <Pin key={p.label} {...p} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
