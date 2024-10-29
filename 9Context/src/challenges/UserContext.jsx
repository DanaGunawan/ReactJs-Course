import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [User,SetUser] = useState({name: "Dana Gunawan"})
  const UpdateUser = (NewName) => {
    return SetUser({name: NewName});
  }


  return <UserContext.Provider value={{ User,UpdateUser }}>
        {children}
  </UserContext.Provider>
};

export {UserContext,UserProvider}