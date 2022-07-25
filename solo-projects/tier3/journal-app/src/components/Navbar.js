import React from 'react'
import '../styles.css'

const Navbar = (props)=>{
    return(
    <nav>
        <h1 className="nav__logo">{props.logo}<span className="nav__logo--subtitle">{props.subtitle}</span></h1>
        <div className="nav__links--container">
            <a className="nav__links--link" href="#">Log In</a>
            <a className="nav__links--link" href="#">Sign Up</a>
        </div>
    </nav>
    )
}
export default Navbar