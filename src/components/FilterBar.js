import React, { useState } from 'react'
import { ImFilter } from 'react-icons/im'
import FilterDiv from './FilterDiv'
const FilterBar = ({ handleFilter, inputValue }) => {
    const [openClose, setOpenClose] = useState(false)

    return (
        <div className='filterbar'>
            <ImFilter onClick={() => setOpenClose(!openClose)} />
            {openClose &&
                <FilterDiv handleFilter={handleFilter} inputValue={inputValue} />
            }
        </div>
    )
}

export default FilterBar