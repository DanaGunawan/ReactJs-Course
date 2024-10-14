import React from "react";

const Product = () => {

    const productInfo = [{id:1,name:'Laptop',price: 5000},{id:2,name:'Handphone',price: 3000},{id:3,name:'Tv',price: 4000}];

    return <div>
        {productInfo.map(({id,name,price}) =>(
            <ul key={Math.random()}>
                <li> {id} </li>
                <li> {name} </li>
                <li> ${price} </li>
            </ul>
        ))}
    </div>
}

export default Product;