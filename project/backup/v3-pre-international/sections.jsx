// src/sections.jsx — all page sections

function Hero() {
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
            <p className="hero-lede">Dr. Rahul Patley is a consultant psychiatrist trained at NIMHANS, Bengaluru, with experience as a former Assistant Professor and international clinical exposure at Monash Health, Melbourne. His work combines strong scientific expertise with a genuine understanding of what people go through.


He works closely with individuals facing challenges like depression, anxiety, OCD, addiction, and adult ADHD—focusing not just on diagnosis, but on helping you feel better and regain control of your life.


Every consultation is a safe, confidential space where you can speak openly and be understood—without judgment.</p>
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
            <img src="assets/dr-rahul-portrait.jpg" alt="Dr. Rahul Patley — Consultant Psychiatrist" />
            <div className="hero-stats">
              <div className="num">10+</div>
              <div className="lbl">Psychiatry, NIMHANS
Internationally trained at  Monash, Melbourne
              </div>
            </div>
            <div className="portrait-tag">
              <div className="big">MD</div>
              <div className="small">Psychiatry, NIMHANS<br />Assistant Professor · Bengaluru</div>
            </div>
          </div>
        </div>
      </div>
    </section>);}function About() {return <section id="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
        eyebrow="About"
        title="A decade at the intersection of <em>clinical care</em>, research and policy."
        meta={<>MBBS · Osmania Medical College<br />MD Psychiatry · NIMHANS<br />Senior Psychiatry Reg · Monash Health, Australia</>} />
        
        <div className="about-grid">
          <div className="about-body">
            <p className="lead">
              “My approach is simple — listen carefully, investigate thoroughly, and prescribe only what the evidence supports.”
            </p>
            <p>
              Dr. Rahul Patley is a consultant psychiatrist with a strong foundation in both academic excellence and clinical practice. He previously served as an <strong>Assistant Professor of Psychiatry at NIMHANS</strong>, Bengaluru—India’s premier institute for mental health and neurosciences—where he was actively involved in patient care, teaching, and research.
              {"\n\n\n"}
              Bringing a global perspective to his work, Dr. Rahul has also trained and practiced at Monash Health, Melbourne. This international exposure, combined with his experience in India, allows him to offer care that is both culturally sensitive and aligned with the latest global standards in psychiatry.
              {"\n\n\n"}
              His approach is rooted in evidence-based medicine, with expertise in managing depression, anxiety disorders, obsessive-compulsive disorder (OCD), addiction psychiatry, and adult ADHD. He is known for combining clinical precision with a compassionate, patient-centered approach—ensuring that each individual feels heard, understood, and supported.
              {"\n\n\n"}
              Dr. Rahul completed his MBBS from the prestigious Osmania Medical College, followed by an MD in Psychiatry from NIMHANS. He further advanced his expertise through a Post-Doctoral Fellowship in Community Mental Health.
              {"\n\n\n"}
              Beyond his clinical work, he contributes to shaping mental health systems at a national and international level. He has worked with organizations such as the Ministry of Health, WHO-SEARO, USAID, and JHPIEGO on key initiatives including Tele-MANAS and the National Action Plan on Climate and Mental Health.
              {"\n\n\n"}
              Whether you are seeking support for ongoing challenges or looking for clarity about your mental well-being, Dr. Rahul offers a safe, professional, and evidence-driven space to help you move forward.
              {"\n"}
            </p>
            <p>

            </p>
            <p>

            </p>
          </div>
          <aside className="about-quals">
            <h3 className="quals-h3-primary">EXPERIENCE</h3>
            <div className="quals-experience">
              {DATA_experience.map((q, i) =>
            <div className="qual qual-exp" key={'x'+i}>
                  <div>
                    <div className="qual-title">{q.title}</div>
                    <div className="qual-org">{q.org}</div>
                    {q.note && <div className="qual-note">{q.note}</div>}
                  </div>
                </div>
            )}
            </div>
            <h3 className="quals-h3-second">EDUCATION</h3>
            {DATA_education.map((q, i) =>
          <div className="qual" key={'e'+i}>
                <div>
                  <div className="qual-title">{q.title}</div>
                  <div className="qual-org">{q.org}</div>
                  {q.note && <div className="qual-note">{q.note}</div>}
                </div>
              </div>
          )}
          </aside>
        </div>

        <div className="stats">
          {DATA_stats.map((s, i) =>
        <div className="stat" key={i}>
              <div className="n">{s.n}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="l">{s.l}</div>
            </div>
        )}
        </div>
      </div>
    </section>;

}

