import React,{useState} from 'react'

const ProfileState = () => {
    const [profile,setProfile] = useState({
        name: '',
        age: ''
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile,[name]: value,
        }))
    }
  return (
   <section>
    <h2>Profile Challenges</h2>

    <label htmlFor="name">Profile Name</label>
    <input type="text" name="name" onChange={handleChange} value={profile.name}></input>
    <label htmlFor="age">Profile Age</label>
    <input type="number" name="age" onChange={handleChange} value={profile.age}></input>

    <h3>Profile Description</h3>
    <h4>Profile Name : {profile.name}</h4>
    <h4>Profile Age : {profile.age}</h4>

   </section>
  )
}

export default ProfileState
