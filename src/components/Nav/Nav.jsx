import React from "react";
import './Nav.css';
import logo from './../assests/logo.png'
const Nav=()=>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="image-logo" src={logo}/>
                <p className="nav-text">Flashtype</p>
            </div>
            <div className="nav-right">
                <a className="nav-link" href="https://github.com/Niyati0612/React_Projects/" >GitHub</a>
            </div>
        </div>
    )
}
export default Nav;