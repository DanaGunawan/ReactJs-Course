import React from 'react'

const Greetings = ({TimeOfTheDay}) => {
  if(TimeOfTheDay == "morning"){
    return <h1>Good Morning, Everyone</h1>
  }
  else if(TimeOfTheDay == "afternoon"){
    return <h1>Good Afternoon, Everyone</h1>
  }
  else{
    return <h1>The time is unknown</h1>
  }
}

export default Greetings;
