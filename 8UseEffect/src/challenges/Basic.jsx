import React,{useState,useEffect} from 'react'


const Basic = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log(`button have been clicked ${count} times`)
    },[count]);

    const ClickHandle = () => {
        setCount(count + 1);
    }
   

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ClickHandle}>Increment</button>
    </div>
  )
}

export default Basic
