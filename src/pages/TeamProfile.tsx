import { Link, useParams, Navigate } from 'react-router';
import StarburstIcon from '../components/StarburstIcon';

const profiles: Record<string, {
  name: string;
  role: string;
  area: string;
  img: string;
  email: string;
  bio: string;
  expertise: string[];
  years: number;
  industries: string[];
  education: { degree: string; institution: string }[];
  matters: { type: string; sector: string }[];
}> = {
  zaki: {
    name: 'M. Zaki',
    role: 'Founder / Principal',
    area: 'All Practice Areas',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=960&fit=crop&auto=format',
    email: 'mzaki@zakiassociates.com',
    bio: 'With more than four decades at the forefront of professional financial practice in Pakistan, M. Zaki has built a reputation for disciplined analysis, personal attention, and long-term client relationships. His work spans accounting, audit, tax advisory, and strategic financial leadership across private enterprises, family offices, and institutional clients. He has served in advisory and governance capacities across the manufacturing, financial services, real estate, and professional services sectors.',
    expertise: ['Accounting & Financial Management', 'Audit & Assurance', 'Tax Strategy', 'Corporate Governance', 'Financial Advisory', 'Regulatory Compliance'],
    years: 40,
    industries: ['Manufacturing', 'Financial Services', 'Real Estate', 'Professional Services', 'Family Office'],
    education: [
      { degree: 'Fellow Chartered Accountant (FCA)', institution: 'Institute of Chartered Accountants of Pakistan' },
      { degree: 'B.Com (Hons)', institution: 'University of Karachi' },
    ],
    matters: [
      { type: 'Financial Audit', sector: 'Manufacturing Group' },
      { type: 'Strategic Restructuring', sector: 'Private Enterprise' },
      { type: 'Tax Advisory', sector: 'Financial Services Firm' },
      { type: 'Governance Review', sector: 'Family Office' },
    ],
  },
  ayesha: {
    name: 'Ayesha Khan',
    role: 'Partner',
    area: 'Audit & Assurance',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=960&fit=crop&auto=format',
    email: 'ayesha@zakiassociates.com',
    bio: 'Ayesha Khan leads the firm\'s audit and assurance practice with a focus on financial services, manufacturing, and privately held enterprises. She brings more than fifteen years of experience in external and internal audit, compliance assessment, and internal controls design. Ayesha is known for combining technical rigor with a practical approach that helps clients translate audit findings into meaningful governance improvements.',
    expertise: ['External Audit', 'Internal Audit', 'Internal Controls', 'Risk Management', 'Financial Reporting', 'Compliance Assessment'],
    years: 15,
    industries: ['Financial Services', 'Manufacturing', 'Private Enterprise', 'NGO Sector'],
    education: [
      { degree: 'Associate Chartered Accountant (ACA)', institution: 'Institute of Chartered Accountants of Pakistan' },
      { degree: 'MBA Finance', institution: 'Institute of Business Administration, Karachi' },
    ],
    matters: [
      { type: 'External Audit', sector: 'Financial Services' },
      { type: 'Internal Controls Review', sector: 'Manufacturing Group' },
      { type: 'Due Diligence', sector: 'Private Enterprise' },
      { type: 'Compliance Audit', sector: 'Non-Profit Organization' },
    ],
  },
  hamza: {
    name: 'Hamza Rahman',
    role: 'Director',
    area: 'Tax Advisory',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=960&fit=crop&auto=format',
    email: 'hamza@zakiassociates.com',
    bio: 'Hamza Rahman directs the firm\'s tax advisory practice, specializing in corporate taxation, withholding tax, and representation before tax authorities. He has advised a range of organizations on tax planning, structure optimization, and regulatory compliance. Hamza is recognized for his ability to navigate complex regulatory environments and present clients with clear, actionable tax strategies.',
    expertise: ['Corporate Tax Advisory', 'Tax Planning & Strategy', 'Withholding Tax', 'Sales Tax', 'Tax Authority Representation', 'Regulatory Compliance'],
    years: 12,
    industries: ['Trading', 'Manufacturing', 'Real Estate', 'Technology'],
    education: [
      { degree: 'Associate Chartered Accountant (ACA)', institution: 'Institute of Chartered Accountants of Pakistan' },
      { degree: 'Certified Tax Practitioner', institution: 'Federal Board of Revenue, Pakistan' },
    ],
    matters: [
      { type: 'Corporate Tax Filing', sector: 'Trading Company' },
      { type: 'Tax Structuring', sector: 'Real Estate Developer' },
      { type: 'Regulatory Representation', sector: 'Manufacturing Entity' },
      { type: 'Withholding Tax Advisory', sector: 'Technology Business' },
    ],
  },
  sara: {
    name: 'Sara Ahmed',
    role: 'Senior Manager',
    area: 'Financial Advisory',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=960&fit=crop&auto=format',
    email: 'sara@zakiassociates.com',
    bio: 'Sara Ahmed manages the firm\'s financial advisory engagements with a focus on financial restructuring, cash flow optimization, and strategic planning. She works closely with business owners and leadership teams to diagnose financial challenges and develop implementable solutions. Sara\'s analytical approach and clear communication style make her a trusted advisor for clients navigating periods of transition or growth.',
    expertise: ['Financial Restructuring', 'Cash Flow Optimization', 'Management Reporting', 'Budgeting & Forecasting', 'Policy Development', 'Strategic Planning'],
    years: 10,
    industries: ['Healthcare', 'Retail', 'Professional Services', 'Education'],
    education: [
      { degree: 'ACCA (Associate Member)', institution: 'Association of Chartered Certified Accountants, UK' },
      { degree: 'BBA Finance', institution: 'Shaheed Zulfikar Ali Bhutto Institute of Science and Technology' },
    ],
    matters: [
      { type: 'Financial Restructuring', sector: 'Healthcare Provider' },
      { type: 'Cash Flow Review', sector: 'Retail Business' },
      { type: 'Management Accounts', sector: 'Professional Services Firm' },
      { type: 'Strategic Planning', sector: 'Educational Institution' },
    ],
  },
};

