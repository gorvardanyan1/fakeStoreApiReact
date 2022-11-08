import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <div className='productItem'>
            {/* <img src={product.image} alt="productImg" /> */}
            <div style={{ backgroundImage: `url(${product.image})` }}></div>
            <h3>{product.title}</h3>
            <h4>{product.price}$</h4>
            <h6>{product.description}</h6>
            <button>SEE More</button>
        </div>
    )
}
export default ProductItem