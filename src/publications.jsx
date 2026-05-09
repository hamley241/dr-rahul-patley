import React, { useEffect, useMemo, useState } from 'react';
import { I_Arrow, I_Close } from './icons.jsx';
import { SectionHead } from './components.jsx';
import { DATA_publications_full } from './publications-data.js';

const TAG_LABELS = {
  'community-psychiatry': 'Community Psychiatry',
  'tele-mental-health': 'Tele-mental Health',
  'primary-care': 'Primary Care',
  'mental-health': 'Mental Health',
  'capacity-building': 'Capacity Building',
  'training': 'Training',
  'covid-19': 'COVID-19',
  'epidemiology': 'Epidemiology',
  'asha': 'ASHA',
  'community-health-workers': 'Community Health Workers',
  'schizophrenia': 'Schizophrenia',
  'suicide-prevention': 'Suicide Prevention',
  'geriatric-psychiatry': 'Geriatric Psychiatry',
  'addiction-psychiatry': 'Addiction',
  'digital-health': 'Digital Health',
  'implementation-science': 'Implementation',
  'clinical-trial': 'Clinical Trial',
  'tele-manas': 'Tele-MANAS',
  'health-economics': 'Health Economics',
  'prison-mental-health': 'Prison Mental Health',
  'youth-mental-health': 'Youth Mental Health',
  'social-anxiety': 'Social Anxiety',
  'ptsd': 'PTSD',
  'climate-change': 'Climate & Mental Health',
  'medico-legal': 'Medico-legal',
  'public-private-partnerships': 'Public-Private Partnerships',
  'review': 'Review',
  'frameworks': 'Frameworks',
};
const prettyTag = (t) => TAG_LABELS[t] || t.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const EXCLUDED_FILTER_TAGS = new Set(['article','book','chapter','poster','conference-paper','preprint']);

const HIGHLIGHT_IDS = [
  '2026-low-treatment-gap-for-schizophrenia-in-rural-india-a-step-toward-taluk-mental-health-program',
  '2025-provision-of-mental-health-care-by-the-community-health-officers-chos-through-collaborative-video-consultations-a-d',
  '2024-transforming-mental-healthcare-a-crude-return-on-investment-analysis-of-the-chhattisgarh-community-mental-healthcar',
  '2023-nationally-representative-epidemiological-study-of-social-anxiety-disorder-from-india',
  '2023-training-manual-on-mental-neurological-and-substance-use-mns-disorders-care-for-community-health-officer-at-ayushma',
  '2020-implementing-national-mental-health-program-local-leaders-perspectives-and-lessons-for-national-action',
];

export function Research() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const pubs = DATA_publications_full;
  const highlights = HIGHLIGHT_IDS.map(id => pubs.find(p => p.id === id)).filter(Boolean);

  const bookCount = pubs.filter(p => p.type === 'Book').length;
  const articleCount = pubs.filter(p => p.type === 'Article').length;

  return (
    <section id="research" style={{background: 'var(--bg-alt)'}}>
      <div className="container">
        <SectionHead
          eyebrow="Research & Publications"
          title={`<em>${pubs.length} publications</em> across articles, books, chapters and conference papers.`}
          meta={`${articleCount} peer-reviewed articles, ${bookCount} books & training manuals, plus chapters and conference work. Spanning community psychiatry, tele-mental health, policy, and epidemiology.`}
        />
        <div className="pub-list">
          {highlights.map((p, i) => (
            <a className="pub" key={i} href={p.link} target="_blank" rel="noopener">
              <div className="pub-year">{p.year}</div>
              <div>
                <div className="pub-title">{p.title}</div>
                <div className="pub-journal">{p.tags.filter(t => !EXCLUDED_FILTER_TAGS.has(t)).slice(0, 3).map(prettyTag).join(' · ')}</div>
              </div>
              <div className="pub-venue">{p.type} ↗</div>
            </a>
          ))}
        </div>
        <div style={{borderTop:'1px solid var(--line)', paddingTop: '32px', marginTop: '32px', display:'flex', gap: '14px', flexWrap:'wrap'}}>
          <button className="btn primary" onClick={() => setArchiveOpen(true)}>
            Browse all {pubs.length} publications <I_Arrow/>
          </button>
          <a href="https://www.researchgate.net/profile/Rahul-Patley" target="_blank" rel="noopener" className="btn ghost">View on ResearchGate ↗</a>
          <a href="https://orcid.org/0000-0003-2700-7854" target="_blank" rel="noopener" className="btn ghost">ORCID 0000-0003-2700-7854 ↗</a>
        </div>
      </div>
      {archiveOpen && <PublicationsArchive onClose={() => setArchiveOpen(false)}/>}
    </section>
  );
}

