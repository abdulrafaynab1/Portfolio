import './Resume.css'

const experience = [
  {
    role: 'Lumber Associate',
    org: 'The Home Depot',
    period: '2026 — Present',
    points: [
      'Help customers compare lumber and building materials, translating project requirements into practical product options',
      'Operate a radial arm saw and panel saw to complete material cuts accurately',
      'Maintain safe, organized work areas while following PPE and operating procedures',
    ],
  },
  {
    role: 'Peer Assisted Learning (PAAL) Support Worker',
    org: 'University of Saskatchewan',
    period: 'Jan 2025 — Dec 2025',
    points: [
      'Provide consistent one-on-one support to an individual with special needs in a respectful and safe environment',
      'Adapt activities and communication to individual needs while coordinating with family members and PAAL staff',
      'Demonstrate patience, reliability, sound judgment, and responsibility while working independently',
    ],
  },
]

const engineeringProjects = [
  {
    role: 'Kinetic Power Gauge',
    org: 'Personal Project',
    period: 'In Progress',
    points: [
      'Designing a Raspberry Pi Pico-based analog power meter with true-RMS voltage/current sensing and real-time power-factor calculation',
      'Implemented PWM servo control for a live wattage needle; wired and validated a ZMPT101B voltage sensor through ADC sampling; currently integrating an SCT-013-030 current transformer',
      'Documenting the build process and version-controlling code on GitHub',
    ],
  },
  {
    role: 'TI-RSLK Embedded Robotics',
    org: 'GE 143 Team Project',
    period: '2026',
    points: [
      'Programmed and debugged an MSP432-based mobile robot in C using Code Composer Studio and its serial command console',
      'Built breadboard interfaces for a speaker and IR receiver using PWM and GPIO; captured and validated NEC infrared signals with an Analog Discovery 2 and WaveForms',
      'Collaborated on enhanced drive controls using remote inputs, motor commands, tachometer feedback, and periodic interrupts',
    ],
  },
  {
    role: 'Custom Desktop Computer Design & Build',
    org: 'Personal Project',
    period: '2026',
    points: [
      'Selected compatible components based on power, thermal, airflow, reliability, and budget requirements',
      'Assembled, configured, and systematically troubleshot the completed system',
    ],
  },
]

const leadership = [
  {
    role: 'Event Lead',
    org: 'Dawah Centre — Volunteer',
    period: '2025',
    points: [
      'Coordinated soccer activities, volunteer assignments, event flow, participant safety, and schedule adherence',
    ],
  },
  {
    role: 'Media & Events Lead',
    org: 'Bedford Road Collegiate / MSA — Volunteer',
    period: '2021 — 2024',
    points: [
      'Supported community-event planning and promotion; designed posters and social content with close attention to detail',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. in Electrical Engineering',
    school: 'University of Saskatchewan',
    period: 'Sep 2024 — Present',
    points: [
      'Power engineering focus; minor in Autonomous Robotics; currently completing ECIP 200',
      'Relevant coursework: Electrical Circuits, Discrete Signals and Systems, Engineering Mathematics, and Programming for Engineers',
    ],
  },
]

const skillGroups = [
  { title: 'Proficient', items: ['Python', 'MATLAB', 'AutoCAD'] },
  {
    title: 'Engineering tools',
    items: ['C', 'Code Composer Studio', 'WaveForms', 'Git / GitHub', 'Microsoft Office', 'Revit (learning)'],
  },
  {
    title: 'Technical',
    items: ['Circuit analysis', 'Embedded hardware', 'ADC sampling', 'PWM / GPIO', 'Technical documentation', 'Troubleshooting'],
  },
  {
    title: 'Background',
    items: ['Arduino & hardware prototyping since grade 10 design coursework'],
  },
]

function Entry({ role, org, period, points }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-head">
        <span className="resume-entry-role">{role}</span>
        {period && <span className="resume-entry-period">{period}</span>}
      </div>
      <span className="resume-entry-org">{org}</span>
      <ul>
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="container resume-container">
        <div className="resume-toolbar no-print">
          <span className="eyebrow">Resume</span>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>

        <div className="resume-sheet">
          <header className="resume-header">
            <h1>Abdul Rafay Nabi</h1>
            <p className="resume-title">Electrical Engineering Student</p>
            <p className="resume-contact">
              abdulrafaynabi6@gmail.com &nbsp;·&nbsp; (639) 994-3441 &nbsp;·&nbsp; Saskatoon, SK
              <br />
              github.com/abdulrafaynab1 &nbsp;·&nbsp; linkedin.com/in/abdul-rafay-nabi
            </p>
          </header>

          <section className="resume-section">
            <h2>Profile</h2>
            <p>
              Second-year Electrical Engineering student at the University
              of Saskatchewan focused on power engineering and pursuing a
              minor in autonomous robotics. Seeking a Summer 2027 internship
              where proficient Python, MATLAB, and AutoCAD skills can
              support electrical design, power, infrastructure, and
              field-based engineering work.
            </p>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            {education.map((ed) => (
              <div className="resume-entry" key={ed.degree}>
                <div className="resume-entry-head">
                  <span className="resume-entry-role">{ed.degree}</span>
                  <span className="resume-entry-period">{ed.period}</span>
                </div>
                <span className="resume-entry-org">{ed.school}</span>
                <ul>
                  {ed.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="resume-skill-groups">
              {skillGroups.map((g) => (
                <div className="resume-skill-group" key={g.title}>
                  <span className="resume-skill-group-title">{g.title}</span>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Engineering Projects</h2>
            {engineeringProjects.map((p) => (
              <Entry key={p.role} {...p} />
            ))}
          </section>

          <section className="resume-section">
            <h2>Experience</h2>
            {experience.map((job) => (
              <Entry key={job.role + job.org} {...job} />
            ))}
          </section>

          <section className="resume-section">
            <h2>Leadership &amp; Community Involvement</h2>
            {leadership.map((job) => (
              <Entry key={job.role + job.org} {...job} />
            ))}
          </section>
        </div>
      </div>
    </main>
  )
}
