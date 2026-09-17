import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconBot, IconX, IconSend, IconSearch, IconPhone } from './Icons';

const QUICK = [
  { label: 'Diabetes info', q: 'Tell me about diabetes symptoms and treatment' },
  { label: 'Stroke warning signs', q: 'What are the warning signs of a stroke?' },
  { label: 'Heart disease prevention', q: 'How can I prevent heart disease?' },
  { label: 'Persistent cough + fever', q: 'I have a persistent cough and fever — what could it be?' },
];

interface Msg {
  id: number;
  role: 'ai' | 'user';
  text: string;
}

const WELCOME: Msg = {
  id: 0,
  role: 'ai',
  text: "Hello! I'm your Tenaye Health Assistant. I can help with disease information, symptom guidance, and health tips. What would you like to know?",
};

const ts = () => Date.now();

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const userMsg: Msg = { id: ts(), role: 'user', text: t };
    const aiMsg: Msg = {
      id: ts() + 1,
      role: 'ai',
      text: `For accurate information about "${t}", I recommend consulting our Disease Library or a qualified healthcare provider. In an emergency, call 907 immediately.`,
    };
    setMsgs(prev => [...prev, userMsg, aiMsg]);
    setInput('');
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl transition-all duration-200 hover:scale-105 pulse-red flex items-center justify-center"
        aria-label="Open Health Assistant"
      >
        <IconBot size={22} />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[360px] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" style={{ height: 560 }}>

      {/* ── Gradient header ── */}
      <div className="bg-gradient-to-r from-red-600 to-rose-500 px-5 py-4 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                <IconBot size={18} />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm leading-tight">Health Assistant</p>
              <p className="text-red-100 text-[11px]">Tenaye AI · Online</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center text-white"
          >
            <IconX size={14} />
          </button>
        </div>
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white">
        {msgs.map(msg => (
          <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.role === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                <IconBot size={13} />
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'ai'
                ? 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm'
                : 'bg-red-600 text-white rounded-tr-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* ── Quick access 2×2 ── */}
      <div className="px-4 pt-3 pb-2 shrink-0 bg-white border-t border-gray-100">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick Questions</p>
        <div className="grid grid-cols-2 gap-1.5">
          {QUICK.map(({ label, q }) => (
            <button
              key={label}
              onClick={() => send(q)}
              className="px-3 py-2 rounded-xl border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-colors text-left leading-tight"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Input ── */}
      <div className="px-4 py-3 shrink-0 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100 transition-all">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Ask a health question…"
            className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
          />
          <button
            onClick={() => send(input)}
            className="w-7 h-7 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shrink-0 transition-colors"
          >
            <IconSend size={13} />
          </button>
        </div>
      </div>

      {/* ── Bottom disclaimer + CTAs ── */}
      <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 shrink-0">
        <p className="text-[10px] text-gray-400 mb-2">For educational purposes only. Not a substitute for professional medical advice.</p>
        <div className="flex gap-2">
          <Link to="/diseases" onClick={() => setOpen(false)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-gray-200 text-[11px] text-gray-600 hover:border-red-300 hover:text-red-600 transition-colors font-medium">
            <IconSearch size={11} /> Disease Library
          </Link>
          <a href="tel:907" className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-red-600 text-white text-[11px] font-semibold hover:bg-red-700 transition-colors">
            <IconPhone size={11} /> Emergency 907
          </a>
        </div>
      </div>
    </div>
  );
}
