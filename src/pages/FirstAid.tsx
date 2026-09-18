import { useState } from 'react';
import { IconHeart, IconPhone, IconAlertTriangle } from '../components/Icons';

/* ══════════════════════════════════════════
   SVG topic icons (line art, red)
══════════════════════════════════════════ */
const CprIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <circle cx="24" cy="10" r="5" />
    <path d="M16 20h16v22H16z" rx="3" />
    <path d="M20 20v-4a4 4 0 0 1 8 0v4" />
    <path d="M21 31h6M24 28v6" />
  </svg>
);
const BleedingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M24 6C18 14 12 20 12 28a12 12 0 0 0 24 0C36 20 30 14 24 6z" />
    <path d="M20 32a4 4 0 0 0 8 0" />
  </svg>
);
const ChokingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <circle cx="24" cy="10" r="6" />
    <path d="M16 22c0-4.4 3.6-8 8-8s8 3.6 8 8v6" />
    <path d="M12 36l4-8h16l4 8" />
    <path d="M18 30c4 4 8 4 12 0" />
  </svg>
);
const FractureIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M16 6l2 9-4 3 6 4-3 8 3 12" />
    <path d="M32 6l-2 9 4 3-6 4 3 8-3 12" />
  </svg>
);
const BurnsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M24 4c0 8-10 12-10 22a10 10 0 0 0 20 0C34 16 24 12 24 4z" />
    <path d="M20 32a4 4 0 0 0 8 0" />
    <path d="M24 28v-6" />
  </svg>
);
const SprainsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M10 38l10-16 8 8 10-18" />
    <circle cx="20" cy="26" r="4" />
    <path d="M16 36c2-2 8-2 10 0" />
  </svg>
);

/* ══════════════════════════════════════════
   Instructional SVG animations
══════════════════════════════════════════ */
function CprAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 160" className="w-36 h-48" fill="none">
        {/* ground */}
        <rect x="10" y="148" width="100" height="4" rx="2" fill="#e5e7eb"/>
        {/* legs */}
        <rect x="42" y="110" width="14" height="38" rx="6" fill="#fca5a5"/>
        <rect x="64" y="110" width="14" height="38" rx="6" fill="#fca5a5"/>
        {/* torso — animated */}
        <rect x="30" y="62" width="60" height="48" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" className="animate-compress" style={{transformOrigin:'60px 86px'}}/>
        {/* head */}
        <circle cx="60" cy="50" r="12" fill="#fca5a5" stroke="#dc2626" strokeWidth="1.5"/>
        {/* rescuer hands */}
        <g className="animate-compress-arm" style={{transformOrigin:'60px 70px'}}>
          <rect x="50" y="62" width="20" height="18" rx="4" fill="#dc2626" opacity="0.9"/>
          {/* left arm */}
          <path d="M50 72 Q30 65 18 55" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
          {/* right arm */}
          <path d="M70 72 Q90 65 102 55" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
        </g>
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">30 compressions : 2 breaths</p>
        <p className="text-[10px] text-gray-400 mt-0.5">100–120 compressions / min · 5–6 cm depth</p>
      </div>
    </div>
  );
}

function BleedingAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 140" className="w-36 h-44" fill="none">
        {/* arm */}
        <rect x="45" y="20" width="30" height="90" rx="14" fill="#fca5a5"/>
        {/* wound */}
        <ellipse cx="60" cy="70" rx="12" ry="6" fill="#dc2626" opacity="0.8" className="animate-breath"/>
        {/* bandage wrap */}
        <rect x="35" y="58" width="50" height="12" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5"/>
        <rect x="35" y="72" width="50" height="12" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5"/>
        {/* pressure arrow */}
        <path d="M60 30 L60 52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
        <path d="M52 46 L60 55 L68 46" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">Direct Pressure</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Hold firmly for 15 minutes without lifting</p>
      </div>
    </div>
  );
}

function ChokingAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 160" className="w-36 h-48" fill="none">
        {/* victim silhouette */}
        <circle cx="72" cy="28" r="10" fill="#fca5a5"/>
        <rect x="58" y="40" width="28" height="44" rx="8" fill="#fecaca"/>
        <rect x="60" y="84" width="10" height="36" rx="4" fill="#fca5a5"/>
        <rect x="74" y="84" width="10" height="36" rx="4" fill="#fca5a5"/>
        {/* rescuer arms */}
        <g className="animate-compress-arm" style={{transformOrigin:'72px 72px'}}>
          <path d="M20 90 Q45 78 58 72" stroke="#dc2626" strokeWidth="7" strokeLinecap="round"/>
          <path d="M20 90 Q40 95 58 82" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
          {/* fist */}
          <circle cx="58" cy="72" r="8" fill="#dc2626"/>
        </g>
        {/* upward thrust arrows */}
        <path d="M72 90 L72 65" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"/>
        <path d="M65 70 L72 62 L79 70" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">Heimlich Maneuver</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Inward &amp; upward thrusts above navel</p>
      </div>
    </div>
  );
}

function FractureAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 140" className="w-36 h-44" fill="none">
        {/* bone */}
        <path d="M40 20 Q55 35 55 70 Q55 105 40 120" stroke="#d1d5db" strokeWidth="14" strokeLinecap="round"/>
        {/* fracture crack */}
        <path d="M46 65 L56 55 L48 50 L58 40" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
        {/* splint boards */}
        <rect x="28" y="18" width="8" height="104" rx="2" fill="#92400e" opacity="0.7"/>
        <rect x="56" y="18" width="8" height="104" rx="2" fill="#92400e" opacity="0.7"/>
        {/* bandage wraps */}
        {[30,50,70,90].map(y => (
          <rect key={y} x="24" y={y} width="44" height="8" rx="2" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        ))}
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">Immobilize &amp; Splint</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Do NOT attempt to realign the bone</p>
      </div>
    </div>
  );
}

function BurnsAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 140" className="w-36 h-44" fill="none">
        {/* arm */}
        <rect x="45" y="10" width="30" height="90" rx="14" fill="#fca5a5"/>
        {/* burn area */}
        <ellipse cx="60" cy="50" rx="14" ry="18" fill="#fb923c" opacity="0.7" className="animate-breath"/>
        {/* water drops */}
        <path d="M90 20 Q92 25 90 30" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="animate-breath" style={{animationDelay:'0.2s'}}/>
        <path d="M100 30 Q102 35 100 40" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="animate-breath" style={{animationDelay:'0.4s'}}/>
        <path d="M95 40 Q97 45 95 50" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="animate-breath" style={{animationDelay:'0.6s'}}/>
        {/* cool water flow */}
        <path d="M85 15 Q95 35 88 60" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" opacity="0.6" strokeDasharray="5 4"/>
        {/* tap icon */}
        <rect x="84" y="8" width="20" height="8" rx="2" fill="#60a5fa"/>
        <path d="M94 16 v6" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">Cool with running water</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Cool (not cold) water · 10–20 minutes</p>
      </div>
    </div>
  );
}

function SprainsAnim() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 140" className="w-36 h-44" fill="none">
        {/* leg/ankle shape */}
        <rect x="45" y="10" width="30" height="70" rx="10" fill="#fca5a5"/>
        <ellipse cx="60" cy="90" rx="22" ry="16" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5"/>
        {/* swelling pulse */}
        <ellipse cx="60" cy="90" rx="18" ry="12" fill="#fca5a5" className="animate-breath" style={{transformOrigin:'60px 90px'}}/>
        {/* ice pack */}
        <rect x="36" y="76" width="48" height="22" rx="6" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5"/>
        <text x="60" y="92" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="sans-serif">ICE</text>
        {/* bandage wrap */}
        <path d="M36 104 Q60 114 84 104" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round"/>
        <path d="M36 112 Q60 122 84 112" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round"/>
        {/* elevation arrow */}
        <path d="M100 100 L100 60" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M94 66 L100 58 L106 66" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="100" y="116" textAnchor="middle" fontSize="7" fill="#059669" fontFamily="sans-serif">ELEVATE</text>
      </svg>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#119197] uppercase tracking-wide">R.I.C.E Protocol</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Rest · Ice · Compress · Elevate</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Guide data
