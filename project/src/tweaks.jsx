// src/tweaks.jsx — theme + density + assessments toggles

function TweaksPanel({ tweaks, setTweaks }) {
  const save = (edits) => {
    const next = { ...tweaks, ...edits };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    } catch(e) {}
  };

  const themes = [
    { k: 'warm', n: 'Warm' },
    { k: 'clinical', n: 'Clinical' },
    { k: 'scholarly', n: 'Scholarly' },
  ];
  const densities = [
    { k: 'comfortable', n: 'Comfort' },
    { k: 'compact', n: 'Compact' },
  ];

  return (
    <div className="tweaks-panel">
      <div className="tw-title">Tweaks</div>

      <h4>Theme</h4>
      <div className="tw-row">
        {themes.map(t => (
          <button key={t.k} className={'tw-chip' + (tweaks.theme===t.k?' active':'')} onClick={() => save({ theme: t.k })}>{t.n}</button>
        ))}
      </div>

      <h4>Density</h4>
      <div className="tw-row" style={{gridTemplateColumns:'1fr 1fr'}}>
        {densities.map(d => (
          <button key={d.k} className={'tw-chip' + (tweaks.density===d.k?' active':'')} onClick={() => save({ density: d.k })}>{d.n}</button>
        ))}
      </div>

      <h4>Sections</h4>
      <div className="tw-toggle">
        <span>Self-assessments</span>
        <button className={'tw-switch' + (tweaks.showAssessments?' on':'')} onClick={() => save({ showAssessments: !tweaks.showAssessments })} aria-label="toggle assessments"/>
      </div>
      <div className="tw-toggle">
        <span>Breathing exercise</span>
        <button className={'tw-switch' + (tweaks.showBreathing?' on':'')} onClick={() => save({ showBreathing: !tweaks.showBreathing })} aria-label="toggle breathing"/>
      </div>
    </div>
  );
}

Object.assign(window, { TweaksPanel });
