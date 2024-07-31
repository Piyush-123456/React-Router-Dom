import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <center style={{ display: "flex", alignItems: "center", justifyContent: "center",gap:'150px' }}>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
            <Link to="/contact">
                Contact
            </Link>
        </center    >
    )
}

export default Header