function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we treat"
          title="Comprehensive psychiatric care — <em>not one-size-fits-all</em>."
          meta="Every treatment plan is individualized. Medication is used only when necessary, alongside therapy, lifestyle changes and referrals when appropriate." />
        
        <div className="services-grid">
          {DATA_services.map((s, i) =>
          <div key={i} className={'service' + (s.featured ? ' featured' : '')}>
              <div className="service-num">{s.num} / 06</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => <span className="service-tag" key={j}>{t}</span>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Assessments() {
  const [active, setActive] = React.useState(null);
  if (!window.__TWEAKS.showAssessments) return null;

  const cards = [
  { key: 'adhd', tag: 'ASRS-v1.1', qs: 6 },
  { key: 'phq9', tag: 'PHQ-9', qs: 9 },
  { key: 'gad7', tag: 'GAD-7', qs: 7 }];


  return (
    <section id="assessments" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Self-Assessments"
          title="Clinically validated <em>self-checks</em>, free and private."
          meta="Used by clinicians worldwide. Everything runs in your browser — no data is sent anywhere." />
        

        <div className="assess-intro">
          <div>
            <h3>Why self-screening matters</h3>
            <p>
              The same screening tools that psychiatrists use in clinics are freely available for anyone to take — they can help you notice patterns, decide whether to seek care, or bring structured information into a first consultation.
            </p>
            <p style={{ marginBottom: 0 }}>
              These tools are a <em>screen</em>, never a diagnosis. A qualified psychiatrist is needed to interpret the score in the full context of your history and current life.
            </p>
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
              </button>);

          })}
        </div>
      </div>
      {active && <AssessmentModal kind={active} onClose={() => setActive(null)} />}
    </section>);

}

/* ---- Booking ---- */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = ['10:00', '10:45', '11:30', '12:15', '14:00', '14:45', '15:30', '16:15', '17:00'];

