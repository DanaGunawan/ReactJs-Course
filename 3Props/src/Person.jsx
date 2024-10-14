import React from 'react'

const Person = () => {
  return (
    <Personal Name="Dewa Kadek Dana Gunawan" Age={18}/>
  )
}

const Personal = ({Name,Age}) => {
    return (<section> <h2>{Name}</h2><p>{Age}</p> </section>)
}

export default Person;