function PublicationsArchive({ onClose }) {
  const pubs = DATA_publications_full;
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [activeType, setActiveType] = useState('');
  const [activeYear, setActiveYear] = useState('');

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const topTags = useMemo(() => {
    const counts = {};
    pubs.forEach(p => p.tags.forEach(t => {
      if (EXCLUDED_FILTER_TAGS.has(t)) return;
      counts[t] = (counts[t] || 0) + 1;
    }));
    return Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0, 10).map(([t]) => t);
  }, [pubs]);

  const years = useMemo(
    () => [...new Set(pubs.map(p => p.year))].sort((a,b) => b-a),
    [pubs]
  );
  const types = useMemo(
    () => [...new Set(pubs.map(p => p.type))],
    [pubs]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pubs
      .filter(p => {
        if (activeType && p.type !== activeType) return false;
        if (activeYear && p.year !== Number(activeYear)) return false;
        if (activeTags.length && !activeTags.every(t => p.tags.includes(t))) return false;
        if (q && !p.title.toLowerCase().includes(q) && !p.tags.some(t => t.toLowerCase().includes(q))) return false;
        return true;
      })
      .sort((a,b) => b.year - a.year || a.title.localeCompare(b.title));
  }, [pubs, query, activeTags, activeType, activeYear]);

  const toggleTag = (t) => setActiveTags(activeTags.includes(t) ? activeTags.filter(x => x!==t) : [...activeTags, t]);
  const reset = () => { setQuery(''); setActiveTags([]); setActiveType(''); setActiveYear(''); };

  const grouped = useMemo(() => {
    const by = {};
    filtered.forEach(p => { (by[p.year] = by[p.year] || []).push(p); });
    return Object.entries(by).sort((a,b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  return (
    <div className="modal-backdrop archive-backdrop" onClick={onClose}>
      <div className="archive" onClick={(e) => e.stopPropagation()}>
        <div className="archive-head">
          <div>
            <h3>All publications</h3>
            <div className="sub">{filtered.length} of {pubs.length} · Sorted newest first</div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close"><I_Close/></button>
        </div>

        <div className="archive-filters">
          <input
            className="archive-search"
            placeholder="Search title or topic…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <div className="archive-selects">
            <select value={activeType} onChange={e => setActiveType(e.target.value)}>
              <option value="">All types</option>
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={activeYear} onChange={e => setActiveYear(e.target.value)}>
              <option value="">All years</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            {(query || activeTags.length || activeType || activeYear) && (
              <button className="archive-reset" onClick={reset}>Clear</button>
            )}
          </div>
          <div className="archive-tags">
            {topTags.map(t => (
              <button
                key={t}
                className={'archive-tag' + (activeTags.includes(t) ? ' active' : '')}
                onClick={() => toggleTag(t)}
              >{prettyTag(t)}</button>
            ))}
          </div>
        </div>

        <div className="archive-body">
          {filtered.length === 0 ? (
            <div className="archive-empty">
              <div className="archive-empty-t">No publications match these filters.</div>
              <button className="btn ghost" onClick={reset} style={{marginTop: '14px'}}>Clear filters</button>
            </div>
          ) : (
            grouped.map(([year, items]) => (
              <div key={year} className="archive-group">
                <div className="archive-year">{year}</div>
                <div>
                  {items.map(p => (
                    <a key={p.id} href={p.link} target="_blank" rel="noopener" className="archive-item">
                      <div className="archive-item-type">{p.type}</div>
                      <div className="archive-item-body">
                        <div className="archive-item-title">{p.title}</div>
                        <div className="archive-item-tags">
                          {p.tags.filter(t => !EXCLUDED_FILTER_TAGS.has(t)).slice(0, 4).map(t => (
                            <span key={t} className="archive-item-tag">{prettyTag(t)}</span>
                          ))}
                        </div>
                      </div>
                      <div className="archive-item-arrow">↗</div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
