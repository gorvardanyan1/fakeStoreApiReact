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
            return state
    }

}
function Container() {
    const [value, dispatch] = useReducer(reducer, {
        min: 0,
        max: 2000
    })
    const [categoriesName, setCategoriesName] = useState("")
    const products = useFetch('https://fakestoreapi.com/products', categoriesName, value)

    // handler
    function handleCategory(category) {
        setCategoriesName(() => "/category/" + category)
    }
    function handleFilter(type, payload) {
        dispatch({
            type,
            payload
        })

    }

    return (

        <div className='container'>
            <Navigation handleCategory={handleCategory} />
            <Main products={products} />
            <FilterBar handleFilter={handleFilter} inputValue={value} />
        </div>
    )
}



export default Container