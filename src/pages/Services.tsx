import EnquiryForm from '../components/EnquiryForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import StarburstIcon from '../components/StarburstIcon';

const serviceNav = [
  { id: 'accounting', label: 'Financial Management' },
  { id: 'audit', label: 'Audit & Assurance' },
  { id: 'tax', label: 'Tax Advisory' },
  { id: 'advisory', label: 'Financial Advisory' },
];

const services = [
  {
    id: 'accounting',
    n: '01',
    title: 'Accounting & Financial Management Solutions',
    desc: 'Our accounting services provide clarity, operational control, and strategic financial insight for organizations at every stage of growth.',
    items: [
      'Financial Statement Preparation',
      'Bookkeeping & General Ledger Management',
      'Management Reporting & Financial Analysis',
      'Budgeting & Forecasting',
      'Accounts Payable & Receivable Oversight',
      'Payroll Processing & Financial Controls',
      'Financial Systems Review',
    ],
    closing: 'We ensure financial records are complete, structured, and strategically aligned with business objectives.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=600&fit=crop&auto=format',
    imgAlt: 'Financial documents and reports',
    reverse: false,
  },
  {
    id: 'audit',
    n: '02',
    title: 'Audit & Assurance Services',
    desc: 'Rigorous, independent assurance that builds confidence among stakeholders and strengthens internal governance.',
    items: [
      'External Audit',
      'Internal Audit',
      'Compliance Audit',
      'Internal Control Evaluation',
      'Risk Assessment & Governance Review',
      'Financial Due Diligence',
    ],
    closing: 'Our audit services are conducted with professional independence and strict adherence to regulatory standards.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=600&fit=crop&auto=format',
    imgAlt: 'Office meeting and review',
    reverse: true,
  },
  {
    id: 'tax',
    n: '03',
    title: 'Tax Advisory & Regulatory Compliance',
    desc: 'Strategic tax planning and compliance support that reduces risk and creates sustainable tax efficiency.',
    items: [
      'Corporate Tax Advisory & Filing',
      'Individual Tax Returns',
      'Tax Planning & Strategy',
      'Sales Tax & Withholding Tax Advisory',
      'Regulatory Compliance Support',
      'Representation Before Tax Authorities',
    ],
    closing: 'We navigate Pakistan\'s regulatory landscape with precision, protecting clients from unnecessary exposure.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=600&fit=crop&auto=format',
    imgAlt: 'Modern architecture',
    reverse: false,
  },
  {
    id: 'advisory',
    n: '04',
    title: 'Strategic Financial Advisory',
    desc: 'CFO-level strategic guidance for organizations navigating complexity, growth, or transformation.',
    items: [
      'Financial Restructuring Advisory',
      'Cash Flow Optimization',
      'Corporate Governance Support',
      'Policy & Procedure Development',
      'Financial Risk Advisory',
      'CFO-Level Strategic Consultation',
    ],
    closing: 'We provide the perspective and analytical depth that enables confident, informed decision-making at the leadership level.',
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&h=600&fit=crop&auto=format',
    imgAlt: 'Business leadership meeting',
    reverse: true,
  },
];

