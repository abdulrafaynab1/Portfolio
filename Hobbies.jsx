import Reveal from '../Reveal.jsx'
import './Hobbies.css'

const hobbies = [
  {
    emoji: '🏂',
    title: 'Snowboarding',
    detail: 'On the hill most winters.',
  },
  {
    emoji: '🏸',
    title: 'Badminton',
    detail: 'Competed through high school — city championships every year.',
  },
  {
    emoji: '⚽',
    title: 'Soccer',
    detail: "Playing since I was a kid.",
  },
  {
    emoji: '🎮',
    title: 'Video Games',
    detail: "Gaming since I was a kid.",
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Off the clock</span>
            <h2>When I'm not building</h2>
            <p>The other things I try hard at.</p>
          </div>
        </Reveal>

        <div className="hobby-grid">
          {hobbies.map((h, i) => (
            <Reveal key={h.title} delay={i * 140}>
              <div className="hobby-card">
                <span className="hobby-emoji" aria-hidden="true">
                  {h.emoji}
                </span>
                <h3>{h.title}</h3>
                <p>{h.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
