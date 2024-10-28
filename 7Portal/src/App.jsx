import { useState } from 'react'
import PopupContent from './component/PopupContent';

function App() {
  const [Input, SetInput] = useState("");
  const [Copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(Input).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      },5000)
    });
  }

  return <section>
    <input type="text" placeholder="input your Text" onChange={e => SetInput(e.target.value)}></input>
    <button onClick={handleCopy}>Copy</button>
    <PopupContent copied={Copied}/>
    
  </section>
}

export default App
