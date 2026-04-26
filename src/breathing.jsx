import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { I_Arrow, I_Close } from './icons.jsx';
import { SectionHead } from './components.jsx';

const BREATHING_REFERENCES = [
  { authors: 'Fincham GW, et al.', year: 2023, title: 'Effect of breathwork on stress and mental health: a meta-analysis of randomised-controlled trials.', journal: 'Scientific Reports' },
  { authors: 'Morgan SP, et al.', year: 2024, title: 'A systematic review of breathing exercise interventions: an integrative complementary approach for anxiety and stress in adult populations.', journal: 'Journal of Holistic Nursing' },
  { authors: 'Bentley TGK, et al.', year: 2023, title: 'Breathing practices for stress and anxiety reduction: conceptual framework of implementation guidelines based on a systematic review.', journal: 'Brain Sciences' },
  { authors: 'Hopper SI, et al.', year: 2019, title: 'Effectiveness of diaphragmatic breathing for reducing physiological and psychological stress in adults: a quantitative systematic review.', journal: 'JBI Database of Systematic Reviews' },
  { authors: 'Birdee G, et al.', year: 2023, title: 'Slow breathing for reducing stress: the effect of extending exhale.', journal: 'Complementary Therapies in Medicine' },
  { authors: 'Korkmaz A, et al.', year: 2024, title: 'Sudarshan Kriya yoga breathing and a meditation program for burnout among physicians: a randomized clinical trial.', journal: 'JAMA Network Open' },
];

const BREATHING_TECHNIQUES = [
  { name: 'Diaphragmatic (belly) breathing', body: 'One of the best-studied techniques. Reviews suggest it can reduce stress, anxiety symptoms and physical tension by slowing breathing and improving efficiency. Sit comfortably, let your belly rise on each inhale while the chest stays relaxed, exhale slowly through pursed lips. Practice 5–10 minutes.' },
  { name: 'Paced slow breathing (5–6 breaths / min)', body: 'The most evidence-supported pattern. Meta-analyses link it to lower anxiety, lower stress, and favourable physiologic changes. Inhale ~4–5 s, exhale ~5–6 s, smooth and unforced. The goal is slower and easier — not the deepest possible breath.' },
  { name: 'Extended exhale (4-in / 6-out)', body: 'A slightly longer exhale feels naturally calming and is easy to remember. A randomised trial found slow breathing reduced psychological stress — though the longer exhale was not clearly superior to equal-ratio slow breathing. The slow pace itself seems to be the active ingredient.' },
  { name: 'Structured breathwork programmes', body: 'Formal practices taught through clinicians or courses. A 2023 meta-analysis found breathwork interventions improved stress, anxiety and depressive symptoms. A 2024 RCT in physicians found a structured programme improved stress and anxiety vs. control. Usually introduced after simpler techniques.' },
];

