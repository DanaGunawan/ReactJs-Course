import React from 'react'

const Component1 = ({count,onClickHandler}) => {
const handler = () => onClickHandler();
  return (
    <section>
        <h1>{count}</h1>
        <button onClick={handler}>Increment</button>
    </section>
  )
}

export default Component1
