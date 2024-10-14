import React from 'react'

const List = () => {
const Numbers = [1,2,3,4,5,6,7,8,9];
  return (
    <div>
       {Numbers.map((Number) => (
        <ul key={Number}> <li>{Number} </li> </ul>
       ))}
    </div>
  )
}

export default List;
