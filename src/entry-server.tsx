import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

// Rendered at build time by scripts/prerender.mjs to produce static HTML
// that the client then hydrates (see main.tsx).
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
