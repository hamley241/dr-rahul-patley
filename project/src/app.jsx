// src/app.jsx — main app + tweak wiring

function App() {
  const [tweaks, setTweaksState] = React.useState(() => ({ ...window.__TWEAKS }));
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  const setTweaks = (next) => {
    setTweaksState(next);
    window.__TWEAKS = next;
  };

  // Apply theme + density to <html>
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.setAttribute('data-density', tweaks.density);
  }, [tweaks.theme, tweaks.density]);

  // Tweaks edit-mode protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Affiliations/>
        <About/>
        <GlobalPerspective/>
        <Services/>
        <Assessments/>
        <Breathing/>
        <Booking/>
        <Research/>
        <Policy/>
        <Press/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
      <a className="fab" href="https://wa.me/918448381810" target="_blank" aria-label="WhatsApp"><I_WhatsApp/></a>
      {tweaksOpen && <TweaksPanel tweaks={tweaks} setTweaks={setTweaks}/>}
    </>
  );
}

// Set initial theme before first paint
document.documentElement.setAttribute('data-theme', window.__TWEAKS.theme);
document.documentElement.setAttribute('data-density', window.__TWEAKS.density);

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
