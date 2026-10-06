import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#063D3A] text-[#F7F8F4]">
      {/* Horizontal line motif */}
      <div className="border-t border-[#F7F8F4]/10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="text-[11px] tracking-[0.25em] uppercase font-body font-medium">
                M. ZAKI & ASSOCIATES
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase opacity-40 mt-1">
                CHARTERED ACCOUNTANTS
              </div>
            </div>
            <p className="font-display italic text-xl text-[#F7F8F4]/70 mt-6 leading-relaxed">
              Strategic Insight. Lasting Impact.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-8 h-px bg-[#B9FF8A]" />
              <div className="w-2 h-2 rotate-45 bg-[#B9FF8A]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-6 font-body">
              Quick Links
            </div>
            <div className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/about#contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-[12px] tracking-[0.1em] text-[#F7F8F4]/70 hover:text-[#B9FF8A] transition-colors duration-200 uppercase font-body"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-6 font-body">
              Contact
            </div>
            <div className="flex flex-col gap-4 text-[#F7F8F4]/70 text-[12px] leading-relaxed">
              <div>
                <span className="text-[#F7F8F4]/40 text-[9px] tracking-widest uppercase">P: </span>
                <a href="tel:+923332174900">+92-333-2174900</a>
              </div>
              <div>
                <span className="text-[#F7F8F4]/40 text-[9px] tracking-widest uppercase">E: </span>
                <a className="break-all" href="mailto:mzaki@zakiassociates.com">mzaki@zakiassociates.com</a>
              </div>
              <div className="text-[11px] leading-relaxed">
                FL 6/1, Gulshan-e-Iqbal, Block 6<br />
                Main Rashid Minhas Road<br />
                Karachi, Pakistan
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F7F8F4]/10 mt-16 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] text-[#F7F8F4]/30 uppercase">
            © {new Date().getFullYear()} M. Zaki & Associates. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.1em] text-[#F7F8F4]/20 uppercase">
            Chartered Accountants — Karachi
          </p>
        </div>
      </div>
    </footer>
  );
}
