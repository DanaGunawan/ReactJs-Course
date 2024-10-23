// import { useState } from 'react'
// import viteLogo from '/vite.svg'

// function App() {

//   const [count,setCount] = useState(0)

// const increment = () => {setCount(count + 1);}
// const decrement = () => {setCount(count - 1);}

// return <section>
// <h1>{count}</h1>
// <button onClick={increment}>+</button>
// <button onClick={decrement}>-</button>

// </section>

// }

// export default App

import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [Friends, setFriends] = useState(["DEWO", "JAKA"]);
  const addNewFriends = () => {setFriends([...Friends,"DONO"]);};
  const deleteOldFriend = () => {setFriends(Friends.filter((f) => f != "DEWO"))}
  const UpdateOldFriends = () => {setFriends(Friends.map((f) => f == "DEWO" ? "DEWA KADEK" : f))}
  return (
    <section>
      {Friends.map((f) => (
        <li key={Math.random}> {f} </li>
      ))}

      <button onClick={addNewFriends}>Add New Friend</button>
      <button onClick={deleteOldFriend}>Delete Old Friend</button>
      <button onClick={UpdateOldFriends}>Update Friends</button>
    </section>
  );
}

export default App;
