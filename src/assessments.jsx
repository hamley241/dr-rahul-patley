import React, { useEffect, useState } from 'react';
import { I_Arrow, I_Close } from './icons.jsx';

const ASRS_QUESTIONS = [
  'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
  'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
  'How often do you have problems remembering appointments or obligations?',
  'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
  'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
  'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
];
const ASRS_OPTIONS = [
  { label: 'Never', v: 0, asrs: [0,0,0,0,0,0] },
  { label: 'Rarely', v: 1, asrs: [0,0,0,0,0,0] },
  { label: 'Sometimes', v: 2, asrs: [0,0,1,1,0,0] },
  { label: 'Often', v: 3, asrs: [1,1,1,1,1,1] },
  { label: 'Very Often', v: 4, asrs: [1,1,1,1,1,1] },
];

const PHQ9 = [
  'Little interest or pleasure in doing things',
  'Feeling down, depressed, or hopeless',
  'Trouble falling or staying asleep, or sleeping too much',
  'Feeling tired or having little energy',
  'Poor appetite or overeating',
  'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
  'Trouble concentrating on things, such as reading or watching television',
  'Moving or speaking so slowly that other people could have noticed — or being so restless that you have been moving around a lot more than usual',
  'Thoughts that you would be better off dead or of hurting yourself in some way',
];

const GAD7 = [
  'Feeling nervous, anxious, or on edge',
  'Not being able to stop or control worrying',
  'Worrying too much about different things',
  'Trouble relaxing',
  'Being so restless that it\'s hard to sit still',
  'Becoming easily annoyed or irritable',
  'Feeling afraid as if something awful might happen',
];

const FOURPT = [
  { label: 'Not at all', v: 0 },
  { label: 'Several days', v: 1 },
  { label: 'More than half the days', v: 2 },
  { label: 'Nearly every day', v: 3 },
];

function scoreASRS(answers) {
  let flagged = 0;
  answers.forEach((a, i) => {
    if (a == null) return;
    if (ASRS_OPTIONS[a].asrs[i]) flagged++;
  });
  let severity, interp;
  if (flagged >= 4) {
    severity = 'Symptoms highly consistent with ADHD';
    interp = 'Four or more of these six questions crossed the clinical threshold. This result is highly suggestive of adult ADHD and warrants a formal evaluation by a psychiatrist experienced with adult ADHD assessment.';
  } else {
    severity = 'Below clinical screening threshold';
    interp = 'Fewer than four items crossed the clinical threshold on this screener. This does not rule out ADHD — if you feel symptoms significantly affect your daily functioning, consider booking a full assessment.';
  }
  return { score: flagged, max: 6, severity, interp };
}

function scorePHQ9(answers) {
  const s = answers.reduce((a, b) => a + (b ?? 0), 0);
  let severity, interp;
  if (s <= 4) { severity = 'Minimal depression'; interp = 'Your score suggests minimal or no symptoms of depression.'; }
  else if (s <= 9) { severity = 'Mild depression'; interp = 'Mild depressive symptoms. Watchful waiting and lifestyle changes are often appropriate; consider consulting a clinician if symptoms persist.'; }
  else if (s <= 14) { severity = 'Moderate depression'; interp = 'Moderate depression. Clinical evaluation is recommended — treatment (therapy and/or medication) often helps significantly.'; }
  else if (s <= 19) { severity = 'Moderately severe depression'; interp = 'Moderately severe depression. A psychiatric evaluation is strongly recommended; active treatment is usually indicated.'; }
  else { severity = 'Severe depression'; interp = 'Severe depression. Please seek psychiatric care promptly. If you are having thoughts of self-harm, contact emergency services or a crisis helpline immediately.'; }
  if (answers[8] && answers[8] > 0) interp += ' You indicated some thoughts of self-harm — please speak to a professional soon, even if the total score is low.';
  return { score: s, max: 27, severity, interp };
}

