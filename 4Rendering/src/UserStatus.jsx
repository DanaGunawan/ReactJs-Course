import React from 'react'





const UserStatus = ({isAdmin,isLogin}) => {
  
 if(isAdmin == true && isLogin == true){
    return <h1>Welcome Admin </h1>
 }
 else if(isAdmin == false && isLogin == true){
    return <h1> welcome Users </h1>
 }
 else{
    return <h1>Your password Incorect</h1>
 }
}

export default UserStatus;
