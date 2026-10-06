import { Link } from "react-router"
import StarburstIcon from "./StarburstIcon"

const pillars = [
  ["01", "Accounting", "accounting"],
  ["02", "Audit & assurance", "audit"],
  ["03", "Tax advisory", "tax"],
  ["04", "Financial advisory", "advisory"],
]

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker hero-enter">
              <span />
              Financial perspective. Personal commitment.
            </p>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line">
                <span>Clarity today.</span>
              </span>
              <span className="hero-line">
                <span>Confidence</span>
              </span>
              <span className="hero-line">
                <em>for tomorrow.</em>
              </span>
            </h1>
            <p className="hero-description hero-enter">
              Accounting, audit, tax and financial advisory.
              <br className="hidden sm:block" /> Experienced minds, working with
              you to make
              <br className="hidden xl:block" /> your next decision a stronger
              one.
            </p>
            <div className="hero-actions hero-enter">
              <Link to="/about#contact" className="hero-primary">
                Let’s talk about your business <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/about" className="hero-secondary">
                Meet our firm <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-art-frame" aria-hidden="true" />
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=1300&fit=crop&auto=format"
                alt="An upward view of contemporary architecture"
                width="1000"
                height="1300"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero-photo-shade" />
              <div className="hero-photo-caption">
                <span>A broader perspective.</span>
                <span>Looking ahead ↗</span>
              </div>
            </div>
            <div className="hero-compass" aria-hidden="true">
              <StarburstIcon size={74} color="#B9FF8A" />
              <span />
            </div>
            <Link to="/team/zaki" className="hero-experience">
              <div className="hero-experience-top">
                <span>Built on experience</span>
                <span aria-hidden="true">↗</span>
              </div>
              <p>
                40<span>+</span>
              </p>
              <div className="hero-experience-bottom">
                Years of our founder’s
                <br />
                financial leadership
              </div>
            </Link>
            <span className="hero-side-note" aria-hidden="true">
              INTEGRITY IN EVERY DECISION
            </span>
          </div>
        </div>
        <div className="hero-footer hero-enter">
          <a href="#home-services" className="hero-scroll">
            <span aria-hidden="true">↓</span>Explore our expertise
          </a>
          <div className="hero-pillars">
            {pillars.map(([number, name, anchor]) => (
              <Link key={number} to={`/services#${anchor}`}>
                <span>{number}</span>
                {name}
                <span className="hero-pillar-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
