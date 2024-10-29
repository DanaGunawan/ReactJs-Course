import {useContext,useState} from 'react'
import { UserContext } from './UserContext'
import React from 'react'

const UpdateUser = () => {
    const {UpdateUser} = useContext(UserContext);
    const [User,setUser] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if(User.trim()){
            UpdateUser(User);
            setUser("");
        }
    }
  return (
    <div>
        <h1> Update User Name :</h1>      
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Update User Name' onChange={e  => setUser(e.target.value)}></input> 
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateUser
