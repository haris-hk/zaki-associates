import EnquiryForm from '../components/EnquiryForm';
import { useState } from 'react';
import { Link } from 'react-router';
import StarburstIcon from '../components/StarburstIcon';

const trustItems = [
  'Data-Driven Strategies',
  'Proven Results',
  'Scalable Growth',
  'Trusted Expertise',
];

const services = [
  {
    label: '01',
    title: 'Accounting & Financial Management Solutions',
    desc: 'Comprehensive financial reporting and management systems built on rigorous standards and strategic clarity.',
  },
  {
    label: '02',
    title: 'Audit & Assurance Services',
    desc: 'Independent audit conducted with professional rigor and strict adherence to regulatory standards.',
  },
  {
    label: '03',
    title: 'Tax Advisory & Regulatory Compliance',
    desc: 'Strategic tax planning and compliance across corporate, individual, and regulatory dimensions.',
  },
  {
    label: '04',
    title: 'Strategic Financial Advisory',
    desc: 'CFO-level financial strategy, restructuring, and governance support for complex organizations.',
  },
];

const accordionItems = [
  { n: '01', title: 'Initial Consultation', desc: 'Understanding your financial structure, objectives, and regulatory requirements.' },
  { n: '02', title: 'Assessment & Review', desc: 'Comprehensive evaluation of financial records, internal controls and compliance.' },
  { n: '03', title: 'Strategic Structuring', desc: 'Developing practical solutions aligned with your organization\'s goals.' },
  { n: '04', title: 'Implementation & Ongoing Advisory', desc: 'Continuous support to maintain compliance, efficiency and financial clarity.' },
];

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#0B4A46] min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img decoding="async" fetchPriority="high"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1000&fit=crop&auto=format"
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A46] via-[#0B4A46]/90 to-[#0B4A46]/40" />
        </div>

        {/* Vertical bar motif */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#B9FF8A]/20" style={{ right: '40%' }} />
        <div className="absolute right-[calc(40%+16px)] top-20 bottom-20 w-px bg-[#F7F8F4]/10" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#B9FF8A]" />
              <span className="text-[#B9FF8A] text-[10px] tracking-[0.3em] uppercase font-body">
                ESTABLISHED OVER FOUR DECADES
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-[#F7F8F4] leading-[1.05] font-light mb-8">
              Reliable Financial<br />
              Leadership Backed<br />
              by Four Decades of{' '}
              <em className="not-italic text-[#B9FF8A]">Expertise.</em>
            </h1>
            <p className="text-[#F7F8F4]/60 text-[15px] leading-relaxed max-w-lg mb-10 font-body font-light">
              Zaki & Associates delivers comprehensive accounting, audit, tax, and strategic financial advisory services grounded in over 40 years of professional leadership, governance experience, and regulatory discipline.
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
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero image panel */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-[#B9FF8A]/60 z-10" />
              <img decoding="async" loading="lazy"
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=900&fit=crop&auto=format"
                alt="Professional office"
                className="w-full h-[580px] object-cover grayscale-[20%] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B4A46]/40" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-8 bg-[#063D3A] border border-[#F7F8F4]/10 p-6">
              <div className="font-display text-4xl text-[#B9FF8A] font-light">40+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#F7F8F4]/50 mt-1">Years of Practice</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-[#F7F8F4]/20 animate-pulse" />
          <span className="text-[#F7F8F4]/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#063D3A] border-t border-[#F7F8F4]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <StarburstIcon size={12} color="#B9FF8A" />
                <span className="text-[#F7F8F4]/70 text-[11px] tracking-[0.2em] uppercase font-body">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-[#F7F8F4] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-start justify-between mb-16 flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">OUR SERVICES</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight">
                Core Service Pillars
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium border-b border-[#0B4A46] pb-0.5 hover:opacity-60 transition-opacity self-end"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1A1A18]/10">
            {services.map((svc) => (
              <div
                key={svc.label}
                className="bg-[#F7F8F4] p-10 group hover:bg-[#0B4A46] transition-all duration-400 cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[#0B4A46]/30 font-display text-5xl font-light group-hover:text-[#B9FF8A]/30 transition-colors">
                    {svc.label}
                  </span>
                  <StarburstIcon size={20} color="var(--color-teal-dark)"
                    className="group-hover:[--color-teal-dark:#B9FF8A] transition-colors mt-2" />
                </div>
                <h3 className="font-display text-xl font-light text-[#1A1A18] group-hover:text-[#F7F8F4] mb-4 leading-snug transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-[#4A4A46] group-hover:text-[#F7F8F4]/60 leading-relaxed font-body transition-colors">
                  {svc.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/services"
                    className="text-[#B9FF8A] text-[10px] tracking-[0.2em] uppercase font-body"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL STATEMENT */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden flex items-center">
        <img decoding="async" loading="lazy"
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop&auto=format"
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-[#0B4A46]/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl text-[#F7F8F4] font-light leading-[1.05]">
            Your Time is Valuable.<br />
            <em className="not-italic text-[#B9FF8A]">We Make Every</em><br />
            Second Count.
          </h2>
        </div>
      </section>

      {/* ABOUT / APPROACH PREVIEW */}
      <section className="bg-[#F7F8F4] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#0B4A46]/20" />
            <img decoding="async" loading="lazy"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=850&fit=crop&auto=format"
              alt="M. Zaki, Founder"
              className="w-full h-[500px] object-cover pl-4"
            />
            <div className="mt-4 pl-4">
              <div className="font-display text-lg font-light text-[#1A1A18]">M. Zaki</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#0B4A46] font-body mt-1">
                Founder & Principal
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#0B4A46]" />
              <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">ABOUT US</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight mb-4">
              Our Approach
            </h2>
            <p className="font-display italic text-xl text-[#4A4A46] font-light leading-relaxed mb-12">
              Financial clarity for a changing world.
            </p>

            <div className="flex flex-col border-t border-[#1A1A18]/10">
              {accordionItems.map((item, i) => (
                <div key={i} className="border-b border-[#1A1A18]/10">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={openAccordion === i}
                    aria-controls={`process-${i}`}
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#0B4A46]/40 text-[11px] tracking-[0.2em] font-body">{item.n}</span>
                      <span className="font-body font-medium text-[14px] tracking-[0.05em] text-[#1A1A18] group-hover:text-[#0B4A46] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[#0B4A46] text-lg transition-transform duration-300"
                      style={{ transform: openAccordion === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                      +
                    </span>
                  </button>
                  <div
                    id={`process-${i}`}
                    hidden={openAccordion !== i}
                    className="accordion-panel"
                  >
                    <p className="text-[13px] text-[#4A4A46] leading-relaxed pb-5 pl-9 font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium border-b border-[#0B4A46] pb-0.5 hover:opacity-60 transition-opacity"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section id="contact" className="bg-[#EEF2ED] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">GET IN TOUCH</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight mb-8">
                Change Starts<br />
                With a Conversation
              </h2>
              <div className="flex flex-col gap-6 text-[13px] text-[#4A4A46] font-body">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] mb-1">Call us at</div>
                  <div className="text-lg font-display font-light"><a href="tel:+923332174900">+92-333-2174900</a></div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] mb-1">Visit us at</div>
                  <div>FL 6/1, Gulshan-e-Iqbal, Block 6<br />Main Rashid Minhas Road<br />Karachi, Pakistan</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#0B4A46] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h3 className="font-display text-2xl lg:text-3xl text-[#F7F8F4] font-light">
            Stay Ahead. Request<br className="hidden lg:block" />
            <em className="not-italic text-[#B9FF8A]">Expert Insights.</em>
          </h3>
          <div className="w-full lg:max-w-md"><EnquiryForm dark newsletter /></div>
        </div>
      </section>
    </div>
  );
}
