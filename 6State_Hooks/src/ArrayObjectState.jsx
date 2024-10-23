import React from 'react'
import {useState} from 'react'

const ArrayObject = () => {
    const [Movies, setMovies] = useState(
        [
            {id: 1 , movie: 'batman',rating:7},
            {id: 2 , movie: 'superman',rating:8}
        ]
    );

    const ChangeMovies = () => {
      setMovies(Movies.map((m) => (m.id == 1 ? {...Movies,movie:"JAKA SEMBUNG"} : m)))
    }
  return (
   <section>
    {Movies.map(m => (<ul key={m.id}> <li> {m.movie} </li> <li> {m.rating} </li> </ul> )  )}
    <button onClick={ChangeMovies}> Change Movies </button>
   </section>
  )
}

export default ArrayObject
