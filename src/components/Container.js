import React from 'react'
import FilterBar from './FilterBar'
import Main from './Main'
import Navigation from './Navigation'
import "../app.style.scss"

function Container() {
    return (
        <div className='container'>
            <Navigation />
            <Main />
            <FilterBar />
        </div>
    )
}

export default Container