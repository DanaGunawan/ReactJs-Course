import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'

const initial = {count : 0,tools: "javascript"};

const Reducer = (state,action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count:state.count + 1}
    case 'decrement':
      return {...state, count:state.count -1}
    case 'reset':
      return {...state, count: 0}
      default:
        return state;
  }

}

function App() {
  
  const [state,dispatch] = useReducer(Reducer,initial);


  return (
   <section>
    <h1>Count : {state.count}</h1>
    <button onClick={() => {dispatch({type:"increment"})}}>+</button>
    <button onClick={() => {dispatch({type:"decrement"})}}>-</button>
    <button onClick={() => {dispatch({type:"reset"})}}>reset </button>
   </section>
  )
}

export default App
