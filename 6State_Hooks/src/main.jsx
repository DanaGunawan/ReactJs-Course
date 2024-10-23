import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Object from './ObjectState.jsx'
import ArrayObject from './ArrayObjectState.jsx'
import ComponentMix from './componentMix.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Object />
    <ArrayObject />
    <ComponentMix />
  </StrictMode>,
)
