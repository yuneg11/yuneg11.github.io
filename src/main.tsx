import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/dm-serif-display/latin-400.css'
import './index.css'
import App from './App.tsx'

// The HTML is prerendered at build time, so we hydrate rather than create the root.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
