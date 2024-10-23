import React from 'react'
import {useState} from 'react'
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';



const ComponentMix = () => {
    const [Count,setCount] = useState(0);
    const onClickHandler = () => {setCount(Count + 1 )}
  return (
    <section>

    <Component1 count={Count} onClickHandler={onClickHandler} />
    <Component2 count={Count} onClickHandler={onClickHandler} />

    </section>
  )
}

export default ComponentMix
