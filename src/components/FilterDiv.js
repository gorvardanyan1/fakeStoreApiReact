import React from 'react'

const FilterDiv = ({ handleFilter, inputValue, children }) => {

    return (
        <div>
            <label htmlFor="min" >Min</label> <input type="range" name="priceMin" id='min' max="2000" onChange={e => handleFilter('min', e.target.value)} value={inputValue.min} />
            <span>{inputValue.min}$</span>
            <br />
            <br />
            <label htmlFor="max">Max</label><input type="range" name="priceMax" id='max' max='2000' onChange={e => handleFilter('max', e.target.value)} value={inputValue.max} />
            <span>{inputValue.max}$</span>
        </div>
    )
}

export default FilterDiv