══════════════════════════════════════════ */
interface Guide {
  id: string;
  title: string;
  amharic: string;
  urgency: 'Critical' | 'High' | 'Moderate';
  icon: React.ReactNode;
  overview: string;
  keyFacts: string[];
  steps: { title: string; detail: string }[];
  doNot: string[];
  animation: React.ReactNode;
}

const GUIDES: Guide[] = [
  {
    id: 'cpr',
    title: 'CPR',
    amharic: 'የልብ ሙሞ ማስቆም',
    urgency: 'Critical',
    icon: <CprIcon />,
    overview: 'Cardiopulmonary resuscitation (CPR) keeps oxygenated blood circulating when the heart stops. Brain damage begins within 4–6 minutes without blood flow. Starting CPR immediately can double or triple survival chances.',
    keyFacts: ['Survival drops ~10% for every minute without CPR', 'Hands-only CPR is effective for adults', '30 compressions : 2 rescue breaths cycle', 'AED use within 3–5 min raises survival to 74%'],
    steps: [
      { title: 'Ensure scene safety', detail: 'Check for hazards — traffic, electricity, fire — before approaching the person.' },
      { title: 'Check responsiveness', detail: 'Tap shoulders firmly and shout "Are you OK?" No response + no normal breathing = begin CPR.' },
      { title: 'Call 907 immediately', detail: 'Instruct a bystander to call 907 and bring an AED. Put the phone on speaker.' },
      { title: 'Position hands', detail: 'Kneel beside the chest. Place the heel of one hand on the CENTER of the chest (lower half of sternum). Place the other hand on top, interlace fingers, keep arms straight.' },
      { title: 'Compress hard and fast', detail: 'Push DOWN at least 5–6 cm (2–2.4 in) at 100–120 compressions/min (beat of "Stayin\' Alive"). Allow FULL chest recoil between compressions — do not lean on chest.' },
      { title: 'Give 2 rescue breaths', detail: 'After 30 compressions: tilt head, lift chin, pinch nose shut, seal mouth, give 2 breaths over 1 second each. Watch for chest rise. If no rise, reposition head and retry once.' },
      { title: 'Continue 30:2 cycles', detail: 'Alternate 30 compressions and 2 breaths. Switch compressors every 2 minutes if possible to maintain quality.' },
      { title: 'Use AED as soon as available', detail: 'Power on the AED, attach pads, follow voice prompts. Resume CPR immediately after each shock.' },
    ],
    doNot: ['Do not remove hands from chest between compressions', 'Do not compress over the xiphoid process (tip of sternum)', 'Do not lean on chest during recoil', 'Do not interrupt compressions for more than 10 seconds'],
    animation: <CprAnim />,
  },
  {
    id: 'bleeding',
    title: 'Bleeding',
    amharic: 'ደም መፍሰስ',
    urgency: 'Critical',
    icon: <BleedingIcon />,
    overview: 'Uncontrolled hemorrhage can cause death in as little as 3–5 minutes. The body holds approximately 5 liters of blood — losing 40% (2 L) is life-threatening. Direct pressure is the single most effective intervention.',
    keyFacts: ['Adults can lose ~500 mL safely, ~1 L causes shock', 'Tourniquets can be life-saving on extremities', 'Do NOT remove an embedded object', 'Elevation + pressure reduce blood flow significantly'],
    steps: [
      { title: 'Protect yourself', detail: 'Use gloves, a plastic bag, or extra layers of cloth if gloves unavailable. Avoid contact with blood when possible.' },
      { title: 'Expose the wound', detail: 'Cut away clothing if necessary to see the injury clearly and assess severity.' },
      { title: 'Apply firm direct pressure', detail: 'Use a clean cloth, sterile gauze, or bandage. Press FIRMLY without lifting. If cloth soaks through, add MORE material on top — do NOT remove the original layer.' },
      { title: 'Hold for 15 minutes', detail: 'Check the time. Maintain constant pressure for at least 15 continuous minutes. Premature lifting restarts the clotting process.' },
      { title: 'Elevate the limb', detail: 'If the wound is on an arm or leg and no fracture is suspected, raise it above heart level to reduce blood pressure at the wound site.' },
      { title: 'Pack deep wounds', detail: 'For deep puncture wounds or wounds in body cavities, pack the wound firmly with gauze and apply pressure on top.' },
      { title: 'Apply tourniquet if needed', detail: 'For severe limb bleeding that cannot be controlled by pressure: apply 5–8 cm above the wound, tighten until bleeding stops. Write the TIME applied on the skin. Never remove once applied.' },
      { title: 'Treat for shock', detail: 'Lay the person flat, elevate legs 30 cm (if no spinal injury), keep warm, do not give food or water. Monitor breathing.' },
    ],
    doNot: ['Do not remove embedded objects', 'Do not lift cloth to check — add more on top', 'Do not apply tourniquet directly over a joint', 'Do not use a thin cord or wire as a tourniquet'],
    animation: <BleedingAnim />,
  },
  {
    id: 'choking',
    title: 'Choking',
    amharic: 'መታፈን',
    urgency: 'Critical',
    icon: <ChokingIcon />,
    overview: 'Choking occurs when a foreign object completely or partially obstructs the airway. Complete obstruction causes loss of consciousness within 1–3 minutes due to oxygen deprivation. The Heimlich maneuver is effective in over 85% of adult choking cases.',
    keyFacts: ['Choking kills ~5,000 people annually worldwide', 'The universal choking sign: hands clutching throat', 'Abdominal thrusts create 30 mmHg pressure to expel objects', 'Infants need back blows, not abdominal thrusts'],
    steps: [
      { title: 'Recognize severe choking', detail: 'Signs: cannot speak, cannot cough forcefully, cannot breathe, skin turning blue/gray, silent or high-pitched breathing, clutching throat.' },
      { title: 'Ask "Are you choking?"', detail: 'If they can cough forcefully or speak, encourage continued coughing — they may clear it themselves. Do NOT intervene yet.' },
      { title: 'Call 907', detail: 'Tell a bystander to call immediately. You continue with the Heimlich.' },
      { title: 'Give 5 back blows', detail: 'Lean the person forward slightly, support the chest with one hand. Use the heel of your other hand to give 5 firm blows between the shoulder blades.' },
      { title: 'Give 5 abdominal thrusts', detail: 'Stand behind the person. Make a fist and place it just above the navel (well below the sternum). Cover with your other hand. Pull sharply INWARD and UPWARD. Each thrust should be separate and distinct.' },
      { title: 'Alternate until cleared', detail: 'Continue alternating 5 back blows and 5 abdominal thrusts until the object is expelled or the person becomes unconscious.' },
      { title: 'If unconscious: begin CPR', detail: 'Lower carefully to the floor. Begin CPR starting with chest compressions. Before giving breaths, look in the mouth — if you SEE the object, remove it. Never do blind finger sweeps.' },
      { title: 'Infant choking (under 1 year)', detail: 'Hold face-down on your forearm. Give 5 back blows with heel of hand. Flip face-up, give 5 CHEST thrusts (2 fingers on sternum). Do NOT use abdominal thrusts on infants.' },
    ],
    doNot: ['Do not perform blind finger sweeps in the mouth', 'Do not give abdominal thrusts to infants or pregnant women', 'Do not compress on the sternum tip (xiphoid)', 'Do not stop if object is not visible — continue cycles'],
    animation: <ChokingAnim />,
  },
  {
    id: 'fracture',
    title: 'Fracture',
    amharic: 'አጥንት መሰበር',
    urgency: 'High',
    icon: <FractureIcon />,
    overview: 'A fracture is a break or crack in a bone. Improper handling of fractures can cause additional damage to blood vessels, nerves, and surrounding tissue. The goal of first aid is to immobilize — not to realign — and prevent further injury until professional care is available.',
    keyFacts: ['Open fractures (bone visible) are medical emergencies', 'Femur fracture can cause 1–2 L internal blood loss', 'Always check circulation below the fracture', 'Signs: deformity, swelling, bruising, severe pain on movement'],
    steps: [
      { title: 'Ensure safety and call 907', detail: 'For suspected spinal, hip, or femur fractures, call immediately. Do not move the person unless in immediate danger.' },
      { title: 'Control any bleeding', detail: 'Apply gentle pressure around (not over) the fracture site with a clean dressing. For open fractures, cover with a sterile dressing without pressing on the bone.' },
      { title: 'Do NOT attempt to straighten', detail: 'Immobilize the bone in the position found. Attempting to realign can cause blood vessel and nerve damage.' },
      { title: 'Check circulation (CSM)', detail: 'Assess Circulation (pulse, capillary refill), Sensation (can they feel below fracture?), and Movement (can they wiggle fingers/toes?) — BEFORE and AFTER splinting.' },
      { title: 'Build a splint', detail: 'Use rigid material (rolled newspaper, cardboard, sticks, folded clothing). The splint must extend one joint above AND one joint below the fracture site.' },
      { title: 'Pad the splint', detail: 'Place soft padding between the splint and the limb — at bony prominences especially. This prevents pressure sores and improves comfort.' },
      { title: 'Secure the splint', detail: 'Tie bandages or strips of cloth at multiple points: above the fracture, below the fracture, and at ends of splint. Never tie directly OVER the fracture. Check that bandages are firm but allow two fingers to slide under.' },
      { title: 'Apply cold, elevate, recheck CSM', detail: 'Apply ice wrapped in cloth to reduce swelling. Elevate slightly if possible. Recheck CSM every 10 minutes and loosen if circulation is compromised.' },
    ],
    doNot: ['Do not straighten or realign the fracture', 'Do not tie splint directly over the fracture site', 'Do not push exposed bone back in', 'Do not give food, drink, or pain medication if surgery may be needed'],
    animation: <FractureAnim />,
  },
  {
    id: 'burns',
    title: 'Burns',
    amharic: 'ቃጠሎ',
    urgency: 'High',
    icon: <BurnsIcon />,
    overview: 'Burns are classified by depth: 1st degree (superficial — redness), 2nd degree (partial thickness — blisters), 3rd degree (full thickness — white/charred, no pain). The Rule of Nines estimates total body surface area (TBSA) affected. Burns >15% TBSA in adults require hospitalization.',
    keyFacts: ['Cool (not cold) water prevents burn progression', 'Cooling must start within 20 minutes to be effective', 'Chemical burns need 20–30 minutes of continuous flushing', 'Do not use ice — it causes vasoconstriction and worsens injury'],
    steps: [
      { title: 'Remove from heat source safely', detail: 'Move person away from fire/heat. Turn off electricity before touching electrical burn victims. Do NOT remove clothing fused to skin.' },
      { title: 'Cool the burn immediately', detail: 'Run cool (15–25°C) water over the burned area for 20 minutes. This reduces pain, limits depth of burn, and prevents progression. Start within 3 minutes for best effect.' },
      { title: 'Remove jewelry and tight items', detail: 'Remove rings, watches, bracelets, and belts near the burned area BEFORE swelling begins. Once swelling starts, removal becomes difficult and dangerous.' },
      { title: 'Do NOT apply home remedies', detail: 'No butter, toothpaste, honey, egg white, flour, or ice. These trap heat, introduce bacteria, and worsen outcomes.' },
      { title: 'Cover the burn loosely', detail: 'Use a sterile non-stick dressing, cling film (first choice — non-adherent, transparent, maintains moisture), or a clean plastic bag for hands/feet. Do not wrap tightly — leave room for swelling.' },
      { title: 'Give pain relief', detail: 'Over-the-counter ibuprofen or paracetamol for minor burns. Do not puncture blisters — they protect against infection.' },
      { title: 'Keep the person warm', detail: 'While cooling the burn, keep the rest of the body warm to prevent hypothermia — a major risk especially in children and large burns.' },
      { title: 'Seek emergency care', detail: 'Call 907 for: burns >palm-size, 3rd degree burns, face/hands/feet/genitals/joints, chemical or electrical burns, burns with breathing difficulty, or any burn in children under 5.' },
    ],
    doNot: ['Do not use ice or ice water', 'Do not apply butter, oil, toothpaste, or cream', 'Do not break blisters', 'Do not wrap tightly or use fluffy cotton'],
    animation: <BurnsAnim />,
  },
  {
    id: 'sprains',
    title: 'Sprains',
    amharic: 'ጅማት ጭማቂ',
    urgency: 'Moderate',
    icon: <SprainsIcon />,
    overview: 'A sprain is a stretch or tear of a ligament (bone-to-bone connective tissue), most commonly at the ankle, knee, or wrist. Grade I is mild stretching; Grade II is partial tearing; Grade III is complete rupture requiring medical/surgical intervention. Apply the RICE protocol within the first 48 hours.',
    keyFacts: ['Ankle sprains account for 25% of all sports injuries', 'RICE protocol most effective in first 48 hours', 'NSAIDs reduce inflammation and pain', 'Grade III sprains may require MRI and surgical repair'],
    steps: [
      { title: 'Stop activity and Rest', detail: 'Stop the activity immediately. Avoid weight-bearing on the injured joint. Use crutches if the ankle or knee is involved and walking is painful.' },
      { title: 'Apply Ice (Cold Therapy)', detail: 'Apply an ice pack or bag of frozen vegetables wrapped in a thin cloth. Apply for 20 minutes every 2 hours for the first 48–72 hours. Never apply ice directly to skin — causes frostbite.' },
      { title: 'Compress the injury', detail: 'Wrap with an elastic (crepe) bandage starting below the injury, overlapping 50%, and ending above. Firm but NOT tight. Remove if numbness, tingling, or color change occurs.' },
      { title: 'Elevate above heart level', detail: 'Prop the injured limb on pillows so it is above the level of the heart. Do this as much as possible for the first 24–48 hours, including during sleep.' },
      { title: 'Take anti-inflammatory medication', detail: 'Ibuprofen (400–600 mg every 6–8 hours with food) reduces both pain and inflammation. Paracetamol addresses pain only. Follow package directions.' },
      { title: 'Assess severity', detail: 'Grade I: mild pain, minimal swelling, normal movement. Grade II: moderate pain, significant swelling, limited movement. Grade III: severe pain, marked swelling, instability — seek emergency care.' },
      { title: 'Gentle mobilization after 48 hours', detail: 'After acute phase (48 hours), begin gentle range-of-motion exercises within pain-free range. Early mobility prevents stiffness and speeds recovery.' },
      { title: 'Seek medical care if needed', detail: 'Go to hospital if: unable to bear weight, significant swelling/bruising, deformity, symptoms do not improve in 48 hours, or mechanism of injury was severe. X-ray rules out fracture (Ottawa Rules).' },
    ],
    doNot: ['Do not apply heat in the first 48 hours', 'Do not massage the injured area acutely', 'Do not apply ice directly to skin', 'Do not "walk it off" if there is significant pain'],
    animation: <SprainsAnim />,
  },
];

