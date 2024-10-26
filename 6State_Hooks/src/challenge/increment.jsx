import React from 'react'
import { useState } from 'react'

const Increment = () => {

    const [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1)
    }

  return (
    <section> 
    <h1>{number}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </section>
  )
}

export default Increment