function scoreGAD7(answers) {
  const s = answers.reduce((a, b) => a + (b ?? 0), 0);
  let severity, interp;
  if (s <= 4) { severity = 'Minimal anxiety'; interp = 'Your score suggests minimal symptoms of anxiety.'; }
  else if (s <= 9) { severity = 'Mild anxiety'; interp = 'Mild anxiety. Lifestyle work, stress management and watchful waiting are often appropriate.'; }
  else if (s <= 14) { severity = 'Moderate anxiety'; interp = 'Moderate anxiety. Clinical evaluation is recommended — both therapy and medication can help.'; }
  else { severity = 'Severe anxiety'; interp = 'Severe anxiety. A psychiatric evaluation is strongly recommended — effective treatments are available.'; }
  return { score: s, max: 21, severity, interp };
}

export const ASSESS = {
  adhd: { name: 'ADHD Screener', full: 'Adult ADHD Self-Report Scale v1.1 (ASRS)', source: 'WHO · Kessler et al., 2005', questions: ASRS_QUESTIONS, options: ASRS_OPTIONS, scorer: scoreASRS, est: '2 min' },
  phq9: { name: 'Depression Screener', full: 'Patient Health Questionnaire (PHQ-9)', source: 'Kroenke et al., 2001 · Public Domain', questions: PHQ9, options: FOURPT, scorer: scorePHQ9, est: '3 min' },
  gad7: { name: 'Anxiety Screener', full: 'Generalized Anxiety Disorder Scale (GAD-7)', source: 'Spitzer et al., 2006 · Public Domain', questions: GAD7, options: FOURPT, scorer: scoreGAD7, est: '2 min' },
};

export function AssessmentModal({ kind, onClose }) {
  const cfg = ASSESS[kind];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => new Array(cfg.questions.length).fill(null));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);

  const select = (v) => {
    const next = [...answers]; next[step] = v; setAnswers(next);
    setTimeout(() => {
      if (step < cfg.questions.length - 1) setStep(step + 1);
      else setDone(true);
    }, 200);
  };

  const result = done ? cfg.scorer(answers) : null;
  const progress = done ? 100 : Math.round(((step + (answers[step] != null ? 1 : 0)) / cfg.questions.length) * 100);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div>
            <h3>{cfg.name}</h3>
            <div className="sub">{cfg.full}</div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close"><I_Close/></button>
        </div>

        <div className="progress"><div style={{ width: progress + '%' }}/></div>

        {!done ? (
          <>
            <div className="question">
              <div className="q-num">Question {step + 1} of {cfg.questions.length}</div>
              <div className="q-text">Over the past 2 weeks, how often have you been bothered by: <em style={{color:'var(--accent)', fontStyle:'italic'}}>{cfg.questions[step]}</em></div>
              <div className="options">
                {cfg.options.map((o, i) => (
                  <button key={i} className={'option' + (answers[step] === i ? ' selected' : '')} onClick={() => select(i)}>
                    <span>{o.label}</span>
                    <span className="dot"/>
                  </button>
                ))}
              </div>
            </div>
            <div className="quiz-foot">
              <button className="btn ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} style={{opacity: step === 0 ? .4 : 1}}>← Previous</button>
              <span className="mono" style={{color:'var(--ink-mute)'}}>{cfg.source}</span>
            </div>
          </>
        ) : (
          <>
            <div className="result-hdr">
              <div className="score-lbl">Your score</div>
              <div className="score">{result.score} <span style={{fontSize:'.5em', color:'var(--ink-mute)'}}>/ {result.max}</span></div>
              <div className="severity">{result.severity}</div>
            </div>
            <div className="result-body">
              <p>{result.interp}</p>
              <p style={{fontSize:'12.5px', color:'var(--ink-mute)', padding:'12px 14px', background:'var(--bg-alt)', borderRadius:'8px', borderLeft:'3px solid var(--accent)'}}>
                <strong>This is a screening tool, not a diagnosis.</strong> Results should be discussed with a qualified psychiatrist. Do not self-medicate based on this score.
              </p>
              <div className="quiz-foot">
                <button className="btn ghost" onClick={() => { setStep(0); setAnswers(new Array(cfg.questions.length).fill(null)); setDone(false); }}>Retake</button>
                <a href="#book" className="btn accent" onClick={onClose}>Book consultation <I_Arrow/></a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
