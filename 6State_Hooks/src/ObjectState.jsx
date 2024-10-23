import React from 'react'
import { useState } from 'react'

const Object = () => {

    const [Movies,SetMovies] = useState({
        title: "Batman",
        rating: 7,
    })

    const UpdateRating = () => {
        // const copyMovie = {
        //     ...Movies,rating:5
        // }

        // SetMovies(copyMovie)

        SetMovies({...Movies,rating:5})
    }

  return (
   <section>
    <h1>{Movies.title}</h1>
    <h1>{Movies.rating}</h1>
    <button onClick={UpdateRating}> Update Ratings </button>
   </section>
  )
}

export default Object