const URGENCY_COLOR: Record<string, string> = {
  Critical: 'bg-red-100 text-red-700',
  High: 'bg-orange-100 text-orange-700',
  Moderate: 'bg-amber-100 text-amber-700',
};

export function FirstAid() {
  const [selected, setSelected] = useState<string | null>(null);
  const [tab, setTab] = useState<'steps' | 'facts' | 'avoid'>('steps');
  const guide = selected ? GUIDES.find(g => g.id === selected) : null;

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Dark green header */}
      <div className="bg-gradient-to-br from-[#0c6e73] to-[#119197] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <div className="inline-flex w-12 h-12 rounded-xl bg-white/10 items-center justify-center mx-auto mb-4">
            <IconHeart size={24} className="text-red-200" />
          </div>
          <h1 className="font-display font-extrabold text-4xl text-white mb-2">First Aid Guides</h1>
          <p className="text-teal-100 text-sm">Step-by-step visual instructions for life-threatening emergencies</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {!guide ? (
          <>
            <p className="text-center text-gray-400 text-sm mb-8">Select an emergency topic to view detailed instructions and visual guides</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {GUIDES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setSelected(g.id); setTab('steps'); }}
                  className="wave-card bg-white border-2 border-[#cceef0] rounded-2xl p-6 text-left hover:border-[#119197] cursor-pointer group transition-colors"
                >
                  <div className="text-[#119197] mb-4 group-hover:text-[#0c6e73] transition-colors">{g.icon}</div>
                  <h3 className="font-display font-extrabold text-gray-900 text-base mb-1">{g.title}</h3>
                  <p className="text-[11px] text-gray-400 mb-3">{g.amharic}</p>
                  <span className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${URGENCY_COLOR[g.urgency]}`}>{g.urgency}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#dc2626] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <IconAlertTriangle size={20} className="shrink-0" />
                <p className="font-semibold text-sm">Always call emergency services first in a life-threatening situation</p>
              </div>
              <a href="tel:907" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#dc2626] font-bold text-sm hover:bg-red-50 transition-colors shrink-0">
                <IconPhone size={15} /> Call 907
              </a>
            </div>
          </>
        ) : (
          <div>
            <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to First Aid Guides
            </button>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Card header */}
              <div className="bg-gradient-to-r from-[#0c6e73] to-[#119197] text-white p-8 flex flex-col sm:flex-row items-start gap-6">
                <div className="text-white/80 shrink-0">{guide.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h2 className="font-display font-extrabold text-2xl">{guide.title}</h2>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20">{guide.urgency}</span>
                  </div>
                  <p className="text-teal-100 text-sm mb-3">{guide.amharic}</p>
                  <p className="text-white/90 text-sm leading-relaxed">{guide.overview}</p>
                </div>
              </div>

              {/* Tab bar */}
              <div className="flex border-b border-gray-100 bg-gray-50">
                {(['steps', 'facts', 'avoid'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-3 text-xs font-semibold transition-colors ${tab === t ? 'text-[#119197] border-b-2 border-[#119197] bg-white' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {t === 'steps' ? 'Step-by-Step' : t === 'facts' ? 'Key Facts' : 'Do NOT Do'}
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8 grid lg:grid-cols-[1fr_auto] gap-8">
                <div>
                  {tab === 'steps' && (
                    <div className="flex flex-col gap-3">
                      {guide.steps.map((s, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#cceef0] transition-colors">
                          <span className="w-7 h-7 rounded-full bg-[#119197] text-white font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <div>
                            <p className="font-display font-bold text-gray-900 text-sm mb-0.5">{s.title}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{s.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === 'facts' && (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {guide.keyFacts.map((f, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-[#fef9f9] border border-red-100 rounded-xl">
                          <span className="w-5 h-5 rounded-full bg-[#119197] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <p className="text-sm text-red-900 leading-relaxed">{f}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === 'avoid' && (
                    <div className="flex flex-col gap-3">
                      {guide.doNot.map((d, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-[#fef9f9] border border-red-100 rounded-xl">
                          <span className="text-[#dc2626] shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                          </span>
                          <p className="text-sm text-red-800 font-medium leading-relaxed">{d}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Animation panel */}
                <div className="lg:w-56 flex flex-col items-center">
                  <h3 className="font-display font-bold text-gray-900 mb-4 text-sm text-center">Visual Guide</h3>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-2">
                    {guide.animation}
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-3 max-w-[200px]">Animated reference only — always defer to professional medical training</p>
                </div>
              </div>

              {/* Emergency footer */}
              <div className="px-6 sm:px-8 py-5 bg-[#e6f7f7]/30 border-t border-[#cceef0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <IconAlertTriangle size={15} className="text-[#dc2626] shrink-0" />
                  <p className="text-sm text-red-700 font-medium">Always call emergency services first in a life-threatening situation</p>
                </div>
                <a href="tel:907" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold transition-colors shrink-0">
                  <IconPhone size={14} /> Call 907
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="py-8" />
    </main>
  );
}