function BreathingEvidenceModal({ onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 720 }}>
        <div className="modal-top">
          <div>
            <h3>The evidence behind breathing</h3>
            <div className="sub">Why we offer these techniques, and what the research says.</div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close"><I_Close/></button>
        </div>

        <p style={{fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '20px 0 24px'}}>
          Breathing exercises are not a cure for anxiety disorders, but they are a practical, low-risk tool that helps many people feel calmer in the moment and more regulated over time. Reviews of clinical studies suggest that structured breathing can reduce self-reported stress and anxiety — especially when practiced regularly rather than only during crises. The strongest evidence is for slow, controlled breathing and diaphragmatic breathing.
        </p>

        <h4 style={{fontFamily:'var(--ff-body)', fontSize:'11px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--ink-mute)', fontWeight:600, margin:'0 0 14px'}}>Techniques with evidence</h4>
        <div style={{display:'flex', flexDirection:'column', gap:'16px', marginBottom:'32px'}}>
          {BREATHING_TECHNIQUES.map((t, i) => (
            <div key={i} style={{padding:'16px 18px', background:'var(--bg-alt)', borderRadius:'var(--radius-md)', borderLeft:'3px solid var(--accent)'}}>
              <div style={{fontFamily:'var(--ff-display)', fontSize:'17px', color:'var(--ink)', marginBottom:'6px'}}>{t.name}</div>
              <div style={{fontSize:'13.5px', color:'var(--ink-soft)', lineHeight:1.55}}>{t.body}</div>
            </div>
          ))}
        </div>

        <h4 style={{fontFamily:'var(--ff-body)', fontSize:'11px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--ink-mute)', fontWeight:600, margin:'0 0 14px'}}>Safety</h4>
        <p style={{fontSize: '13.5px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 24px'}}>
          Breathing exercises are generally safe, but some people may feel dizzy or more aware of bodily sensations when they first start — stop, breathe normally, and try again gently. If breathing exercises reliably worsen panic, discuss with a clinician. Seek urgent care for chest pain, severe shortness of breath, or fainting. Contact a mental health professional if anxiety is frequent, worsening, affecting sleep or work, or accompanied by hopelessness or thoughts of self-harm.
        </p>

        <h4 style={{fontFamily:'var(--ff-body)', fontSize:'11px', textTransform:'uppercase', letterSpacing:'.1em', color:'var(--ink-mute)', fontWeight:600, margin:'0 0 14px'}}>Selected references</h4>
        <ol style={{margin:0, padding:'0 0 0 20px', display:'flex', flexDirection:'column', gap:'10px'}}>
          {BREATHING_REFERENCES.map((r, i) => (
            <li key={i} style={{fontSize:'12.5px', color:'var(--ink-soft)', lineHeight:1.5}}>
              <span style={{color:'var(--ink)'}}>{r.authors}</span> ({r.year}). {r.title} <em style={{color:'var(--ink-mute)'}}>{r.journal}</em>.
            </li>
          ))}
        </ol>

        <div style={{marginTop:'28px', paddingTop:'20px', borderTop:'1px solid var(--line)', fontSize:'12px', color:'var(--ink-mute)'}}>
          These exercises are supportive tools, not stand-alone treatment for serious psychiatric symptoms. If you need care, <a href="#book" onClick={onClose} style={{color:'var(--accent)'}}>book a consultation</a>.
        </div>
      </div>
    </div>
  );
}

const BREATHING_MODES = [
  {
    key: 'box',
    name: 'Box',
    sub: '4 · 4 · 4 · 4',
    desc: 'Steady. Used by clinicians and military for acute stress.',
    phases: [
      { label: 'Inhale', seconds: 4 },
      { label: 'Hold',   seconds: 4 },
      { label: 'Exhale', seconds: 4 },
      { label: 'Hold',   seconds: 4 },
    ],
  },
  {
    key: 'resonant',
    name: 'Resonant',
    sub: '5.5 · 5.5',
    desc: 'Six breaths per minute. Linked with heart-rate variability gains.',
    phases: [
      { label: 'Inhale', seconds: 5.5 },
      { label: 'Exhale', seconds: 5.5 },
    ],
  },
  {
    key: 'calming',
    name: '4-7-8',
    sub: '4 · 7 · 8',
    desc: 'Extended exhale to activate the parasympathetic response.',
    phases: [
      { label: 'Inhale', seconds: 4 },
      { label: 'Hold',   seconds: 7 },
      { label: 'Exhale', seconds: 8 },
    ],
  },
];

