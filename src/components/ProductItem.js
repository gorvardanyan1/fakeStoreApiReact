import React from 'react'

const ProductItem = ({ product }) => {
    const description = product.description.split(" ")
    const title = product.title.split(" ")
    return (
        <div className='productItem'>
            
            <div style={{ backgroundImage: `url(${product.image})` }}></div>
            <h3>{title.slice(0,5).join(" ")}</h3>
            <h4>{product.price}$</h4>
            <h6>{description.slice(0,15).join(" ")}...</h6>
            <button>SEE More</button>
        </div>
    )
}
export default ProductItem