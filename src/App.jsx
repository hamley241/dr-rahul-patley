import React, { useEffect, useState } from 'react';
import { Nav } from './components.jsx';
import {
  About,
  Assessments,
  Booking,
  Contact,
  FAQ,
  Footer,
  Hero,
  Policy,
  Press,
  Services,
  Testimonials,
} from './sections.jsx';
import { Affiliations, GlobalPerspective } from './international.jsx';
import { Research } from './publications.jsx';
import { Breathing } from './breathing.jsx';
import { I_WhatsApp } from './icons.jsx';

export default function App() {
  const [tweaks] = useState(() => ({ ...window.__TWEAKS }));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.setAttribute('data-density', tweaks.density);
  }, [tweaks.theme, tweaks.density]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Affiliations />
        <About />
        <GlobalPerspective />
        <Services />
        <Assessments enabled={tweaks.showAssessments} />
        <Breathing enabled={tweaks.showBreathing} />
        <Booking />
        <Research />
        <Policy />
        <Press />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a className="fab" href="https://wa.me/918448381810" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <I_WhatsApp />
      </a>
    </>
  );
}
