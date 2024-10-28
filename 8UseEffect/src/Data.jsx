import React,{useState,useEffect} from 'react'

const Data = () => {
    const [Data,SetData] = useState([]);

    useEffect(() => {
        async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const dataparse = await response.json();
        if(dataparse && dataparse.length > 0) SetData(dataparse)
        }
        getData();
    } ,[])

  return (
    <div>
      {Data.map((todo) => (
        <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.completed.toString()}</li>
        </ul>
      ))}
    </div>
  )
}

export default Data
