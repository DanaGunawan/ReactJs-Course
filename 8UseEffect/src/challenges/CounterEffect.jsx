import React,{useEffect, useState} from 'react'

const CounterEffect = () => {
    const [Counter,SetCounter] = useState(0);
    const [angka,SetNumber] = useState(0);

    useEffect(() => {
        console.log(`Counter or angka is clicked ${Counter + angka} times`);
        document.title = Counter + angka
    },[Counter,angka]);

  return (
    <section>
        <h1>{Counter + angka}</h1>
        <button onClick={() => SetCounter(Counter + 1)}>Increment Counter</button>
        <button onClick={() => SetNumber(angka+ 1)}>Increment Number</button>
    </section>
  )
}

export default CounterEffect
