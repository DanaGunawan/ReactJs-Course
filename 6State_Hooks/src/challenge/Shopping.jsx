import React, { useState } from "react";

const Shopping = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setName("");
    setQuantity("");
  };

  return (
    <section>
      <h1>Shoping List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name</label>
        <input
          type="text"
          name="name"
          placeholder="input new item"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
          
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          placeholder="input new quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
          {" "}
        
        <button type="submit">Add item</button>
      </form>

      <h1>Item Description</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shopping;

