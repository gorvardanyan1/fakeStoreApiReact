import React, { useState, useReducer } from 'react'
import FilterBar from './FilterBar'
import Main from './Main'
import Navigation from './Navigation'
import "../app.style.scss"
import useFetch from '../hooks/useFetch'
function reducer(state, action) {
    switch (action.type) {
        case 'min':
            return { ...state, min: action.payload }
        case 'max':
            return { ...state, max: action.payload }

        default:
            break;
    }

    return state
}
function Container() {
    const [value, dispatch] = useReducer(reducer, {
        min: 0,
        max: 100000
    })
    const [categories, setCategories] = useState("")
    const products = useFetch('https://fakestoreapi.com/products', categories, value)



    // handler
    function handleCategory(category) {
        console.log(category);
        setCategories("/category/" + category)
    }
    function handleFilter(type, payload) {
        dispatch({
            type, payload
        })
        // setProducts(products.filter(elem => elem.price > value.min && elem.price < value.max))
    }
    // console.log(products);
    // console.log(value);
    return (

        <div className='container'>
            <Navigation handleCategory={handleCategory} />
            <Main products={products} />
            <FilterBar handleFilter={handleFilter} inputValue={value} />
        </div>
    )
}

export default Container