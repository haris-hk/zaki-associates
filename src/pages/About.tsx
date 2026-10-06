import EnquiryForm from '../components/EnquiryForm';
import { useState } from 'react';
import { Link } from 'react-router';
import StarburstIcon from '../components/StarburstIcon';

const timeline = [
  { decade: '1980s', title: 'The Beginning', desc: 'The firm establishes its foundation in accounting and professional advisory services across Karachi.' },
  { decade: '1990s', title: 'Building Trust', desc: 'Expanding relationships across businesses and organizations, deepening our practice.' },
  { decade: '2000s', title: 'Expanding Expertise', desc: 'Broadening capabilities across audit, taxation and financial advisory disciplines.' },
  { decade: '2010s', title: 'Strategic Advisory', desc: 'Evolving from traditional accounting into broader financial leadership and governance.' },
  { decade: 'TODAY', title: 'Looking Ahead', desc: 'Combining established expertise with modern financial thinking to serve the next generation of clients.' },
];

const principles = [
  { label: 'Clarity', desc: 'Making complex financial information easier to understand and act upon.' },
  { label: 'Discipline', desc: 'Building decisions around rigorous analysis and sound processes.' },
  { label: 'Perspective', desc: 'Looking beyond the immediate numbers to the underlying business reality.' },
  { label: 'Partnership', desc: 'Working alongside clients through changing business conditions.' },
];

const process = [
  { n: '01', title: 'Initial Consultation', desc: 'Understanding your financial structure, objectives, and regulatory requirements.' },
  { n: '02', title: 'Assessment & Review', desc: 'Comprehensive evaluation of financial records, internal controls and compliance status.' },
  { n: '03', title: 'Strategic Structuring', desc: 'Developing practical solutions aligned with your organization\'s goals and risk appetite.' },
  { n: '04', title: 'Implementation & Ongoing Advisory', desc: 'Continuous support to maintain compliance, efficiency and financial clarity over time.' },
];

const whyItems = [
  { title: 'Decades of Experience', desc: 'More than four decades of professional financial expertise across diverse industries.' },
  { title: 'Multidisciplinary Thinking', desc: 'Accounting, audit, taxation and advisory working together as an integrated whole.' },
  { title: 'Personal Attention', desc: 'Senior-level involvement and direct communication on every mandate.' },
  { title: 'Long-Term Perspective', desc: 'Advice designed around sustainable business performance, not short-term appearances.' },
];

const team = [
  {
    id: 'zaki',
    name: 'M. Zaki',
    role: 'Principal / Founder',
    area: 'All Practice Areas',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=700&fit=crop&auto=format',
  },
  {
    id: 'ayesha',
    name: 'Ayesha Khan',
    role: 'Partner',
    area: 'Audit & Assurance',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=700&fit=crop&auto=format',
  },
  {
    id: 'hamza',
    name: 'Hamza Rahman',
    role: 'Director',
    area: 'Tax Advisory',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&auto=format',
  },
  {
    id: 'sara',
    name: 'Sara Ahmed',
    role: 'Senior Manager',
    area: 'Financial Advisory',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&auto=format',
  },
];

