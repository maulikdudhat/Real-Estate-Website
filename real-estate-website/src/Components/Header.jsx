import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar/>
            <div className="intro">
                <p>Looking for a property !</p>
                <h1><span>Buy</span>and<span>Sell</span> Propertys</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="header-btn">Details</a>
            </div>
        </div>
    )
}

export default Header;
