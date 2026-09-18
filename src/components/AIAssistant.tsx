/**
 * File: src/components/AIAssistant.tsx
 * Dual-mode chatbot — Tenaye teal brand.
 *   • Compact widget  — bottom-right floating card
 *   • Full-screen workspace — ChatGPT-inspired spacious layout
 */
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconBot, IconX, IconSend, IconTrash, IconMaximize, IconMinimize,
  IconAlertTriangle, IconPhone, IconBook, IconHeart, IconActivity,
} from './Icons';

/* ── Types ── */
interface Msg {
  id: number;
  role: 'ai' | 'user';
  text: string;
  time: string;
}

/* ── Helpers ── */
const now12 = () => {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, '0');
  const p = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${p}`;
};
const ts = () => Date.now();

/* ── Static data ── */
const WELCOME: Msg = {
  id: 0,
  role: 'ai',
  time: now12(),
  text: "Hello! I'm your Tenaye Health Assistant. I can help with:\n\n• Disease information from our library\n• Symptom analysis & treatment options\n• Health tips & prevention strategies\n• Emergency guidance & next steps\n\nAsk me anything about your health concerns!",
};

const QUICK_QUESTIONS = [
  { label: 'Tell me about diabetes',       q: 'Tell me about diabetes symptoms and treatment' },
  { label: 'Warning signs of stroke',      q: 'What are the warning signs of a stroke?' },
  { label: 'How to prevent heart disease', q: 'How can I prevent heart disease?' },
  { label: 'Persistent cough and fever',   q: 'I have a persistent cough and fever — what could it be?' },
];

/* ── Confirm-clear dialog ── */
function ClearConfirmDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="absolute inset-0 z-20 bg-white/93 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 rounded-[inherit]">
      <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-3">
        <IconAlertTriangle size={22} className="text-amber-500" />
      </div>
      <h3 className="font-display font-bold text-gray-900 text-base mb-1 text-center">Clear Chat History?</h3>
      <p className="text-sm text-gray-400 text-center leading-relaxed mb-6 max-w-[240px]">
        All messages will be permanently deleted. This action cannot be undone.
      </p>
      <div className="flex gap-2 w-full">
        <button onClick={onCancel}   className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
        <button onClick={onConfirm}  className="flex-1 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold transition-colors">Clear History</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export function AIAssistant() {
  const [open, setOpen]                 = useState(false);
  const [fullscreen, setFullscreen]     = useState(false);
  const [input, setInput]               = useState('');
  const [msgs, setMsgs]                 = useState<Msg[]>([WELCOME]);
  const [confirmClear, setConfirmClear] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);
  useEffect(() => {
    const h = () => setOpen(true);
    window.addEventListener('open-ai-assistant', h);
    return () => window.removeEventListener('open-ai-assistant', h);
  }, []);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 120); }, [open, fullscreen]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs(prev => [
      ...prev,
      { id: ts(),     role: 'user', text: t,     time: now12() },
      { id: ts() + 1, role: 'ai',  time: now12(),
        text: `For accurate information about "${t}", I recommend consulting our Disease Library or a qualified healthcare provider. In an emergency, call 907 immediately.` },
    ]);
    setInput('');
  };

  const requestClear   = () => setConfirmClear(true);
  const confirmClearFn = () => { setMsgs([WELCOME]); setConfirmClear(false); };
  const cancelClear    = () => setConfirmClear(false);
  const closeAll       = () => { setOpen(false); setFullscreen(false); setConfirmClear(false); };

  /* ── FAB ── */
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#119197] hover:bg-[#0c6e73] text-white shadow-2xl transition-all duration-200 hover:scale-105 pulse-teal flex items-center justify-center"
        aria-label="Open Tenaye Assistant"
      >
        <IconBot size={22} />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
      </button>
    );
  }

  /* ══════════════════════════════════════════
     FULL-SCREEN WORKSPACE — ChatGPT-inspired
  ══════════════════════════════════════════ */
  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col bg-white">

        {/* ── Global confirm overlay ── */}
        {confirmClear && (
          <div className="absolute inset-0 z-[110] bg-black/20 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-7 max-w-sm w-full mx-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-3">
                  <IconAlertTriangle size={24} className="text-amber-500" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-1">Clear Chat History?</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">All messages will be permanently deleted. This action cannot be undone.</p>
                <div className="flex gap-3 w-full">
                  <button onClick={cancelClear}    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
                  <button onClick={confirmClearFn} className="flex-1 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold transition-colors">Clear History</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Top nav bar — slim, no center identity ── */}
        <div className="border-b border-gray-100 bg-white shrink-0">
          <div className="max-w-3xl mx-auto px-6 py-2.5 flex items-center justify-between">
            {/* Left: back */}
            <button
              onClick={() => setFullscreen(false)}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#119197] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Widget
            </button>

            {/* Right: actions only */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={requestClear}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 text-xs font-medium hover:border-gray-300 hover:text-gray-700 transition-colors"
              >
                <IconTrash size={12} /> Clear
              </button>
              <button
                onClick={() => setFullscreen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 text-xs font-medium hover:border-gray-300 hover:text-gray-700 transition-colors"
              >
                <IconMinimize size={12} /> Collapse
              </button>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
              </span>
              <button onClick={closeAll} className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors">
                <IconX size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Messages — maximum space ── */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
            {msgs.map(msg => (
              <div key={msg.id}>
                {msg.role === 'ai' ? (
                  <div className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0c6e73] to-[#119197] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                      <IconBot size={16} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs font-semibold text-[#119197] mb-2">Tenaye Assistant</p>
                      <div className="text-[15px] text-gray-800 leading-7 whitespace-pre-line">{msg.text}</div>
                      <span className="text-[10px] text-gray-400 mt-2 block">{msg.time}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="max-w-[62%]">
                      <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-5 py-3.5 text-[15px] text-gray-800 leading-7">
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 block text-right">{msg.time}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* ── Bottom dock — quick questions + input, compact ── */}
        <div className="bg-white border-t border-gray-100 shrink-0 pt-3 pb-4">
          <div className="max-w-3xl mx-auto px-6">
            {/* Quick questions — single horizontal scroll row, no label */}
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
              {QUICK_QUESTIONS.map(({ label, q }) => (
                <button
                  key={label}
                  onClick={() => send(q)}
                  className="shrink-0 px-3.5 py-1.5 rounded-full border border-gray-200 text-xs text-gray-500 hover:border-[#119197] hover:text-[#119197] hover:bg-[#e6f7f7] transition-colors whitespace-nowrap"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Input — single clean row */}
            <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-2xl px-5 py-3.5 hover:border-gray-300 focus-within:border-[#119197] focus-within:ring-4 focus-within:ring-[#e6f7f7] transition-all">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
                placeholder="Ask about diseases…"
                className="flex-1 text-[15px] text-gray-800 placeholder-gray-400 outline-none bg-transparent leading-relaxed"
              />
              <button
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-[#119197] hover:bg-[#0c6e73] disabled:opacity-35 text-white flex items-center justify-center transition-colors shrink-0"
                >
                  <IconSend size={15} />
                </button>
              </div>
          </div>
        </div>

        {/* ── Medical disclaimer ── */}
        <div className="bg-amber-50 border-t border-amber-100 shrink-0">
          <div className="max-w-3xl mx-auto px-6 py-3 flex items-start gap-2">
            <IconAlertTriangle size={13} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-700 leading-relaxed">
              <span className="font-bold">Medical Disclaimer:</span> This chatbot provides general health information for educational purposes only. It is not a substitute for professional medical advice. Always seek the advice of your physician.
            </p>
          </div>
        </div>

        {/* ── Resources strip ── */}
        <div className="bg-gradient-to-r from-[#0c6e73] to-[#119197] shrink-0">
          <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3">
            <p className="text-white/80 text-xs font-semibold shrink-0">Need Additional Resources?</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/diseases"  onClick={closeAll} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors">
                <IconBook size={11} /> Disease Library
              </Link>
              <Link to="/first-aid" onClick={closeAll} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors">
                <IconHeart size={11} /> First Aid
              </Link>
              <Link to="/health-tips" onClick={closeAll} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors">
                <IconActivity size={11} /> Health Tips
              </Link>
              <a href="tel:907" className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-semibold transition-colors">
                <IconPhone size={11} /> Emergency 907
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════
     COMPACT WIDGET MODE
  ══════════════════════════════════════════ */
  return (
    <div
      className="fixed bottom-5 right-5 z-50 w-[360px] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-up"
      style={{ animationDuration: '0.18s', maxHeight: '580px' }}
    >
      {/* Teal left accent */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-[#0c6e73] to-[#119197] pointer-events-none z-10" />

      {/* Confirm-clear overlay (widget) */}
      {confirmClear && <ClearConfirmDialog onConfirm={confirmClearFn} onCancel={cancelClear} />}

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0c6e73] to-[#119197] pl-5 pr-4 py-3.5 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <IconBot size={17} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm leading-tight">Tenaye Assistant</p>
              <p className="text-teal-100 text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setFullscreen(true)} title="Open full chat"
              className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
              <IconMaximize size={12} />
            </button>
            <button onClick={requestClear} title="Clear history"
              className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
              <IconTrash size={12} />
            </button>
            <button onClick={closeAll} title="Close"
              className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
              <IconX size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white min-h-0">
        {msgs.map(msg => (
          <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.role === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0c6e73] to-[#119197] flex items-center justify-center text-white shrink-0 mt-0.5">
                <IconBot size={13} />
              </div>
            )}
            <div className="flex flex-col gap-0.5" style={{ maxWidth: '84%' }}>
              <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'ai'
                  ? 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm'
                  : 'bg-[#119197] text-white rounded-tr-sm'
              }`}>
                {msg.text}
              </div>
              <span className={`text-[9px] text-gray-400 ${msg.role === 'user' ? 'text-right' : ''}`}>{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick access 2×2 */}
      <div className="px-4 pt-3 pb-2 bg-white border-t border-gray-100 shrink-0">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick access:</p>
        <div className="grid grid-cols-2 gap-1.5">
          <button onClick={() => setFullscreen(true)}
            className="px-3 py-2 rounded-xl border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-[#119197] hover:text-[#119197] hover:bg-[#e6f7f7] transition-colors text-left">
            Open Full Chat
          </button>
          <Link to="/diseases" onClick={closeAll}
            className="block px-3 py-2 rounded-xl border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-[#119197] hover:text-[#119197] hover:bg-[#e6f7f7] transition-colors">
            Disease Library
          </Link>
          <Link to="/emergency" onClick={closeAll}
            className="block px-3 py-2 rounded-xl border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-[#119197] hover:text-[#119197] hover:bg-[#e6f7f7] transition-colors">
            Emergency
          </Link>
          <Link to="/first-aid" onClick={closeAll}
            className="block px-3 py-2 rounded-xl border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-[#119197] hover:text-[#119197] hover:bg-[#e6f7f7] transition-colors">
            First Aid
          </Link>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 bg-white border-t border-gray-100 shrink-0">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-[#119197] focus-within:ring-2 focus-within:ring-[#e6f7f7] transition-all">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Type a message…"
            className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
          />
          <button onClick={() => send(input)} disabled={!input.trim()}
            className="w-7 h-7 rounded-full bg-[#119197] hover:bg-[#0c6e73] disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors">
            <IconSend size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
