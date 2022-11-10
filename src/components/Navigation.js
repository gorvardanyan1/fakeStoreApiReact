import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import NavItem from './NavItem'


const Navigation = ({ handleCategory }) => {
    const [categories, setCategories] = useState([])
    useEffect(function () {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(response => setCategories(() => response))
    }, [])
    return (
        <ul className='navigation'>{categories.map(elem => {
            return <NavItem key={v4()} title={elem} handleCategory={handleCategory} />
        })}</ul>
    )
}

export default Navigation