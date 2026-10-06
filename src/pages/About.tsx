import { Link } from "react-router"
import EnquiryForm from "../components/EnquiryForm"
import StarburstIcon from "../components/StarburstIcon"
import { team } from "../data/team"

const principles = [
  [
    "Professional independence",
    "Objective advice, with the clarity to make informed decisions.",
  ],
  [
    "Ethical integrity",
    "A commitment to transparency in the way we work and advise.",
  ],
  [
    "Governance discipline",
    "Sound controls and compliance at the heart of financial management.",
  ],
  [
    "Lasting relationships",
    "An understanding of your business that develops over time.",
  ],
]
const founder = team[0]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-[0.24em] uppercase mb-6">
      <span className="w-7 h-px bg-current" />
      {children}
    </div>
  )
}

export default function About() {
  return (
    <div className="about-page">
      <section className="bg-offwhite pt-28 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-charcoal-muted mb-12"
          >
            <Link to="/" className="hover:text-teal">
              Home
            </Link>
            <span className="mx-3" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Our firm</span>
          </nav>
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-20 items-end">
            <div>
              <Eyebrow>About Zaki & Associates</Eyebrow>
              <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.06] tracking-tight">
                Experienced minds.
                <br />
                <em className="text-teal">Clearer decisions.</em>
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="text-base text-charcoal-muted leading-8 max-w-lg">
                We bring financial leadership, accounting and advisory together
                to help businesses and individuals navigate their next decision
                with confidence.
              </p>
              <div className="flex flex-wrap gap-7 mt-8">
                <a href="#founder" className="about-text-link">
                  Meet our founder <span aria-hidden="true">↘</span>
                </a>
                <a href="#team" className="about-text-link">
                  Our people <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14 lg:mt-20 border-t border-teal/20 pt-5 flex flex-wrap justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-teal">
            <span>Financial management · Audit · Tax · Advisory</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </section>

      <section id="founder" className="bg-sage py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.95fr_1.05fr] gap-12 lg:gap-20 items-center">
          <div className="founder-frame relative bg-[#dce4db] overflow-hidden">
            <div className="absolute top-7 left-7 text-teal/60">
              <StarburstIcon size={40} />
            </div>
            <div className="absolute top-8 right-7 text-[10px] tracking-[.2em] uppercase text-teal">
              Our founder / 01
            </div>
            <img
              src={founder.image}
              alt="Mohammed Zaki, founder of Zaki & Associates"
              width="608"
              height="658"
              fetchPriority="high"
              decoding="async"
              className="relative w-full aspect-[1/1.08] object-contain object-bottom pt-16 px-4 sm:px-8"
            />
            <div className="relative bg-teal text-offwhite px-7 py-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-2xl">Mohammed Zaki</p>
                <p className="text-[10px] uppercase tracking-[.2em] text-lime mt-2">
                  Founder · Chartered Accountant
                </p>
              </div>
              <StarburstIcon size={25} color="#B9FF8A" />
            </div>
          </div>
          <div className="text-teal">
            <Eyebrow>A lifetime of perspective</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-7">
              Leadership shaped
              <br />
              by experience.
            </h2>
            <p className="text-charcoal-muted text-[15px] leading-8">
              {founder.bio}
            </p>
            <p className="text-charcoal-muted text-[15px] leading-8 mt-5">
              That experience informs a practice built around financial
              discipline, transparent governance and thoughtful advice.
            </p>
            <div className="grid grid-cols-3 gap-4 border-y border-teal/15 my-9 py-7">
              {[
                ["40+", "Years of experience"],
                ["~32", "Years at Interflow"],
                ["8", "Years in pharma"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-4xl sm:text-5xl font-light">
                    {value}
                  </p>
                  <p className="text-[10px] leading-5 uppercase tracking-wider mt-2 text-charcoal-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/team/zaki" className="about-text-link">
              Explore Mohammed’s profile <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-teal text-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-12 lg:mb-16">
            <div>
              <div className="text-lime">
                <Eyebrow>What guides us</Eyebrow>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight">
                Clarity in the numbers.
                <br />
                <em className="text-lime">Integrity in the advice.</em>
              </h2>
            </div>
            <p className="text-offwhite/75 text-[15px] leading-8 lg:pt-12">
              Our firm provides accounting, audit, taxation and financial
              advisory services. We believe lasting progress begins with clear
              financial information, disciplined governance and a practical
              understanding of regulatory responsibilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-offwhite/20">
            {principles.map(([title, description], i) => (
              <div key={title} className="pt-8 pb-4 sm:pr-7">
                <span className="text-lime text-[11px] tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-light mt-5 mb-3">
                  {title}
                </h3>
                <p className="text-sm text-offwhite/70 leading-7">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-offwhite py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7 mb-12">
            <div className="text-teal">
              <Eyebrow>Our people</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-charcoal">
                The people behind
                <br />
                <em className="text-teal">the perspective.</em>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-charcoal-muted leading-8">
              Experience across financial leadership, regulatory advisory and
              corporate finance. Get to know the people behind our practice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-9 lg:gap-8">
            {team.map((member, i) => (
              <Link
                key={member.id}
                to={`/team/${member.id}`}
                className="team-card group block min-w-0"
              >
                <div className="relative bg-sage overflow-hidden aspect-[4/4.5]">
                  <span className="absolute z-10 top-5 left-5 text-[10px] tracking-widest text-teal/70">
                    0{i + 1} / OUR PEOPLE
                  </span>
                  <img
                    src={member.image}
                    alt={member.name}
                    width="608"
                    height="658"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain object-bottom px-3 pt-12 transition-transform duration-700 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                  />
                  <span
                    className="absolute right-4 bottom-4 w-11 h-11 flex items-center justify-center bg-lime text-teal text-xl transition-transform group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <div className="pt-6">
                  <p className="text-[10px] uppercase tracking-[.14em] text-teal leading-5 min-h-10">
                    {member.role}
                  </p>
                  <h3 className="font-display text-[27px] font-light mt-2 mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-7">
                    {member.summary}
                  </p>
                  <span className="about-text-link mt-6">
                    View profile <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="text-teal">
            <Eyebrow>Expertise, working together</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight">
              A broader view of
              <br />
              your financial future.
            </h2>
          </div>
          <div>
            <p className="text-charcoal-muted text-[15px] leading-8 mb-8">
              From day-to-day financial management to tax compliance and
              decisions about capital, our practice brings complementary
              experience to the challenges you face.
            </p>
            <Link to="/services" className="about-text-link">
              Explore our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-offwhite py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="text-teal">
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight mb-7">
              Your next decision.
              <br />
              <em>Let’s bring clarity.</em>
            </h2>
            <p className="text-charcoal-muted text-[15px] leading-8 max-w-sm mb-10">
              Tell us what your business needs. We’ll help you find the right
              place to start.
            </p>
            <a
              href="tel:+923332174900"
              className="block font-display text-2xl mb-4"
            >
              +92-333-2174900
            </a>
            <p className="text-sm text-charcoal-muted leading-7">
              FL 6/1, Gulshan-e-Iqbal, Block 6<br />
              Main Rashid Minhas Road
              <br />
              Karachi, Pakistan
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  )
}
