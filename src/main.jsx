import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

window.__TWEAKS = {
  theme: 'clinical',
  showAssessments: true,
  showBreathing: true,
  density: 'compact',
};

document.documentElement.setAttribute('data-theme', window.__TWEAKS.theme);
document.documentElement.setAttribute('data-density', window.__TWEAKS.density);

const container = document.getElementById('app');
// scripts/prerender.mjs sets this attribute on the captured DOM so the
// client knows to hydrate the existing markup instead of replacing it.
if (document.documentElement.dataset.prerendered === 'true') {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
