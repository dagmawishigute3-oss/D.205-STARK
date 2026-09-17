import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconGlobe, IconChevronDown, IconMenu, IconX } from './Icons';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Emergency', href: '/emergency' },
  { label: 'First Aid', href: '/first-aid' },
  { label: 'Disease Library', href: '/diseases' },
  { label: 'Health Tips', href: '/health-tips' },
];

const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'US' },
  { code: 'am', label: 'አማርኛ', flag: 'ET' },
  { code: 'om', label: 'Afan Oromo', flag: 'ET' },
  { code: 'ti', label: 'Tigrinya', flag: 'ET' },
  { code: 'so', label: 'Somali', flag: 'SO' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); setLangOpen(false); }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_0_#e5e7eb] shadow-sm' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-logo font-bold text-sm">ጤ</span>
          <div className="leading-none">
            <p className="font-logo text-sm leading-tight tracking-tight">
              <span className="text-gray-900">Ten</span><span className="text-red-600">aye</span>
            </p>
            <p className="text-[9px] text-gray-400 font-medium tracking-wide">ጤናዬ · Health Companion</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive(href)
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Language switcher + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <IconGlobe size={15} className="text-gray-400" />
              <span className="font-medium">{lang.flag}</span>
              <IconChevronDown size={13} className={`text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1.5 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Select Language</p>
                </div>
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                      lang.code === l.code ? 'text-red-600 bg-red-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-400">{l.flag}</span>
                      <span className={lang.code === l.code ? 'font-semibold' : ''}>{l.label}</span>
                    </div>
                    {lang.code === l.code && (
                      <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {open ? <IconX size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-0.5 shadow-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
