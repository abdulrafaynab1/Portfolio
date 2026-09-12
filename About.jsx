import Reveal from '../Reveal.jsx'
import './About.css'

const specs = [
  { param: 'Status', value: 'Engineering student, hands-on since grade 10' },
  { param: 'Specialty', value: 'Power engineering (minor: autonomous robotics)' },
  { param: 'Currently', value: 'Seeking a Summer 2027 internship' },
  { param: 'Off the clock', value: 'Snowboarding, badminton, soccer, gaming' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">About</span>
            <h2>Why power engineering</h2>
            <p>
              I spent most of my life coasting — not trying much, and mostly
              getting away with it. It worked until it didn't: I realized
              that habit wasn't going to leave me with anything worth
              knowing. So I changed it. I started chasing the kind of
              failure that teaches you something, and an Arduino in a grade
              10 design class turned that into a direction. Power
              engineering is where I want to build my career, with
              autonomous robotics as the thing I chase for fun and for the
              minor. Right now I'm looking for a Summer 2027 internship —
              a chance to put what I've learned to work on real electrical
              design and power problems.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="datasheet" role="table" aria-label="About, in datasheet form">
            <div className="datasheet-title">
              <span className="datasheet-dot" />
              Electrical Characteristics
            </div>
            <div className="datasheet-row datasheet-header" role="row">
              <span role="columnheader">Parameter</span>
              <span role="columnheader">Value</span>
            </div>
            {specs.map((row) => (
              <div className="datasheet-row" role="row" key={row.param}>
                <span className="datasheet-param" role="cell">
                  {row.param}
                </span>
                <span className="datasheet-value" role="cell">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
