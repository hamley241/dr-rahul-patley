import React from 'react';
import { createRoot } from 'react-dom/client';
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

createRoot(document.getElementById('app')).render(<App />);
