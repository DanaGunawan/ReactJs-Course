import React from 'react'

const ProductInfo = () => {
    const productinfo = {
        name: 'Laptop',
        price: 5000,
        availabilty: false
    }
  return (
    <div>
      <h1>Product Details</h1>
      <p>ProductName : {productinfo.name}</p>
      <p>ProductPrice : {productinfo.price}</p>
      <p>Availabilty : {productinfo.availabilty ? 'available' : 'Not Available'}</p>
    </div>
  )
}

export default ProductInfo;
