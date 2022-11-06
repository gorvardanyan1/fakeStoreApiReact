import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
const Main = () => {
  const [products, setProducts] = useState([])
  useEffect(function () {
    fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(response => setProducts(response))
  }, [])
  console.log(products);
  return (
    <div className='main'>
      {products.map(elem => <ProductItem key={elem.id} product={elem} />)}
    </div>
  )
}

export default Main