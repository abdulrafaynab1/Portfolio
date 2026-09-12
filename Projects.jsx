import { projects } from '../data/projects.js'
import Reveal from '../Reveal.jsx'
import './Projects.css'

const STATUS_LABEL = {
  'in-progress': 'In Progress',
  complete: 'Complete',
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2>Things I've built</h2>
            <p>
              Add more in <code>src/data/projects.js</code>. Photos of real
              hardware beat stock icons every time.
            </p>
          </div>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 140}>
              <a className="project-card" href={p.link}>
                {'image' in p && (
                  <div className="project-media">
                    {p.image ? (
                      <img src={p.image} alt={`${p.title} photo or diagram`} />
                    ) : (
                      <span className="project-media-placeholder">
                        Add a photo or diagram
                      </span>
                    )}
                  </div>
                )}

                <div className="project-card-top">
                  <span
                    className={`project-led ${
                      p.status === 'in-progress' ? 'project-led-progress' : ''
                    }`}
                  />
                  <h3>{p.title}</h3>
                  {p.status && (
                    <span className={`status-badge status-${p.status}`}>
                      {STATUS_LABEL[p.status] ?? p.status}
                    </span>
                  )}
                </div>
                <p>{p.blurb}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
