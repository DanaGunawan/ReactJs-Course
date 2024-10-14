import React from "react";

const Product = () => {
    return <ProductInfo productName="Laptop HP" Price={8000000} />;
}

const ProductInfo = ({productName,Price}) => {
    return <section> 
    <h2>{productName}</h2>
    <p>{Price}</p>
     </section>
}

export default Product;