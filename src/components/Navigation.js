import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { v4 } from 'uuid'

const Navigation = ({ handleCategory }) => {
    const [categories, setCategories] = useState([])
    useEffect(function () {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(response => setCategories(response))
    }, [])
    return (
        <ul className='navigation'>{categories.map(elem => {
            return <NavItem key={v4()} title={elem} handleCategory={handleCategory} />
        }) || "loading..."}</ul>
    )
}

export default Navigation