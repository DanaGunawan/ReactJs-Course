import { useState } from 'react'
import viteLogo from '/vite.svg'
import UserProfile from './challenges/UserProfile'
import { UserProvider } from './challenges/UserContext'
import UpdateUser from './challenges/UpdateUser'

function App() {
  return (
    <section>
        <UserProvider>
            <UserProfile />
            <UpdateUser />
        </UserProvider>
    </section>
  )
}

export default App
