import React from 'react'

const User = () => {
    const User = [
        {name: 'John', email: 'john@example.com',country : 'United States'},
        {name: 'Dewa', email: 'dewa@example.com',country : 'INA'},
        {name: 'kadeko', email: 'kadeko@example.com',country :'Japan'}
    ];

  return (
    <div>
        {User.map(({name,email,country}) => (
            <ul key={Math.random()}>
                <li>{name}</li>
                <li>{email}</li>
                <li>{country}</li>
            </ul>
        ))}  
    </div>
  )
}

export default User
