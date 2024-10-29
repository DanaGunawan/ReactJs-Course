import { useContext } from "react"
import { UserProvider,UserContext } from "./UserContext"

const UserProfile = () => {
  const {User} = useContext(UserContext);

  return (
    <section>
      <h1>User Profile</h1>
      <p>Name : {User.name}</p>
    </section>
  )
}

export default UserProfile
