import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { v4 } from 'uuid'

const Navigation = () => {
    const [categories, setCategories] = useState([])
    useEffect(function () {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(response => setCategories(response))
    }, [])
    return (
        <ul className='navigation'>{categories.map(elem => {
            return <NavItem key={v4()} title={elem} />
        })}</ul>
    )
}

export default Navigation