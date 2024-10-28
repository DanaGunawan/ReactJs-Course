import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Data from './Data.jsx'
import Basic from './challenges/Basic.jsx'
import CounterEffect from './challenges/CounterEffect.jsx'
import FetchDataEffect from './challenges/FetchDataEffect.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Data /> */}
    {/* <Basic /> */}
    <CounterEffect />
    <FetchDataEffect />

    
  </>,
)