// Smooth easing so the ring swells naturally instead of jumping at phase boundaries.
const easeInOut = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export function Breathing({ enabled = true }) {
  if (!enabled) return null;

  const [modeKey, setModeKey] = useState('box');
  const [running, setRunning] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [showEvidence, setShowEvidence] = useState(false);

  const mode = BREATHING_MODES.find(m => m.key === modeKey);
  const phase = mode.phases[phaseIdx];

  const reducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const ringRef = useRef(null);
  const haloRef = useRef(null);
  const modeRef = useRef(mode);
  const phaseIdxRef = useRef(phaseIdx);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { phaseIdxRef.current = phaseIdx; }, [phaseIdx]);

  const applyScale = useCallback((s) => {
    if (ringRef.current) ringRef.current.style.transform = `scale(${s})`;
    if (haloRef.current) haloRef.current.style.transform = `scale(${s})`;
  }, []);

  useEffect(() => {
    if (!running) {
      applyScale(reducedMotion ? 0.86 : 0.72);
      return;
    }
    let rafId;
    let phaseStart = performance.now();
    let lastCountdown = -1;

    const tick = (now) => {
      const m = modeRef.current;
      const idx = phaseIdxRef.current;
      const ph = m.phases[idx];
      const elapsed = (now - phaseStart) / 1000;

      if (elapsed >= ph.seconds) {
        const nextIdx = (idx + 1) % m.phases.length;
        phaseIdxRef.current = nextIdx;
        setPhaseIdx(nextIdx);
        if (nextIdx === 0) setCycles(c => c + 1);
        phaseStart = now;
        rafId = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / ph.seconds, 1);
      const eased = easeInOut(progress);
      const label = ph.label.toLowerCase();
      let s = 0.72;
      if (label === 'inhale') s = 0.72 + 0.28 * eased;
      else if (label === 'exhale') s = 1.0 - 0.28 * eased;
      else if (label === 'hold') {
        const prev = m.phases[(idx - 1 + m.phases.length) % m.phases.length].label.toLowerCase();
        s = prev === 'inhale' ? 1.0 : 0.72;
      }
      if (reducedMotion) s = 0.86;
      applyScale(s);

      const cd = Math.max(1, Math.ceil(ph.seconds - elapsed));
      if (cd !== lastCountdown) {
        lastCountdown = cd;
        setCountdown(cd);
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [running, reducedMotion, applyScale]);

  useEffect(() => {
    setPhaseIdx(0);
    phaseIdxRef.current = 0;
    setCycles(0);
    applyScale(reducedMotion ? 0.86 : 0.72);
  }, [modeKey, reducedMotion, applyScale]);

  const start = () => {
    setPhaseIdx(0);
    phaseIdxRef.current = 0;
    setCycles(0);
    setCountdown(Math.ceil(mode.phases[0].seconds));
    setRunning(true);
  };
  const stop = () => setRunning(false);

  return (
    <section id="breathe">
      <div className="container">
        <SectionHead
          eyebrow="A two-minute practice"
          title="Breathe with us — a <em>grounding exercise</em> you can try right now."
          meta="A brief tool, not therapy. Most people feel the difference after 4–5 cycles. Works best with your eyes softly closed and feet flat on the floor."
        />

        <div className="breath-wrap">
          <div className="breath-stage" aria-live="polite">
            <div className="breath-ring-halo" ref={haloRef} style={{ transform: `scale(${reducedMotion ? 0.86 : 0.72})` }}/>
            <div className="breath-ring" ref={ringRef} style={{ transform: `scale(${reducedMotion ? 0.86 : 0.72})` }}/>
            <div className="breath-center">
              <div className="breath-phase">{running ? phase.label : 'Ready'}</div>
              <div className="breath-count">{running ? countdown : mode.sub}</div>
              <div className="breath-cycle">{running ? `Breath ${cycles + 1}` : 'Press start when ready'}</div>
            </div>
          </div>

          <div className="breath-controls">
            <div className="breath-modes" role="tablist">
              {BREATHING_MODES.map(m => (
                <button
                  key={m.key}
                  role="tab"
                  aria-selected={modeKey === m.key}
                  className={'breath-mode' + (modeKey === m.key ? ' active' : '')}
                  onClick={() => setModeKey(m.key)}
                >
                  <span className="bm-name">{m.name}</span>
                  <span className="bm-sub">{m.sub}</span>
                </button>
              ))}
            </div>

            <p className="breath-desc">{mode.desc}</p>

            <div className="breath-actions">
              {!running ? (
                <button className="btn accent" onClick={start}>Begin →</button>
              ) : (
                <button className="btn ghost" onClick={stop}>Pause</button>
              )}
              {running && <span className="breath-tick">{cycles} completed</span>}
            </div>

            <div className="breath-note">
              If breathing exercises make you feel dizzy or anxious, stop and breathe normally. Persistent anxiety is best addressed in consultation — <a href="#book">book a session</a>.
            </div>

            <button className="breath-evidence-link" onClick={() => setShowEvidence(true)}>
              <span>Evidence & techniques — what the research says</span>
              <I_Arrow size={14}/>
            </button>
          </div>
        </div>
      </div>
      {showEvidence && <BreathingEvidenceModal onClose={() => setShowEvidence(false)}/>}
    </section>
  );
}
