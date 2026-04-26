import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo at https://<username>.github.io/dr-rahul-patley/
// CI overrides this via the VITE_BASE env var if the repo gets renamed or a custom
// domain is wired up later.
const base = process.env.VITE_BASE ?? '/dr-rahul-patley/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2019',
  },
});
