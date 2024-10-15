import { useState } from 'react'
import Condition from './condition&&'
import WeatherCheck from './Weather'
import UserStatus from './UserStatus'
import Greetings from './Greetings'

const Valid = () => <h1>Password is Valid</h1>
const Invalid = () => <h1>Password is Invalid</h1>

const Password = ({condition}) => {
  if (condition) {
    return <Valid />
  }

  return <Invalid />
}

function App() {
  return (
    <section>
      <Password condition={true} />
      <WeatherCheck temp={-5} />
      <UserStatus isAdmin={false} isLogin={true} />
      <Greetings TimeOfTheDay={"afternoon"} />
      <Condition />
    </section>
  )
}

export default App
