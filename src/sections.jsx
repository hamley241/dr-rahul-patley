import React, { useEffect, useState } from 'react';
import {
  DATA_education,
  DATA_experience,
  DATA_faqs,
  DATA_navLinks,
  DATA_policy,
  DATA_press,
  DATA_services,
  DATA_stats,
  DATA_testimonials,
} from './data.js';
import { I_Arrow, I_Phone, I_Plus, I_WhatsApp } from './icons.jsx';
import { Chip, SectionHead } from './components.jsx';
import { ASSESS, AssessmentModal } from './assessments.jsx';

// Vite resolves BASE_URL to '/dr-rahul-patley/' under GitHub Pages or '/' locally,
// so root-relative asset URLs work in both environments.
const portrait = `${import.meta.env.BASE_URL}assets/dr-rahul-portrait.jpg`;

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot" /> Accepting new patients · Sukoon Health, Hyderabad
            </div>
            <h1>
              Evidence-based psychiatric care for <em>depression, anxiety</em> and complex conditions.
            </h1>
            <p className="hero-lede">Dr. Rahul Patley is an internationally trained psychiatrist with roots in two of the world’s leading institutions—Monash Health, Melbourne, and NIMHANS, Bengaluru. A former A/Professor of Psychiatry, he brings together deep clinical expertise and academic excellence with a compassionate, human-centered approach. His work is grounded not just in science, but in a sincere understanding of the challenges people face every day.


He works closely with individuals facing challenges like depression, anxiety, OCD, addiction, and adult ADHD—focusing not just on diagnosis, but on helping you feel better and regain control of your life.


