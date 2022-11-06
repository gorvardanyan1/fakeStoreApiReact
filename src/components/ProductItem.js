import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <div className='productItem'>{product.title}</div>
    )
}

export default ProductItem