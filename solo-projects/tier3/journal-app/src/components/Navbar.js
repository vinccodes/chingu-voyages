import React from 'react'

const Navbar = (props)=>{
    return(
    <nav>
        <h1>{props.logo}<span>{props.subtitle}</span></h1>
        <div className="nav__links--container">
            <a href="#">Log In</a>
            <a href="#">Sign Up</a>
        </div>
    </nav>
    )
}
export default Navbar