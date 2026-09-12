import Reveal from '../Reveal.jsx'
import './Skills.css'

const subsystems = [
  {
    name: 'Proficient',
    items: ['Python', 'MATLAB', 'AutoCAD'],
  },
  {
    name: 'Engineering tools',
    items: ['C', 'Code Composer Studio', 'WaveForms', 'Git / GitHub', 'Revit (learning)'],
  },
  {
    name: 'Technical',
    items: ['Circuit analysis', 'Embedded hardware', 'ADC sampling', 'PWM / GPIO'],
  },
  {
    name: 'Background',
    items: ['Arduino & hardware prototyping since grade 10 design coursework'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2>What's on the board</h2>
            <p>
              Grouped the way you'd group parts on a schematic — by
              subsystem, not by buzzword.
            </p>
          </div>
        </Reveal>

        <div className="module-grid">
          {subsystems.map((s, i) => (
            <Reveal key={s.name} delay={i * 140}>
              <div className="module">
                <span className="module-screw" />
                <span className="module-screw module-screw-2" />
                <h3>{s.name}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
