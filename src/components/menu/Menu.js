import React from 'react';
import './menu.css'


const Menu = () => {
    return (
        <div>
            <div className="mobile-menu">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </div>
            <div className="menu-container">
                <div className="menu-logo"><img className="logo" src={require("../../asssets/Dog-logo.png")} alt="dog"/></div>
            </div>
        </div>
    )
}
export default Menu