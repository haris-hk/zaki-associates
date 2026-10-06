import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  const isDark = location.pathname === '/' && !scrolled;

  const navClass = isDark
    ? 'text-[#F7F8F4]'
    : 'text-[#1A1A18]';

  const bgClass = scrolled
    ? 'bg-[#F7F8F4]/95 backdrop-blur-sm shadow-sm'
    : location.pathname === '/'
      ? 'bg-transparent'
      : 'bg-[#F7F8F4]/95 backdrop-blur-sm';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className={`transition-colors duration-300 ${navClass}`}>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[11px] lg:text-[13px] font-medium tracking-[0.2em] uppercase">
              M. ZAKI & ASSOCIATES
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase opacity-60 mt-0.5 font-body">
              CHARTERED ACCOUNTANTS
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className={`hidden lg:flex items-center gap-8 ${navClass}`}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={location.pathname === to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] tracking-[0.15em] uppercase font-body font-medium transition-opacity duration-200 hover:opacity-60 ${
                location.pathname === to ? 'opacity-100' : 'opacity-75'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            onClick={() => setMenuOpen(false)}
            className="ml-4 bg-[#B9FF8A] text-[#0B4A46] text-[11px] tracking-[0.15em] uppercase font-body font-medium px-5 py-2.5 hover:bg-[#9EE86A] transition-colors duration-200"
          >
            Contact Us →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden ${navClass} p-2`}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={toggleRef}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-navigation" inert={!menuOpen} aria-hidden={!menuOpen} className={`lg:hidden bg-[#0B4A46] overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={location.pathname === to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-[#F7F8F4] text-[13px] tracking-[0.2em] uppercase font-body font-medium"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-[#B9FF8A] text-[#0B4A46] text-[11px] tracking-[0.15em] uppercase font-body font-medium px-5 py-3 mt-2 self-start"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </nav>
  );
}