Every consultation offers a safe, confidential space grounded in evidence-based, compassionate, and empathic care—where you can speak openly and feel truly understood, without judgment</p>
            <div className="hero-ctas">
              <a href="#book" className="btn primary">Book Appointment <I_Arrow /></a>
              <a href="#assessments" className="btn ghost">Take a self-check</a>
            </div>
            <div className="hero-chips">
              <Chip>Depression</Chip>
              <Chip>Anxiety</Chip>
              <Chip>Adult ADHD</Chip>
              <Chip>OCD</Chip>
              <Chip>Addiction</Chip>
              <Chip>Schizophrenia</Chip>
              <Chip>Bipolar</Chip>
              <Chip>Sleep</Chip>
            </div>
          </div>
          <div className="portrait">
            <img src={portrait} alt="Dr. Rahul Patley — Consultant Psychiatrist" />
            <div className="hero-stats">
              <div className="num">10+</div>
              <div className="lbl">Years of practice</div>
            </div>
            <div className="portrait-tag">
              <div className="big">MD</div>
              <div className="small">NIMHANS, Bengaluru<br />Monash Health, Melbourne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
          eyebrow="About"
          title="A decade at the intersection of <em>clinical care</em>, research and policy."
          meta={<>MBBS · Osmania Medical College<br />MD Psychiatry · NIMHANS<br />Psychiatrist · Monash Health, Australia</>}
        />

        <div className="about-grid">
          <div className="about-body">
            <p className="lead">
              “My approach is simple — listen carefully, investigate thoroughly, and prescribe only what the evidence supports.”
            </p>
            <p>
              Dr. Rahul Patley is a consultant psychiatrist with a strong foundation in academic medicine and clinical practice. He previously served as <strong>Assistant Professor of Psychiatry at NIMHANS</strong>, Bengaluru — India's premier institute for mental health and neurosciences — where he was actively involved in patient care, teaching and research.
            </p>
            <p>
              He completed his MBBS at Osmania Medical College and his MD in Psychiatry at NIMHANS, followed by a Post-Doctoral Fellowship in Community Mental Health. He has also trained and practiced at <strong>Monash Health, Melbourne</strong> — exposure that lets him offer care that is culturally grounded and aligned with current global standards.
            </p>
            <p>
              His practice is rooted in evidence-based medicine, with expertise in <strong>depression, anxiety disorders, OCD, addiction psychiatry and adult ADHD</strong>. He combines clinical precision with a compassionate, patient-centred approach — ensuring each person feels heard, understood and supported.
            </p>
            <p>
              Beyond patient care, Dr. Rahul contributes to mental health systems at a national and international level — working with the Ministry of Health, WHO-SEARO, USAID and JHPIEGO on initiatives including <strong>Tele-MANAS</strong> and the <strong>National Action Plan on Climate and Mental Health</strong>.
            </p>
            <p className="about-kicker">
              Whether you're seeking support for ongoing challenges or simply looking for clarity about your mental well-being, Dr. Rahul offers a safe, professional and evidence-driven space to help you move forward.
            </p>
          </div>
          <aside className="about-quals">
            <h3 className="quals-h3-primary">EXPERIENCE</h3>
            <div className="quals-experience">
              {DATA_experience.map((q, i) => (
                <div className={'qual qual-exp' + (q.highlight ? ' is-highlight' : '')} key={'x' + i}>
                  <div>
                    <div className="qual-title">{q.title}</div>
                    <div className="qual-org">{q.org}</div>
                    {q.note && <div className="qual-note">{q.note}</div>}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="quals-h3-second">EDUCATION</h3>
            {DATA_education.map((q, i) => (
              <div className="qual" key={'e' + i}>
                <div>
                  <div className="qual-title">{q.title}</div>
                  <div className="qual-org">{q.org}</div>
                  {q.note && <div className="qual-note">{q.note}</div>}
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="stats">
          {DATA_stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="n">{s.n}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we treat"
          title="Comprehensive psychiatric care — <em>not one-size-fits-all</em>."
          meta="Every treatment plan is individualized. Medication is used only when necessary, alongside therapy, lifestyle changes and referrals when appropriate."
        />

        <div className="services-grid">
          {DATA_services.map((s, i) => (
            <div key={i} className={'service' + (s.featured ? ' featured' : '')}>
              <div className="service-num">{s.num} / 06</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => <span className="service-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Assessments({ enabled = true }) {
  const [active, setActive] = useState(null);
  if (!enabled) return null;

  const cards = [
    { key: 'adhd', tag: 'ASRS-v1.1', qs: 6 },
    { key: 'phq9', tag: 'PHQ-9', qs: 9 },
    { key: 'gad7', tag: 'GAD-7', qs: 7 },
  ];

  return (
    <section id="assessments" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Self-Assessments"
          title="Clinically validated <em>self-checks</em>, free and private."
          meta="Used by clinicians worldwide. Everything runs in your browser — no data is sent anywhere."
        />

        <div className="assess-intro">
          <div>
            <h3>Why self-screening matters</h3>
            <p>
              The same screening tools that psychiatrists use in clinics are freely available for anyone to take — they can help you notice patterns, decide whether to seek care, or bring structured information into a first consultation.
            </p>
            <p style={{ marginBottom: 0 }}>
              These tools are a <em>screen</em>, never a diagnosis. A qualified psychiatrist is needed to interpret the score in the full context of your history and current life.
            </p>
            <a href="#book" className="assess-hook">
              Bring your results to a 30-min consultation <I_Arrow />
            </a>
          </div>
          <div className="assess-note">
            <strong style={{ color: 'var(--ink)' }}>Privacy by design</strong><br />
            All assessments run entirely in your browser. Responses and scores are never transmitted, stored or tracked. Close the tab and the data is gone.
          </div>
        </div>

        <div className="assess-grid">
          {cards.map((c) => {
            const cfg = ASSESS[c.key];
            return (
              <button className="assess-card" key={c.key} onClick={() => setActive(c.key)}>
                <span className="badge">{c.tag}</span>
                <h3>{cfg.name}</h3>
                <p>{cfg.full}</p>
                <div className="meta">
                  <span>{c.qs} questions · {cfg.est}</span>
                  <span className="start">Start <I_Arrow size={14} /></span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {active && <AssessmentModal kind={active} onClose={() => setActive(null)} />}
    </section>
  );
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

export function Booking() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const [viewMonth, setViewMonth] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', kind: 'in-person', concern: '' });
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const firstOfMonth = new Date(viewMonth.y, viewMonth.m, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(viewMonth.y, viewMonth.m + 1, 0).getDate();

  const isPastMonth = viewMonth.y < today.getFullYear() || (viewMonth.y === today.getFullYear() && viewMonth.m <= today.getMonth());

  const isBookable = (d) => {
    if (!d) return false;
    const dt = new Date(viewMonth.y, viewMonth.m, d);
    if (dt < today) return false;
    if (dt.getDay() === 0) return false; // Sunday closed
    return true;
  };

  const selectedDateLabel = date
    ? `${DAYS[new Date(viewMonth.y, viewMonth.m, date).getDay()]}, ${MONTHS[viewMonth.m]} ${date}`
    : '—';

  const submit = (e) => {
    e.preventDefault();
    const missing = {};
    if (!date) missing.date = 'Pick a date in Step 1';
    if (!slot) missing.slot = 'Pick a time slot in Step 2';
    if (!form.name.trim()) missing.name = 'Please enter your name';
    if (!form.phone.trim()) missing.phone = 'Phone number is required';
    if (Object.keys(missing).length) {
      setErrors(missing);
      const order = ['date', 'slot', 'name', 'phone'];
      const labels = { date: 'Date', slot: 'Time', name: 'Name', phone: 'Phone' };
      const list = order.filter((k) => missing[k]).map((k) => labels[k]).join(', ');
      setToast(`Please complete: ${list}`);
      setTimeout(() => setToast(null), 4500);
      setTimeout(() => {
        const target = (missing.date || missing.slot)
          ? document.querySelector('.booking-left')
          : document.querySelector(`[data-error-anchor="${Object.keys(missing).find((k) => missing[k])}"]`);
        if (target) {
          const rect = target.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + rect.top - 100, behavior: 'smooth' });
        }
      }, 50);
      return;
    }
    setErrors({});
    const kindLabel = form.kind === 'online' ? 'Online (video consultation)' : 'In-person (Sukoon Health, Hyderabad)';
    const lines = [
      '*Appointment request — drrahulpatley.com*',
      '',
      `*Name:*  ${form.name}`,
      `*Phone:*  ${form.phone}`,
      `*Email:*  ${form.email || '(not provided)'}`,
      `*Mode:*  ${kindLabel}`,
      `*Date:*  ${selectedDateLabel}`,
      `*Time:*  ${slot}  (30 min)`,
      '',
      '*Brief concern:*',
      form.concern || '(none)',
    ];
    const waUrl = `https://wa.me/918448381810?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener');
    setToast('Opening WhatsApp to send the request to Dr. Rahul...');
    setTimeout(() => setToast(null), 5000);
    setDate(null); setSlot(null); setForm({ name: '', phone: '', email: '', kind: 'in-person', concern: '' });
  };

  const prevMonth = () => {
    if (isPastMonth) return;
    const m = viewMonth.m - 1;
    if (m < 0) setViewMonth({ y: viewMonth.y - 1, m: 11 });
    else setViewMonth({ y: viewMonth.y, m });
  };
  const nextMonth = () => {
    const m = viewMonth.m + 1;
    if (m > 11) setViewMonth({ y: viewMonth.y + 1, m: 0 });
    else setViewMonth({ y: viewMonth.y, m });
  };

  return (
    <section id="book">
      <div className="container">
        <SectionHead
          eyebrow="Book an appointment"
          title="Schedule a <em>consultation</em> — online or in person."
          meta={<>Each consultation is 30 minutes.<br />Sukoon Health, Banjara Hills, Hyderabad.<br />Mon–Sat · 11 AM – 5 PM · Closed Sunday.</>}
        />

        <a className="book-call-banner" href="tel:+918448381810">
          <div className="book-call-icon"><I_Phone size={22} /></div>
          <div className="book-call-text">
            <div className="book-call-lead">Prefer to talk now?</div>
            <div className="book-call-num">+91 8448 381 810 <span>· Mon–Sat, 11 AM – 5 PM</span></div>
          </div>
          <div className="book-call-cta"><span>Call</span> <I_Arrow /></div>
        </a>

        <div className="booking-divider"><span>or schedule a specific time below</span></div>

        <div className="booking-grid">
          <div className="booking-left">
            <div className={'booking-label' + (errors.date ? ' has-error' : '')}>
              Step 1 · Select date
              {errors.date && <span className="step-error"> · {errors.date}</span>}
            </div>
            <div className="calendar-head">
              <div className="month">{MONTHS[viewMonth.m]} {viewMonth.y}</div>
              <div className="nav-btns">
                <button onClick={prevMonth} disabled={isPastMonth}>‹</button>
                <button onClick={nextMonth}>›</button>
              </div>
            </div>
            <div className="weekdays">{DAYS.map((d) => <div key={d}>{d}</div>)}</div>
            <div className="days">
              {Array(startOffset).fill(null).map((_, i) => <div key={'e' + i} />)}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
                const dateObj = new Date(viewMonth.y, viewMonth.m, d);
                const isToday = dateObj.getTime() === today.getTime();
                const bookable = isBookable(d);
                return (
                  <button
                    key={d}
                    className={'day' + (isToday ? ' today' : '') + (date === d ? ' selected' : '') + (bookable ? ' available' : '')}
                    disabled={!bookable}
                    onClick={() => { setDate(d); setSlot(null); setErrors((er) => ({ ...er, date: undefined, slot: undefined })); }}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: '32px' }}>
              <div className={'booking-label' + (errors.slot ? ' has-error' : '')}>
                Step 2 · Select time
                <span style={{ color: 'var(--ink-mute)', textTransform: 'none', letterSpacing: 0, marginLeft: '8px' }}>{date ? `· ${selectedDateLabel}` : '· pick a date first'}</span>
                {errors.slot && <span className="step-error"> · {errors.slot}</span>}
              </div>
              <div className="slots">
                {TIME_SLOTS.map((t) => {
                  const hash = (date || 0) * 31 + t.charCodeAt(0);
                  const taken = date && (hash % 5 === 0 || hash % 7 === 0);
                  return (
                    <button
                      key={t}
                      className={'slot' + (slot === t ? ' selected' : '')}
                      disabled={!date || taken}
                      onClick={() => { setSlot(t); setErrors((er) => ({ ...er, slot: undefined })); }}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <form className="booking-right" onSubmit={submit}>
            <div className="booking-label">Step 3 · Your details</div>

            <div className="summary-card">
              <div className="summary-row"><span className="k">Type</span><span className="v">{form.kind === 'online' ? 'Online (video)' : 'In person'}</span></div>
              <div className="summary-row"><span className="k">Date</span><span className="v">{selectedDateLabel}</span></div>
              <div className="summary-row"><span className="k">Time</span><span className="v">{slot ? `${slot} · 30 min` : '—'}</span></div>
            </div>

            <div className={'field' + (errors.name ? ' has-error' : '')} data-error-anchor="name">
              <label>Name *</label>
              <input
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors((er) => ({ ...er, name: undefined })); }}
                placeholder="Name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <div className="field-error-msg">{errors.name}</div>}
            </div>
            <div className="field-row">
              <div className={'field' + (errors.phone ? ' has-error' : '')} data-error-anchor="phone">
                <label>Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); if (errors.phone) setErrors((er) => ({ ...er, phone: undefined })); }}
                  placeholder="+91 ..."
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <div className="field-error-msg">{errors.phone}</div>}
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="optional" />
              </div>
            </div>
            <div className="field">
              <label>Mode</label>
              <select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })}>
                <option value="in-person">In person · Sukoon Health, Hyderabad</option>
                <option value="online">Online · Video consultation</option>
              </select>
            </div>
            <div className="field">
              <label>Brief concern (optional)</label>
              <textarea value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} placeholder="A few words help Dr. Rahul prepare for your visit." />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a className="btn primary" href="tel:+918448381810" style={{ flex: '1 1 0', justifyContent: 'center' }}>
                <I_Phone /> Call to confirm <I_Arrow />
              </a>
              <button className="btn ghost" type="submit" style={{ flex: '0 0 auto', justifyContent: 'center' }}>
                <I_WhatsApp size={16} /> WhatsApp
              </button>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--ink-mute)', margin: '14px 0 0', textAlign: 'center' }}>
              Calling is fastest — Dr. Rahul's team picks up Mon–Sat, 11 AM – 5 PM. WhatsApp opens with your details pre-filled if you'd rather message.
            </p>
          </form>
        </div>

        {toast && <div className="toast"><span style={{ color: 'var(--accent)' }}>●</span> {toast}</div>}
      </div>
    </section>
  );
}

export function Policy() {
  return (
    <section id="policy">
      <div className="container">
        <SectionHead
          eyebrow="Policy & leadership"
          title="Shaping mental-health policy at the <em>national and international</em> level."
          meta="Working with Indian central and state governments and international organisations to translate clinical evidence into public-health programmes."
        />
        <div className="policy-grid">
          {DATA_policy.map((p, i) => (
            <div className="policy" key={i}>
              <div className="policy-org">{p.org}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Press() {
  return (
    <section id="press" style={{ background: 'var(--bg-alt)' }} className="tight">
      <div className="container">
        <SectionHead
          eyebrow="In the press"
          title="Commentary on mental health in <em>Indian media</em>."
          meta="Selected appearances, interviews and op-eds."
        />
        <div className="press-grid">
          {DATA_press.map((p, i) => {
            const Tag = p.url ? 'a' : 'div';
            const props = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Tag className="press-card" key={i} {...props}>
                <div className="press-logo">{p.outlet}</div>
                <p>{p.quote}</p>
                <div className="date">{p.date}{p.url && <span className="press-link"> · Read article →</span>}</div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = DATA_testimonials[i];
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % DATA_testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="reviews">
      <div className="container">
        <SectionHead
          eyebrow="What patients say"
          title="Stories from people who have sought <em>care here</em>."
          meta="Shared with consent. Names have been anonymised to protect patient privacy."
        />
        <div className="testimonial-wrap">
          <div key={i} className="testimonial-quote">{t.q}</div>
          <div className="testimonial-meta">
            <div className="testimonial-avatar">{t.n.charAt(0)}</div>
            <div className="testimonial-who">
              <div className="n">{t.n}</div>
              <div className="r">{t.r}</div>
            </div>
          </div>
          <div className="testimonial-nav">
            {DATA_testimonials.map((_, idx) => (
              <button key={idx} className={'t-dot' + (idx === i ? ' active' : '')} onClick={() => setI(idx)} aria-label={'Story ' + (idx + 1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Questions"
          title="Everything you might want to <em>know before booking</em>."
          meta="Don't see your question? WhatsApp or email — usually a same-day reply."
        />
        <div className="faq-list">
          {DATA_faqs.map((f, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="toggle"><I_Plus /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Get in touch"
          title="<em>Take the first step</em> — it's the one that matters."
        />
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Clinic & contact</h3>
            <div className="contact-line">
              <div className="k">Visit</div>
              <div className="v">
                <strong>Sukoon Health — Hyderabad</strong><br />
                Road No. 12, Banjara Hills,<br />Hyderabad — 500034
              </div>
            </div>
            <div className="contact-line">
              <div className="k">Hours</div>
              <div className="v">Monday – Saturday<br />11:00 AM – 5:00 PM<br /><span style={{ color: 'var(--ink-mute)' }}>Sunday — closed</span></div>
            </div>
            <div className="contact-line">
              <div className="k">Phone</div>
              <div className="v"><a href="tel:+918448381810">+91 844 838 1810</a></div>
            </div>
            <div className="contact-line">
              <div className="k">Email</div>
              <div className="v"><a href="mailto:drpatley@gmail.com">drpatley@gmail.com</a></div>
            </div>

            <div className="contact-ctas">
              <a href="https://wa.me/918448381810" target="_blank" rel="noopener noreferrer" className="btn accent"><I_WhatsApp size={16} /> Chat on WhatsApp</a>
              <a href="tel:+918448381810" className="btn ghost"><I_Phone /> Call</a>
            </div>
          </div>

          <div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.02285488776!2d78.4357883!3d17.4106908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9727ac9ebb35%3A0x716ed523e7281394!2sSukoon%20Psychiatry%20Centre%20-%20Hyderabad%2C%20Mental%20Health%20Hospital%20%26%20Rehab!5e0!3m2!1sen!2sus!4v1776728452947!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sukoon Psychiatry Centre, Hyderabad"
              />
            </div>
            <a href="https://share.google/wEQVZYtNIt6YRTnzV" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ marginTop: '16px' }}>Get directions <I_Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-tag">
            <a href="#" className="brand">
              <div className="brand-mark">R</div>
              <div className="brand-text">
                <div className="name">Dr. Rahul Patley</div>
                <div className="role">Consultant Psychiatrist</div>
              </div>
            </a>
            <p>Consultant Psychiatrist — MBBS, MD (Psychiatry, NIMHANS). Assistant Professor, NIMHANS Bengaluru. Evidence-based care with compassion and credibility.</p>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            {DATA_navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Depression & Anxiety</a>
            <a href="#services">Adult ADHD</a>
            <a href="#services">Addiction</a>
            <a href="#services">OCD</a>
            <a href="#services">Schizophrenia</a>
            <a href="#services">Telepsychiatry</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+918448381810">+91 844 838 1810</a>
            <a href="mailto:drpatley@gmail.com">Email</a>
            <a href="https://wa.me/918448381810" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="#book">Book now</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Dr. Rahul Patley. This website is for information only and does not constitute medical advice.</div>
          <div>Privacy · Terms · Consent</div>
        </div>
      </div>
    </footer>
  );
}
