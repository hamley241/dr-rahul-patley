// src/components.jsx — reusable UI components

function Nav({ onOpenTweaks }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onS, { passive: true });
    onS();
    return () => window.removeEventListener('scroll', onS);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add('menu-open');
    else html.classList.remove('menu-open');
    return () => html.classList.remove('menu-open');
  }, [open]);

  // Close menu when resizing up to desktop, or when a hash link is clicked
  React.useEffect(() => {
    const onR = () => { if (window.innerWidth > 860) setOpen(false); };
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '') + (open ? ' menu-is-open' : '')}>
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}>
          <div className="brand-mark">R</div>
          <div className="brand-text">
            <div className="name">Dr. Rahul Patley</div>
            <div className="role">Consultant Psychiatrist</div>
          </div>
        </a>
        <nav className="nav-links">
          {DATA_navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#book" className="nav-cta">Book</a>
        </nav>
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <I_Close size={22}/> : <I_Burger/>}
        </button>
      </div>
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
          {DATA_navLinks.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
          <a href="#book" className="btn primary" onClick={close}>Book Appointment <I_Arrow/></a>
        </div>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, meta, id }) {
  return (
    <div className="sec-head" id={id}>
      <div>
        {eyebrow && <div className="eyebrow" style={{marginBottom: '12px'}}>{eyebrow}</div>}
        <h2 dangerouslySetInnerHTML={{__html: title}}/>
      </div>
      {meta && <div className="meta">{meta}</div>}
    </div>
  );
}

function Chip({ children }) { return <span className="chip">{children}</span>; }

Object.assign(window, { Nav, SectionHead, Chip });
