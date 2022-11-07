import React from 'react'

const NavItem = ({ title, handleCategory }) => {
    return (
        <li className='navItem'><h3 onClick={(e) => handleCategory(title)}>{title}</h3></li>
    )
}

export default NavItem