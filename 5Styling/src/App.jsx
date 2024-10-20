import { useState } from 'react'
import viteLogo from '/vite.svg'
import { AiFillApple } from "react-icons/ai";
import { MdHeight, MdWidthFull } from 'react-icons/md';
import StyleCard from './StyleCard';
import ProfileCard from './ProfileCard';


function App() {
 return <section>
  <h1 style={{ color:"red", backgroundColor:"teal" ,padding:"2rem" }}>App Styling</h1>
  <AiFillApple />
  <StyleCard />
  <ProfileCard />
 </section>
}

export default App