const process = [
  { n: '01', title: 'Initial Consultation', desc: 'Understanding your financial structure, objectives, and regulatory requirements.' },
  { n: '02', title: 'Assessment & Review', desc: 'Comprehensive evaluation of financial records, internal controls and compliance.' },
  { n: '03', title: 'Strategic Structuring', desc: 'Developing practical solutions aligned with your organization\'s goals.' },
  { n: '04', title: 'Implementation & Ongoing Advisory', desc: 'Continuous support to maintain compliance, efficiency and financial clarity.' },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState('accounting');
  const [openProcess, setOpenProcess] = useState<number | null>(0);

  useEffect(() => {
    const update = () => {
      let active = serviceNav[0].id;
      for (const item of serviceNav) {
        if ((document.getElementById(item.id)?.getBoundingClientRect().top ?? Infinity) <= 170) active = item.id;
      }
      setActiveSection(active);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-[#F7F8F4] pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-8 text-[10px] tracking-[0.15em] uppercase font-body text-[#4A4A46]">
            <Link to="/" className="hover:text-[#0B4A46] transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            <span className="text-[#0B4A46]">Services</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">PROFESSIONAL SERVICES</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-light text-[#1A1A18] leading-[1.05]">
                Trusted Accounting &<br />
                Advisory Services
              </h1>
            </div>
            <p className="text-[15px] text-[#4A4A46] leading-relaxed font-body font-light self-end pb-2">
              We help organizations redefine their direction, improve performance and navigate complexity with confidence — built on four decades of professional discipline.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE NAV */}
      <div className="sticky top-16 lg:top-20 z-40 bg-[#F7F8F4] border-b border-[#1A1A18]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-0">
            {serviceNav.map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollTo(nav.id)}
                aria-current={activeSection === nav.id ? "location" : undefined}
                className={`shrink-0 px-6 py-4 text-[11px] tracking-[0.15em] uppercase font-body font-medium border-b-2 transition-all duration-200 ${
                  activeSection === nav.id
                    ? 'border-[#0B4A46] text-[#0B4A46]'
                    : 'border-transparent text-[#4A4A46] hover:text-[#0B4A46]'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      {services.map((svc) => (
        <section key={svc.id} id={svc.id} className="bg-[#F7F8F4] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${svc.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${svc.reverse ? 'lg:col-start-2' : ''}`}>
                <div className={`absolute inset-y-0 ${svc.reverse ? 'right-0' : 'left-0'} w-0.5 bg-[#0B4A46]/20 z-10`} />
                <img decoding="async" loading="lazy"
                  src={svc.img}
                  alt={svc.imgAlt}
                  className={`w-full h-80 lg:h-96 object-cover ${svc.reverse ? 'pr-3' : 'pl-3'}`}
                />
              </div>

              {/* Content */}
              <div className={svc.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-4xl font-light text-[#0B4A46]/20">{svc.n}</span>
                  <div className="w-6 h-px bg-[#0B4A46]" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A18] leading-snug mb-6">
                  {svc.title}
                </h2>
                <p className="text-[14px] text-[#4A4A46] leading-relaxed font-body mb-8">{svc.desc}</p>

                <div className="grid grid-cols-1 gap-0 border-t border-[#1A1A18]/10 mb-8">
                  {svc.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 border-b border-[#1A1A18]/10">
                      <StarburstIcon size={12} color="#0B4A46" />
                      <span className="text-[12px] text-[#1A1A18] font-body">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[12px] text-[#0B4A46] font-body italic mb-6">{svc.closing}</p>

                <Link
                  to="/about#contact"
                  className="text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium border-b border-[#0B4A46] pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
            <div className="h-px bg-[#1A1A18]/10" />
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className="bg-[#EEF2ED] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#0B4A46]" />
              <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">OUR APPROACH</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A18] leading-tight">
              Our Approach
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
                    <span className="text-[#0B4A46] font-display text-3xl font-light opacity-30">{item.n}</span>
                    <span className="font-body font-medium text-[14px] text-[#1A1A18] group-hover:text-[#0B4A46] transition-colors">
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
                  <p className="text-[13px] text-[#4A4A46] leading-relaxed pb-6 pl-16 font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#0B4A46] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#B9FF8A]" />
                <span className="text-[#B9FF8A] text-[10px] tracking-[0.3em] uppercase font-body">CONSULTATIONS</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#F7F8F4] leading-tight mb-8">
                Change Starts<br />
                With a Conversation
              </h2>
              <div className="flex flex-col gap-6 text-[13px] text-[#F7F8F4]/60 font-body">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#B9FF8A] mb-1">Call us at</div>
                  <div className="text-xl font-display font-light text-[#F7F8F4]"><a href="tel:+92333274900">+92-333-274900</a></div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#B9FF8A] mb-1">Visit us at</div>
                  <div>F.L. 61, Gulshan-e-Iqbal, Block 6<br />Main Rashid Minhas Road<br />Karachi, Pakistan</div>
                </div>
              </div>
            </div>

            <EnquiryForm dark />
          </div>
        </div>
      </section>
    </div>
  );
}