export default function About() {
  const [openProcess, setOpenProcess] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* ABOUT HERO */}
      <section className="bg-[#F7F8F4] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-8 text-[10px] tracking-[0.15em] uppercase font-body text-[#4A4A46]">
            <Link to="/" className="hover:text-[#0B4A46] transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            <span className="text-[#0B4A46]">About</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">
                  ABOUT ZAKI & ASSOCIATES
                </span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1A1A18] leading-[1.05] mb-8">
                Experience That<br />
                Shapes Better<br />
                Decisions.
              </h1>
              <p className="text-[15px] text-[#4A4A46] leading-relaxed font-body font-light max-w-lg">
                For more than four decades, Zaki & Associates has helped organizations navigate financial complexity with clarity, discipline, and strategic insight.
              </p>
            </div>

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-8 left-3 w-px bg-[#0B4A46]/30 z-10" />
              <div className="absolute inset-y-8 left-6 w-px bg-[#0B4A46]/10 z-10" />
              <img decoding="async" loading="lazy"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=800&fit=crop&auto=format"
                alt="Zaki & Associates office"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY — TIMELINE */}
      <section className="bg-[#EEF2ED] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#0B4A46]" />
            <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">OUR STORY</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] mb-16">
            Four Decades of<br />Financial Perspective.
          </h2>

          {/* Editorial timeline — horizontal scroll on desktop */}
          <div className="flex flex-col lg:flex-row gap-0 border-t border-[#1A1A18]/10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex-1 border-b lg:border-b-0 lg:border-r border-[#1A1A18]/10 p-8 lg:p-10 last:border-r-0 last:border-b-0"
              >
                <div className="font-display text-5xl lg:text-6xl font-light text-[#0B4A46]/15 leading-none mb-4">
                  {item.decade}
                </div>
                <div className="w-4 h-px bg-[#B9FF8A] mb-4" />
                <h3 className="font-display text-lg font-light text-[#1A1A18] mb-3">{item.title}</h3>
                <p className="text-[12px] text-[#4A4A46] leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[#F7F8F4] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#0B4A46]" />
              <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">LEADERSHIP</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight mb-12">
              Experience You<br />Can Build On.
            </h2>

            <div className="flex items-start gap-8">
              <div className="relative shrink-0">
                <div className="absolute inset-y-0 left-0 w-0.5 bg-[#0B4A46]" />
                <img decoding="async" loading="lazy"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=380&fit=crop&auto=format"
                  alt="M. Zaki"
                  className="w-32 h-40 object-cover pl-3"
                />
              </div>
              <div>
                <div className="font-display text-2xl font-light text-[#1A1A18] mb-1">M. Zaki</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#0B4A46] font-body mb-6">
                  Founder / Principal
                </div>
                <p className="text-[13px] text-[#4A4A46] leading-relaxed font-body mb-6">
                  With more than four decades at the forefront of professional financial practice in Pakistan, M. Zaki has built a reputation for disciplined analysis, personal attention, and long-term client relationships. His work spans accounting, audit, tax advisory, and strategic financial leadership across private enterprises, family offices, and institutional clients.
                </p>
                <Link
                  to="/team/zaki"
                  className="text-[#0B4A46] text-[10px] tracking-[0.2em] uppercase font-body font-medium border-b border-[#0B4A46] pb-0.5 hover:opacity-60 transition-opacity"
                >
                  VIEW PROFILE →
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative right column */}
          <div className="hidden lg:flex flex-col justify-between h-full">
            <img decoding="async" loading="lazy"
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=500&fit=crop&auto=format"
              alt="Financial documents"
              className="w-full h-80 object-cover"
            />
            <div className="bg-[#0B4A46] p-8 mt-4">
              <div className="font-display italic text-[#F7F8F4]/80 text-lg leading-relaxed">
                "Precision and perspective — the two things every sound financial decision requires."
              </div>
              <div className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#B9FF8A] font-body">
                — M. Zaki
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#0B4A46] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-5xl lg:text-7xl font-light text-[#F7F8F4] leading-[1.0] mb-6 tracking-tight">
            NUMBERS TELL<br />
            THE STORY.<br />
            <span className="text-[#B9FF8A]">CONTEXT TELLS YOU</span><br />
            WHAT IT MEANS.
          </h2>
          <p className="text-[15px] text-[#F7F8F4]/60 leading-relaxed max-w-xl font-body font-light mb-20">
            Our role goes beyond preparing financial information. We help our clients understand what the numbers mean, where opportunities exist, and how today's decisions shape tomorrow's performance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-[#F7F8F4]/10">
            {principles.map((p) => (
              <div key={p.label} className="bg-[#0B4A46] p-8 hover:bg-[#063D3A] transition-colors duration-300">
                <StarburstIcon size={24} color="#B9FF8A" className="mb-6" />
                <h3 className="font-display text-xl font-light text-[#F7F8F4] mb-3 uppercase tracking-wide">
                  {p.label}
                </h3>
                <p className="text-[12px] text-[#F7F8F4]/50 leading-relaxed font-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[#F7F8F4] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#0B4A46]" />
              <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">OUR PROCESS</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight">
              A STRUCTURED APPROACH.<br />
              <em className="not-italic text-[#0B4A46]">A PERSONAL EXPERIENCE.</em>
            </h2>
          </div>

          <div className="border-t border-[#1A1A18]/10">
            {process.map((item, i) => (
              <div key={i} className="border-b border-[#1A1A18]/10">
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openProcess === i}
                    aria-controls={`process-${i}`}
                    onClick={() => setOpenProcess(openProcess === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#0B4A46] font-display text-3xl font-light opacity-30">
                      {item.n}
                    </span>
                    <span className="font-body font-medium text-[14px] tracking-[0.03em] text-[#1A1A18] group-hover:text-[#0B4A46] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[#0B4A46] text-lg transition-transform duration-300 shrink-0"
                    style={{ transform: openProcess === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>
                <div
                  id={`process-${i}`}
                    hidden={openProcess !== i}
                    className="accordion-panel"
                >
                  <p className="text-[13px] text-[#4A4A46] leading-relaxed pb-6 pl-16 font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="bg-[#EEF2ED] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#0B4A46]" />
            <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">WHY US</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] mb-16">
            Why Clients Choose Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#1A1A18]/10">
            {whyItems.map((item, i) => (
              <div
                key={i}
                className={`p-10 lg:p-12 border-[#1A1A18]/10 ${
                  i % 2 === 0 ? 'lg:border-r' : ''
                } ${i < 2 ? 'border-b' : ''}`}
              >
                <div className="text-[#0B4A46]/20 font-display text-6xl font-light leading-none mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl font-light text-[#1A1A18] mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#4A4A46] leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-[#F7F8F4] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">OUR PEOPLE</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight">
                The People Behind<br />The Perspective.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#1A1A18]/10">
            {team.map((member) => (
              <Link
                key={member.id}
                to={`/team/${member.id}`}
                className="group relative bg-[#F7F8F4] overflow-hidden block"
              >
                <div className="relative overflow-hidden h-80">
                  <img decoding="async" loading="lazy"
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#0B4A46]/0 group-hover:bg-[#0B4A46]/60 transition-all duration-400" />
                  <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#B9FF8A] text-[10px] tracking-[0.2em] uppercase font-body">
                      VIEW PROFILE →
                    </span>
                  </div>
                </div>
                <div className="p-6 border-t border-[#1A1A18]/10">
                  <div className="font-display text-lg font-light text-[#1A1A18] mb-1">{member.name}</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#0B4A46] font-body">{member.role}</div>
                  <div className="text-[10px] tracking-[0.1em] text-[#4A4A46] font-body mt-0.5">{member.area}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#0B4A46] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#F7F8F4] leading-tight">
            Let's Build Clarity<br />
            Into Your Next Decision.
          </h2>
          <div>
            <p className="text-[#F7F8F4]/60 text-[15px] leading-relaxed font-body font-light mb-10">
              Whether you need reliable financial management, independent assurance or strategic advisory, we're here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about#contact"
                className="bg-[#B9FF8A] text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium px-8 py-4 hover:bg-[#9EE86A] transition-colors duration-200"
              >
                Schedule a Consultation →
              </Link>
              <Link
                to="/services"
                className="border border-[#F7F8F4]/30 text-[#F7F8F4] text-[11px] tracking-[0.2em] uppercase font-body font-medium px-8 py-4 hover:border-[#F7F8F4]/60 transition-colors duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-[#EEF2ED] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">GET IN TOUCH</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight mb-8">
                Change Starts<br />With a Conversation
              </h2>
              <div className="flex flex-col gap-6 text-[13px] text-[#4A4A46] font-body">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] mb-1">Call us at</div>
                  <div className="text-xl font-display font-light"><a href="tel:+92333274900">+92-333-274900</a></div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] mb-1">Visit us at</div>
                  <div>F.L. 61, Gulshan-e-Iqbal, Block 6<br />Main Rashid Minhas Road<br />Karachi, Pakistan</div>
                </div>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
