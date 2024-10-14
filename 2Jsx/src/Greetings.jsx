import React from 'react'

const Greetings = () => {
    const name = "Dewa";
    const currentTime = new Date().toLocaleTimeString();
    
  return (
    <div>
      <h1>Dynamic Content Show</h1>
      <p>This is Learning Dynamic function javascript curly brucket</p>
      <p>Hello Selamat Malam, {name}</p>
      <p>Waktu sekarang adalah {currentTime}</p>
    </div>
  )
}

export default Greetings;
