import React from 'react'
import ProductItem from './ProductItem'
const Main = ({ products }) => {

  return (
    <div className='main'>
      {products.map(elem => <ProductItem key={elem.id} product={elem} />) || "loading..."} 
    </div>
  )
}

export default Main