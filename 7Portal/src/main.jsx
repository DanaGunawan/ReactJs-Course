import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Switcher from './switcher';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Switcher />
  </StrictMode>,
)