function Booking() {
  const today = new Date();today.setHours(0, 0, 0, 0);
  const [viewMonth, setViewMonth] = React.useState({ y: today.getFullYear(), m: today.getMonth() });
  const [date, setDate] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', kind: 'consult', concern: '' });
  const [toast, setToast] = React.useState(null);

  const firstOfMonth = new Date(viewMonth.y, viewMonth.m, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(viewMonth.y, viewMonth.m + 1, 0).getDate();

  const isPastMonth = viewMonth.y < today.getFullYear() || viewMonth.y === today.getFullYear() && viewMonth.m <= today.getMonth();

  const isBookable = (d) => {
    if (!d) return false;
    const date = new Date(viewMonth.y, viewMonth.m, d);
    if (date < today) return false;
    // Sunday closed
    if (date.getDay() === 0) return false;
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!date || !slot || !form.name || !form.phone) {
      setToast('Please complete all required fields');
      setTimeout(() => setToast(null), 3000);
      return;
    }
    setToast('Request submitted — Dr. Rahul\'s team will confirm on WhatsApp shortly.');
    setTimeout(() => setToast(null), 4500);
    setDate(null);setSlot(null);setForm({ name: '', phone: '', email: '', kind: 'consult', concern: '' });
  };

  const prevMonth = () => {
    if (isPastMonth) return;
    const m = viewMonth.m - 1;
    if (m < 0) setViewMonth({ y: viewMonth.y - 1, m: 11 });else
    setViewMonth({ y: viewMonth.y, m });
  };
  const nextMonth = () => {
    const m = viewMonth.m + 1;
    if (m > 11) setViewMonth({ y: viewMonth.y + 1, m: 0 });else
    setViewMonth({ y: viewMonth.y, m });
  };

  const selectedDateLabel = date ?
  `${DAYS[new Date(viewMonth.y, viewMonth.m, date).getDay()]}, ${MONTHS[viewMonth.m]} ${date}` :
  '—';

  return (
    <section id="book">
      <div className="container">
        <SectionHead
          eyebrow="Book an appointment"
          title="Schedule a <em>consultation</em> — online or in person."
          meta={<>Each initial consultation is 45 minutes.<br />Sukoon Health, Banjara Hills, Hyderabad.<br />Mon–Sat · 10 AM – 5 PM · Closed Sunday.</>} />
        

        <div className="booking-grid">
          <div className="booking-left">
            <div className="booking-label">Step 1 · Select date</div>
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
                    onClick={() => {setDate(d);setSlot(null);}}>
                    {d}</button>);

              })}
            </div>

            <div style={{ marginTop: '32px' }}>
              <div className="booking-label">Step 2 · Select time <span style={{ color: 'var(--ink-mute)', textTransform: 'none', letterSpacing: 0, marginLeft: '8px' }}>{date ? `· ${selectedDateLabel}` : '· pick a date first'}</span></div>
              <div className="slots">
                {TIME_SLOTS.map((t) => {
                  // randomly block a couple of slots for realism, deterministic per date
                  const hash = (date || 0) * 31 + t.charCodeAt(0);
                  const taken = date && (hash % 5 === 0 || hash % 7 === 0);
                  return (
                    <button
                      key={t}
                      className={'slot' + (slot === t ? ' selected' : '')}
                      disabled={!date || taken}
                      onClick={() => setSlot(t)}>
                      {t}</button>);

                })}
              </div>
            </div>
          </div>

          <form className="booking-right" onSubmit={submit}>
            <div className="booking-label">Step 3 · Your details</div>

            <div className="summary-card">
              <div className="summary-row"><span className="k">Type</span><span className="v">{form.kind === 'consult' ? 'Initial consultation (45 min)' : 'Follow-up (30 min)'}</span></div>
              <div className="summary-row"><span className="k">Date</span><span className="v">{selectedDateLabel}</span></div>
              <div className="summary-row"><span className="k">Time</span><span className="v">{slot || '—'}</span></div>
              <div className="summary-row"><span className="k">Fee</span><span className="v">{form.kind === 'consult' ? '₹ 2,500' : '₹ 1,500'}</span></div>
            </div>

            <div className="field">
              <label>Name *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="As on your ID" />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Phone *</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="optional" />
              </div>
            </div>
            <div className="field">
              <label>Appointment type</label>
              <select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })}>
                <option value="consult">Initial consultation · 45 min · ₹ 2,500</option>
                <option value="followup">Follow-up · 30 min · ₹ 1,500</option>
                <option value="tele">Video consultation · 30 min · ₹ 2,000</option>
              </select>
            </div>
            <div className="field">
              <label>Brief concern (optional)</label>
              <textarea value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} placeholder="A few words help Dr. Rahul prepare for your visit." />
            </div>

            <button className="btn primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              Request appointment <I_Arrow />
            </button>
            <p style={{ fontSize: '12px', color: 'var(--ink-mute)', margin: '14px 0 0', textAlign: 'center' }}>
              You'll receive a confirmation on WhatsApp. Rescheduling is free up to 24 hours before.
            </p>
          </form>
        </div>

        {toast && <div className="toast"><span style={{ color: 'var(--accent)' }}>●</span> {toast}</div>}
      </div>
    </section>);

}

/* ---- Research / Publications ---- */
// Research component moved to src/publications.jsx

