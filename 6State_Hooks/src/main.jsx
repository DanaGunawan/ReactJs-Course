import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Object from './ObjectState.jsx'
import ArrayObject from './ArrayObjectState.jsx'
import ComponentMix from './componentMix.jsx'
import Increment from './challenge/increment.jsx'
import TodoList from './challenge/todoList.jsx'
import ProfileState from './challenge/profileState.jsx'
import Shopping from './challenge/Shopping.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Increment />
   <TodoList /> 
    <ProfileState />
   <Shopping />

  </StrictMode>,
)
