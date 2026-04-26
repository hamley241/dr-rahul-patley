import React from 'react';
import { SectionHead } from './components.jsx';

const AFFILIATIONS = [
  { name: 'NIMHANS',         place: 'Bengaluru, India',     role: 'MD · Former Assistant Professor' },
  { name: 'Monash Health',   place: 'Melbourne, Australia', role: 'Psychiatrist' },
  { name: 'WHO-SEARO',       place: 'South-East Asia',      role: 'Mental-health technical inputs' },
  { name: 'USAID · JHPIEGO', place: 'Global advisory',      role: 'Addiction & community psychiatry' },
];

export function Affiliations() {
  return (
    <section className="affiliations" aria-label="Training and affiliations">
      <div className="container">
        <div className="aff-eyebrow">
          <span className="rule"></span>
          <span className="label">Trained at · Advisor to</span>
          <span className="rule"></span>
        </div>
        <div className="aff-grid">
          {AFFILIATIONS.map((a, i) => (
            <div className="aff-cell" key={i}>
              <div className="aff-name">{a.name}</div>
              <div className="aff-place">{a.place}</div>
              <div className="aff-role">{a.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  {
    place: 'Bengaluru',
    country: 'India',
    institution: 'NIMHANS',
    role: 'MD (Psychiatry) · Post-doctoral Fellowship · Former Assistant Professor',
    body: 'India\'s premier institute for mental health and neurosciences. Clinical training, teaching, and research at the country\'s national centre — the foundation of his evidence-based practice.',
  },
  {
    place: 'Melbourne',
    country: 'Australia',
    institution: 'Monash Health',
    role: 'Psychiatrist',
    body: 'Clinical experience inside one of Australia\'s leading academic health networks. Exposure to a different healthcare system, multidisciplinary teams, and global standards in psychiatric care.',
  },
  {
    place: 'Hyderabad',
    country: 'India',
    institution: 'Sukoon Health',
    role: 'Consultant Psychiatrist',
    body: 'Current practice — bringing the same standards back home. Outpatient consultations, second opinions, and integrated care for adults across mood, anxiety, ADHD, and addiction conditions.',
  },
];

const ADVISORY = [
  { org: 'WHO-SEARO',  detail: 'Technical inputs on mental-health programmes in South-East Asia.' },
  { org: 'USAID',      detail: 'Collaborator on community-psychiatry and addiction initiatives.' },
  { org: 'JHPIEGO',    detail: 'Global health partner on capacity-building projects.' },
  { org: 'Ministry of Health, GoI', detail: 'Tele-MANAS and the National Action Plan on Climate & Mental Health.' },
];

export function GlobalPerspective() {
  return (
    <section className="global" id="global">
      <div className="container">
        <SectionHead
          eyebrow="Global perspective"
          title="Care shaped by training across <em>two continents</em> and three institutions."
          meta="Why international experience matters: exposure to different healthcare systems, multidisciplinary teams, and current global guidelines — translated into care that's culturally grounded in India."
        />

        <ol className="journey">
          {JOURNEY.map((j, i) => (
            <li className="journey-stop" key={i}>
              <div className="journey-marker" aria-hidden="true">
                <span className="dot"></span>
                <span className="line"></span>
              </div>
              <div className="journey-body">
                <div className="journey-place">
                  <span className="city">{j.place}</span>
                  <span className="country">{j.country}</span>
                </div>
                <div className="journey-inst">{j.institution}</div>
                <div className="journey-role">{j.role}</div>
                <p className="journey-text">{j.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="advisory">
          <div className="advisory-eyebrow">Contributor &amp; advisor to</div>
          <div className="advisory-grid">
            {ADVISORY.map((a, i) => (
              <div className="advisory-cell" key={i}>
                <div className="advisory-org">{a.org}</div>
                <div className="advisory-detail">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