/* ---- Policy ---- */
function Policy() {
  return (
    <section id="policy">
      <div className="container">
        <SectionHead
          eyebrow="Policy & leadership"
          title="Shaping mental-health policy at the <em>national and international</em> level."
          meta="Working with Indian central and state governments and international organisations to translate clinical evidence into public-health programmes." />
        
        <div className="policy-grid">
          {DATA_policy.map((p, i) =>
          <div className="policy" key={i}>
              <div className="policy-org">{p.org}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---- Press ---- */
function Press() {
  return (
    <section id="press" style={{ background: 'var(--bg-alt)' }} className="tight">
      <div className="container">
        <SectionHead
          eyebrow="In the press"
          title="Commentary on mental health in <em>Indian media</em>."
          meta="Selected appearances, interviews and op-eds." />
        
        <div className="press-grid">
          {DATA_press.map((p, i) =>
          <div className="press-card" key={i}>
              <div className="press-logo">{p.outlet}</div>
              <p>{p.quote}</p>
              <div className="date">{p.date}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---- Testimonials ---- */
function Testimonials() {
  const [i, setI] = React.useState(0);
  const t = DATA_testimonials[i];
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % DATA_testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="reviews">
      <div className="container">
        <SectionHead
          eyebrow="What patients say"
          title="Stories from people who have sought <em>care here</em>."
          meta="Shared with consent. Names have been anonymised to protect patient privacy." />
        
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
            {DATA_testimonials.map((_, idx) =>
            <button key={idx} className={'t-dot' + (idx === i ? ' active' : '')} onClick={() => setI(idx)} aria-label={'Story ' + (idx + 1)} />
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---- FAQ ---- */
function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Questions"
          title="Everything you might want to <em>know before booking</em>."
          meta="Don't see your question? WhatsApp or email — usually a same-day reply." />
        
        <div className="faq-list">
          {DATA_faqs.map((f, i) =>
          <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="toggle"><I_Plus /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---- Contact ---- */
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Get in touch"
          title="<em>Take the first step</em> — it's the one that matters."
          meta="Same-day replies on WhatsApp. For crises, please call your nearest emergency service or the iCall helpline: 9152987821." />
        
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
              <div className="v">Monday – Saturday<br />10:00 AM – 5:00 PM<br /><span style={{ color: 'var(--ink-mute)' }}>Sunday — closed</span></div>
            </div>
            <div className="contact-line">
              <div className="k">Phone</div>
              <div className="v"><a href="tel:+918448381810">+91 844 838 1810</a></div>
            </div>
            <div className="contact-line">
              <div className="k">Email</div>
              <div className="v"><a href="mailto:hello@drrahulpatley.com">hello@drrahulpatley.com</a></div>
            </div>
            <div className="contact-line">
              <div className="k">Academic</div>
              <div className="v">NIMHANS, Hosur Road,<br />Bengaluru — 560029</div>
            </div>

            <div className="contact-ctas">
              <a href="https://wa.me/918448381810" target="_blank" className="btn accent"><I_WhatsApp size={16} /> Chat on WhatsApp</a>
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
                title="Sukoon Psychiatry Centre, Hyderabad" />
              
            </div>
            <a href="https://share.google/wEQVZYtNIt6YRTnzV" target="_blank" className="btn ghost" style={{ marginTop: '16px' }}>Get directions <I_Arrow /></a>
          </div>
        </div>
      </div>
    </section>);

}

/* ---- Footer ---- */
function Footer() {
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
            <a href="mailto:hello@drrahulpatley.com">Email</a>
            <a href="https://wa.me/918448381810">WhatsApp</a>
            <a href="#book">Book now</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Dr. Rahul Patley. This website is for information only and does not constitute medical advice.</div>
          <div>Privacy · Terms · Consent</div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Hero, About, Services, Assessments, Booking, Policy, Press, Testimonials, FAQ, Contact, Footer });