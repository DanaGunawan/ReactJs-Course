import React,{useState} from 'react'


const Switcher = () => {
const [Sw,setSw] = useState(false);

  return (
    <div>
      <div>{Sw? <h1>Light</h1> : <h1>Dark</h1>}</div>
      <input type="text" key={Sw? 'dark' : 'light'}></input>
      <button onClick={e => setSw((s) => !s)}>Change</button>
   
    </div>
  )
}

export default Switcher