export default function TeamProfile() {
  const { id } = useParams<{ id: string }>();
  const profile = id ? profiles[id] : null;

  if (!profile) return <Navigate to="/about" replace />;

  return (
    <div className="min-h-screen bg-[#F7F8F4]">
      {/* HERO */}
      <section className="bg-[#0B4A46] pt-28 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12 text-[10px] tracking-[0.15em] uppercase font-body text-[#F7F8F4]/40">
            <Link to="/" className="hover:text-[#F7F8F4]/70 transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            <Link to="/about" className="hover:text-[#F7F8F4]/70 transition-colors">About</Link>
            <span className="opacity-40">›</span>
            <span className="text-[#B9FF8A]">{profile.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 items-end">
            <div className="pb-16 lg:pb-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#B9FF8A]" />
                <span className="text-[#B9FF8A] text-[10px] tracking-[0.3em] uppercase font-body">{profile.area}</span>
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-light text-[#F7F8F4] leading-[1.0] mb-4">
                {profile.name.toUpperCase()}
              </h1>
              <div className="text-[#F7F8F4]/50 text-[12px] tracking-[0.2em] uppercase font-body mb-8">
                {profile.role}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-[#F7F8F4]/60 text-[12px] font-body hover:text-[#B9FF8A] transition-colors"
                >
                  <span className="w-4 h-px bg-current" />
                  {profile.email}
                </a>
              </div>
              <div className="mt-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block bg-[#B9FF8A] text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium px-7 py-3.5 hover:bg-[#9EE86A] transition-colors"
                >
                  CONTACT {profile.name.split(' ')[0].toUpperCase()} →
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="relative h-[480px] lg:h-[560px] overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-0.5 bg-[#B9FF8A]/30 z-10" />
              <div className="absolute inset-y-0 left-3 w-px bg-[#F7F8F4]/10 z-10" />
              <img
                src={profile.img}
                alt={profile.name}
                className="w-full h-full object-cover object-top pl-5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4A46]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE CONTENT */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-14">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">ABOUT</span>
              </div>
              <p className="text-[15px] text-[#1A1A18] leading-[1.9] font-body font-light">
                {profile.bio}
              </p>
            </div>

            {/* Representative matters */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[#0B4A46]" />
                <span className="text-[#0B4A46] text-[10px] tracking-[0.3em] uppercase font-body">REPRESENTATIVE EXPERIENCE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-[#1A1A18]/10">
                {profile.matters.map((matter, i) => (
                  <div key={i} className="bg-[#F7F8F4] p-8 hover:bg-[#EEF2ED] transition-colors">
                    <StarburstIcon size={14} color="#0B4A46" className="mb-4 opacity-40" />
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#0B4A46] font-body mb-2">
                      {matter.type}
                    </div>
                    <div className="text-[13px] text-[#4A4A46] font-body">{matter.sector}</div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#4A4A46]/50 mt-4 font-body italic">
                * Representative engagements only. Client identities are not disclosed.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-10">
            {/* Expertise */}
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] font-body mb-6">
                Areas of Expertise
              </div>
              <div className="flex flex-col gap-0 border-t border-[#1A1A18]/10">
                {profile.expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-[#1A1A18]/10">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#0B4A46] shrink-0" />
                    <span className="text-[12px] text-[#1A1A18] font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience stats */}
            <div className="bg-[#EEF2ED] p-8">
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] font-body mb-6">
                Experience
              </div>
              <div className="font-display text-5xl font-light text-[#0B4A46] mb-2">
                {profile.years}+
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#4A4A46] font-body mb-8">
                Years of Practice
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] font-body mb-4">
                Industries Served
              </div>
              {profile.industries.map((ind) => (
                <div key={ind} className="text-[11px] text-[#4A4A46] font-body py-1.5 border-b border-[#1A1A18]/10 last:border-b-0">
                  {ind}
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#0B4A46] font-body mb-6">
                Education & Credentials
              </div>
              <div className="flex flex-col gap-4">
                {profile.education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-[#0B4A46]/20 pl-4">
                    <div className="font-body font-medium text-[12px] text-[#1A1A18]">{edu.degree}</div>
                    <div className="text-[11px] text-[#4A4A46] font-body mt-1">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE CTA */}
      <section className="bg-[#0B4A46] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#F7F8F4] leading-tight">
              Need Financial<br />
              <em className="not-italic text-[#B9FF8A]">Perspective?</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about#contact"
              className="bg-[#B9FF8A] text-[#0B4A46] text-[11px] tracking-[0.2em] uppercase font-body font-medium px-8 py-4 hover:bg-[#9EE86A] transition-colors"
            >
              Schedule a Consultation →
            </Link>
            <Link
              to="/about#team"
              className="border border-[#F7F8F4]/30 text-[#F7F8F4] text-[11px] tracking-[0.2em] uppercase font-body font-medium px-8 py-4 hover:border-[#F7F8F4]/60 transition-colors"
            >
              ← Back to Our People
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
