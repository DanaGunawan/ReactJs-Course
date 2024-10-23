import React from 'react'

const Component2 = ({count,onClickHandler}) => {

    const Handler = () => onClickHandler();
  return (
    <section>
        <h1>{count}</h1>
        <button onClick={Handler}>Increment</button>
    </section>
  )
}

export default Component2
