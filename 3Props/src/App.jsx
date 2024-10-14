import React from 'react';
import Person from './Person';
import Product from './Product'
import Card from './Components/card';

function App() {
  return <section><Users name="Dewa" /> 
        <Person />
        <Product />
        <Card>
          <h1>this is my Card</h1>
          <p>Card no 1</p>
        </Card>
        <Card>
          <h1>this is my Card</h1>
          <p>Card no 2</p>
        </Card>
        <Card>
          <h1>this is my Card</h1>
          <p>Card no 3</p>
        </Card>
  </section> ;
}

const Users = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
    </section>
  );
}

export default App;
