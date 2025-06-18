import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VideoProvier } from './global-state/context/videoContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <VideoProvier>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </VideoProvier>
  </StrictMode>,
)
