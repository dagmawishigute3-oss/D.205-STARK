import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconArrowLeft, IconBookmark, IconShare, IconAlertTriangle, IconPhone, IconBot, IconBook, IconSearch } from '../components/Icons';

const DISEASE_DB: Record<string, {
  name: string; category: string; severity: string;
  prevalence: string; description: string;
  symptoms: string[]; causes: string[]; treatment: string[];
  selfCare: string[]; prevention: string[];
  riskFactors: string[]; warningSigns: string[];
}> = {
  mvp: {
    name: 'Mitral Valve Prolapse (MVP)', category: 'Cardiovascular', severity: 'Low',
    prevalence: 'Common: Affects 2–3% of the population. More common in women.',
    description: "Mitral Valve Prolapse is a condition where the mitral valve doesn't close properly, allowing blood to flow backward into the left atrium. Most people with MVP have no symptoms and require no treatment.",
    symptoms: ['Often asymptomatic', 'Heart palpitations or irregular heartbeat', 'Chest pain (atypical, not related to heart attack)', 'Fatigue', 'Shortness of breath', 'Dizziness or lightheadedness'],
    causes: ['Abnormal mitral valve leaflets', 'Connective tissue abnormalities', 'Genetic factors', 'Marfan syndrome or similar connective tissue disorders'],
    treatment: ['Regular monitoring with echocardiograms', 'Beta-blockers for palpitations', 'Blood thinners if blood clots are a risk', 'Surgery in severe cases of mitral regurgitation'],
    selfCare: ['Limit caffeine and alcohol', 'Stay well hydrated', 'Practice stress management techniques', 'Maintain regular but not strenuous exercise', 'Avoid stimulants like decongestants'],
    prevention: ['No definitive prevention', 'Regular cardiac check-ups', 'Inform all healthcare providers of MVP diagnosis', 'Antibiotic prophylaxis before certain dental procedures (if recommended by doctor)'],
    riskFactors: ['Female sex', 'Family history', 'Connective tissue disorders', 'Scoliosis', 'Low body weight'],
    warningSigns: ['Seek medical care for: Severe shortness of breath', 'Irregular heartbeat', 'Chest pain', 'Fainting'],
  },
  hypertension: {
    name: 'Hypertension', category: 'Cardiovascular', severity: 'Medium',
    prevalence: 'Very common: Affects about 1.28 billion adults worldwide.',
    description: 'Hypertension, or high blood pressure, is a chronic condition where the force of blood against artery walls is consistently too high. It is a major risk factor for heart disease, stroke, and kidney disease.',
    symptoms: ['Often no symptoms (silent killer)', 'Severe headaches', 'Nosebleeds', 'Fatigue or confusion', 'Vision problems', 'Chest pain'],
    causes: ['Unhealthy diet high in sodium', 'Physical inactivity', 'Obesity or overweight', 'Tobacco use', 'Excessive alcohol consumption', 'Stress', 'Genetics'],
    treatment: ['Lifestyle modifications (diet, exercise)', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics', 'Beta-blockers', 'Regular blood pressure monitoring'],
    selfCare: ['Follow DASH diet (low sodium, high potassium)', 'Exercise 30 minutes most days', 'Limit alcohol to moderate amounts', 'Quit smoking', 'Manage stress with relaxation techniques', 'Monitor blood pressure at home'],
    prevention: ['Maintain healthy weight', 'Exercise regularly', 'Eat a healthy diet low in sodium', 'Limit alcohol consumption', 'Do not smoke', 'Regular health screenings'],
    riskFactors: ['Age (risk increases with age)', 'Race (more common in people of African heritage)', 'Family history', 'Being overweight or obese', 'Physical inactivity', 'Tobacco use', 'Too much sodium', 'Too little potassium'],
    warningSigns: ['Blood pressure above 180/120', 'Severe headache with blurred vision', 'Chest pain', 'Difficulty breathing', 'Nausea and vomiting'],
  },
};

const TABS = ['Overview', 'Symptoms', 'Causes', 'Treatment', 'Self-Care', 'Prevention'] as const;
type Tab = typeof TABS[number];

export function DiseaseDetail() {
  const { id = 'mvp' } = useParams<{ id: string }>();
  const [tab, setTab] = useState<Tab>('Overview');
  const disease = DISEASE_DB[id] || DISEASE_DB['mvp'];

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/diseases" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <IconArrowLeft size={15} /> Back to Library
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-[#119197] font-medium">{disease.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
              <IconBookmark size={16} />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
              <IconShare size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 mb-8">
          <div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-3">{disease.name}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{disease.description}</p>

            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Severity', value: disease.severity, color: disease.severity === 'Low' ? 'text-green-600' : disease.severity === 'Medium' ? 'text-amber-600' : 'text-red-600' },
                { label: 'Prevalence', value: disease.prevalence, color: 'text-blue-600' },
                { label: 'Category', value: disease.category, color: 'text-green-600' },
              ].map(s => (
                <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
                  <p className={`text-sm font-display font-bold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=280&h=200&fit=crop&auto=format"
              alt={disease.name}
              className="w-full rounded-2xl border border-gray-200 object-cover h-[200px] bg-blue-100"
            />
          </div>
        </div>

        {/* Emergency alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <IconAlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-display font-semibold text-red-700 text-sm mb-1">Emergency Warning Signs</p>
            <p className="text-red-600 text-xs">Seek medical care for: {disease.warningSigns.join(', ')}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href="tel:907" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors">
              <IconPhone size={12} /> Emergency Help
            </a>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-300 text-red-600 text-xs font-semibold hover:bg-red-50 transition-colors">
              <IconBot size={12} /> Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-gray-200 rounded-xl mb-6 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-3.5 text-sm font-display font-semibold whitespace-nowrap transition-colors border-b-2 ${
                  tab === t
                    ? 'border-[#119197] text-[#119197] bg-[#e6f7f7]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-slate-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-6">
            {tab === 'Overview' && (
              <div>
                <div className="flex items-center gap-2 text-[#119197] mb-3">
                  <IconBook size={16} />
                  <h3 className="font-display font-bold text-sm">What is {disease.name}?</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{disease.description}</p>
                <div className="bg-[#e6f7f7] border border-[#cceef0] rounded-xl p-4">
                  <p className="font-display font-semibold text-[#0c6e73] text-xs mb-1">Prevalence</p>
                  <p className="text-[#119197] text-sm">{disease.prevalence}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mt-6">
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm mb-3">Risk Factors</h4>
                    <ul className="space-y-2">
                      {disease.riskFactors.map(r => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                          <IconAlertTriangle size={13} className="text-amber-500 shrink-0 mt-0.5" />{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm mb-3">Warning Signs (Urgent)</h4>
                    <ul className="space-y-2">
                      {disease.warningSigns.map(w => (
                        <li key={w} className="flex items-start gap-2 text-sm text-gray-600">
                          <IconAlertTriangle size={13} className="text-red-500 shrink-0 mt-0.5" />{w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {tab === 'Symptoms' && (
              <ul className="space-y-3">
                {disease.symptoms.map(s => (
                  <li key={s} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#119197] shrink-0" />{s}
                  </li>
                ))}
              </ul>
            )}
            {tab === 'Causes' && (
              <ul className="space-y-3">
                {disease.causes.map(c => (
                  <li key={c} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />{c}
                  </li>
                ))}
              </ul>
            )}
            {tab === 'Treatment' && (
              <ul className="space-y-3">
                {disease.treatment.map(t => (
                  <li key={t} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />{t}
                  </li>
                ))}
              </ul>
            )}
            {tab === 'Self-Care' && (
              <ul className="space-y-3">
                {disease.selfCare.map(s => (
                  <li key={s} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
            )}
            {tab === 'Prevention' && (
              <ul className="space-y-3">
                {disease.prevention.map(p => (
                  <li key={p} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />{p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-500 mb-1">Need Medical Advice?</p>
            <p className="font-display font-semibold text-[#119197] text-sm mb-4">Connect with healthcare professionals</p>
            <div className="space-y-2">
              <a href="tel:907" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-colors">
                <IconPhone size={15} /> Find Emergency Services
              </a>
              <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50 transition-colors">
                <IconBot size={15} /> Chat with AI Assistant
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-500 mb-1">More Resources</p>
            <p className="font-display font-semibold text-[#119197] text-sm mb-4">Learn more about health conditions</p>
            <div className="space-y-2">
              <Link to="/diseases" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold transition-colors">
                <IconSearch size={15} /> Browse Disease Library
              </Link>
              <Link to="/health-tips" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold transition-colors">
                <IconBook size={15} /> Read Health Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8" />
    </main>
  );
}
