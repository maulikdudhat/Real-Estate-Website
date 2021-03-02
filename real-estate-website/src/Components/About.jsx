import React from 'react';
import aboutimage from '../images/about.png'

function About() {
    return (
        <div className="about">
            <div className="about-model">
                <img src={aboutimage} alt='about-img'/>
            </div>
            <div className="about-text">
                <h2>We are the Best<br/>Real Estate company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>View More Details</button>
            </div>
        </div>
    )
}

export default About;
