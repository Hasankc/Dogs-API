import React from 'react';
import './menu.css'

const toggleMenuClasses = () => {
    let hamburgerIcon = document.getElementById('mobile-menu')
    hamburgerIcon.classList.toggle('is-active')
    let mobileMenu = document.getElementById('menu-container')
    mobileMenu.classList.toggle('opened')
}

const Menu = () => {
    return (
        <div>
            <div className="mobile-menu" id="menu-container" onClick={toggleMenuClasses}>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-logo"><img className="logo" src={require("../../asssets/Dog-logo.png")} alt="dog"/></div>
                <div className="menu-title">Breeds</div>
            </div>
        </div>
    )
}
export default Menu