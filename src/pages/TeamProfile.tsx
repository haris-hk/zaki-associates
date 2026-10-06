import { Link, useParams, Navigate } from "react-router"
import { team } from "../data/team"

export default function TeamProfile() {
  const { id } = useParams()
  const profile = team.find(
    (member) =>
      member.id === id || (id === "mohammed-zaki" && member.id === "zaki"),
  )
  if (!profile) return <Navigate to="/about#team" replace />
  return (
    <div>
      <section className="bg-teal text-offwhite pt-28 lg:pt-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-3 text-xs text-offwhite/70 mb-12"
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/about#team">Our people</Link>
            <span>/</span>
            <span aria-current="page" className="text-lime">
              {profile.name}
            </span>
          </nav>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-end">
            <div className="pb-12 lg:pb-20">
              <p className="text-lime text-[10px] tracking-[.2em] uppercase leading-6 mb-7">
                {profile.role}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-7">
                {profile.name}
              </h1>
              <p className="text-offwhite/75 leading-8 max-w-lg mb-8">
                {profile.summary}
              </p>
              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block text-sm text-lime underline underline-offset-8 break-all"
                >
                  {profile.email}
                </a>
              ) : (
                <Link
                  to="/about#contact"
                  className="inline-block text-sm text-lime underline underline-offset-8"
                >
                  Contact our team →
                </Link>
              )}
            </div>
            <div className="bg-[#dce4db] overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                width="608"
                height="658"
                fetchPriority="high"
                className={`w-full aspect-[1/1.05] ${
                  profile.portraitKind === "photo"
                    ? "object-cover object-[50%_35%]"
                    : "object-contain object-bottom pt-10 px-5"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24">
          <div>
            <p className="text-[10px] tracking-[.2em] uppercase text-teal mb-5">
              Professional background
            </p>
            <h2 className="font-display text-4xl font-light mb-7">
              Experience with perspective.
            </h2>
            <p className="text-charcoal-muted leading-8 mb-10">{profile.bio}</p>
            <h3 className="font-display text-2xl mb-5">Career highlights</h3>
            <ul className="divide-y divide-teal/15 border-y border-teal/15">
              {profile.experience.map((item) => (
                <li
                  key={item}
                  className="py-5 text-sm leading-7 text-charcoal-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            {profile.qualifications.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-2xl mb-5">
                  Professional qualifications
                </h3>
                <ul className="space-y-3 text-sm text-charcoal-muted">
                  {profile.qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {profile.memberships.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-2xl mb-5">
                  Fellow memberships
                </h3>
                <ul className="space-y-3 text-sm text-charcoal-muted">
                  {profile.memberships.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside>
            <div className="bg-sage p-8 lg:p-10">
              <p className="font-display text-6xl text-teal font-light">
                {profile.years}
              </p>
              <p className="uppercase text-[10px] tracking-widest text-teal mt-3 mb-10">
                Years of experience
              </p>
              <h2 className="font-display text-2xl mb-5">Areas of expertise</h2>
              <ul className="divide-y divide-teal/15">
                {profile.expertise.map((item) => (
                  <li
                    key={item}
                    className="py-4 text-sm leading-6 text-charcoal-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/about#contact"
              className="block bg-teal text-offwhite text-center px-5 py-5 mt-5 text-xs uppercase tracking-widest hover:bg-teal-darkest transition-colors"
            >
              Request a consultation →
            </Link>
          </aside>
        </div>
      </section>
      <section className="bg-sage py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between gap-5 items-center mb-9">
            <h2 className="font-display text-3xl sm:text-4xl font-light">
              Meet our other people.
            </h2>
            <Link to="/about#team" className="about-text-link">
              Back to the team →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team
              .filter((member) => member.id !== profile.id)
              .map((member) => (
                <Link
                  key={member.id}
                  to={`/team/${member.id}`}
                  className="group flex items-center gap-5 bg-offwhite p-5"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    width="96"
                    height="112"
                    loading="lazy"
                    className={`w-20 sm:w-24 h-28 bg-[#dce4db] shrink-0 ${
                      member.portraitKind === "photo"
                        ? "object-cover object-[50%_35%]"
                        : "object-contain object-bottom"
                    }`}
                  />
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs leading-6 text-charcoal-muted">
                      {member.role}
                    </p>
                    <span className="text-teal text-xs inline-block mt-3 group-hover:translate-x-1 transition-transform">
                      View profile →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
