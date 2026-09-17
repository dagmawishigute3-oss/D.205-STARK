import { Link } from 'react-router-dom';
import { IconPhone, IconMail, IconMapPin, IconClock, IconHeart } from './Icons';

const NAV = ['Home', 'About Us', 'Emergency', 'Disease Library', 'Health Tips', 'Contact'];
const RESOURCES = ['AI Health Assistant', 'Health Tips', 'Symptom Checker', 'Disease Library'];
const LEGAL = ['Privacy Policy', 'Terms of Service', 'FAQ', 'Support Center'];

const HREF: Record<string, string> = {
  'Home': '/', 'About Us': '/about', 'Emergency': '/emergency',
  'Disease Library': '/diseases', 'Health Tips': '/health-tips', 'Contact': '/contact',
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-logo font-bold text-sm">ጤ</span>
              <div className="leading-none">
                <p className="font-logo text-sm leading-tight">
                  <span className="text-white">Ten</span><span className="text-red-400">aye</span>
                </p>
                <p className="text-[9px] text-gray-500 tracking-wide">ጤናዬ</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your trusted health information platform providing reliable medical guidance, expert consultations, and comprehensive wellness resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><IconPhone size={14} className="text-red-500 shrink-0"/><span>+251 900 000 000</span></li>
              <li className="flex items-center gap-2"><IconMail size={14} className="text-red-500 shrink-0"/><span>support@tenaye.health</span></li>
              <li className="flex items-center gap-2"><IconMapPin size={14} className="text-red-500 shrink-0"/><span>Addis Ababa, Ethiopia</span></li>
              <li className="flex items-center gap-2"><IconClock size={14} className="text-red-500 shrink-0"/><span>24/7 Emergency · 8AM–6PM General</span></li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="font-display font-semibold text-white text-sm mb-4">Quick Navigation</p>
            <ul className="space-y-2.5">
              {NAV.map(l => (
                <li key={l}>
                  <Link to={HREF[l] || '/'} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Resources */}
          <div>
            <p className="font-display font-semibold text-white text-sm mb-4">Health Resources</p>
            <ul className="space-y-2.5">
              {RESOURCES.map(l => (
                <li key={l}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <p className="font-display font-semibold text-white text-sm mb-4">Support & Legal</p>
            <ul className="space-y-2.5 mb-6">
              {LEGAL.map(l => (
                <li key={l}>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">{l}</span>
                </li>
              ))}
            </ul>
            <p className="font-display font-semibold text-white text-sm mb-3">Follow Us</p>
            <div className="flex gap-2">
              {['f', '𝕏', 'in', '▶', 'yt'].map((s, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors flex items-center justify-center text-xs">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Tenaye Health Platform. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Medical disclaimer */}
      <div className="border-t border-gray-800 bg-gray-950 px-4 sm:px-6 py-2">
        <p className="text-[11px] text-gray-600 text-center">
          <span className="font-semibold text-gray-500">Medical Disclaimer:</span> The information provided on this platform is for educational purposes only and should not replace professional medical advice. Always consult qualified healthcare providers for medical concerns. In case of emergency, call 907 immediately.
        </p>
      </div>

      {/* Emergency bar */}
      <div className="bg-gray-950 border-t border-gray-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <span className="text-xs text-gray-400">
            <span className="font-semibold text-white">Medical Emergency?</span> Call <span className="text-red-400 font-bold">907</span> immediately
          </span>
        </div>
        <a
          href="tel:907"
          className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shrink-0"
        >
          Emergency: 907
        </a>
      </div>
    </footer>
  );
}
