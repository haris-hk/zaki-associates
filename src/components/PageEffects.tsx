import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function PageEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const names: Record<string, string> = { '/': 'Chartered Accountants', '/about': 'About Us', '/services': 'Our Services' };
    document.title = `${names[pathname] || (pathname.startsWith('/team/') ? 'Our People' : 'Page Not Found')} | M. Zaki & Associates`;
    const frame = requestAnimationFrame(() => {
      let fragment = hash.slice(1);
      try { fragment = decodeURIComponent(fragment); } catch { /* Leave malformed fragments unchanged. */ }
      const target = fragment ? document.getElementById(fragment) : null;
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    const elements = Array.from(document.querySelectorAll<HTMLElement>('main section > div'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => cancelAnimationFrame(frame);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.05 });
    elements.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); elements.forEach(el => el.classList.remove('reveal', 'is-visible')); };
  }, [pathname, hash, key]);
  return null;
}
