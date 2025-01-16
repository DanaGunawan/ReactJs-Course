import { useState } from 'react'
import { useRef } from 'react'
import FocusInput from './focusInput';
import Timer from './Timer';

function App() {

  const inputElement = useRef(null);
  console.log(inputElement);

  const focusWrite = () => {
    inputElement.current.focus();
    inputElement.current.value = 'Dewaa';
  }

  return (<div> 
  
  <FocusInput />
  <Timer />
  <input type="text" ref={inputElement} />
  <button onClick={() => focusWrite()}> focus and write Dewa</button>
  
  </div>)
}

export default App
