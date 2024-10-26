import React, { useState } from 'react';

const TodoList = () => {
   const [Todos, setTodos] = useState([]);
   const [Newtodo,setNewTodo] = useState("");

   const handleSubmit = e => {
    e.preventDefault();

    if(Newtodo.trim()){
        setTodos([...Todos,Newtodo]);
        setNewTodo("");
    }
    }

    const handleChange = e => {
        setNewTodo(e.target.value);
    }
    return (
        <section>
        <h1> OuR Todo List</h1>       
        <form onSubmit={handleSubmit}> 
        <input type="text" value={Newtodo} onChange={handleChange} placeholder='Add Your TodoList' />
        <button type='submit'>Submit Todo </button>
        </form>

        <ul>
        {Todos.map((t,index) => (
            <li key={index}>{t}</li>
        ))}
        </ul>
        </section>
    );
};

export default TodoList;
