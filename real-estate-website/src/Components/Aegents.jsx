import React from 'react';
import Aegentsbox from './Aegentsbox';
import Agentimage1 from '../images/s1.png';
import Agentimage2 from '../images/s2.png';
import Agentimage3 from '../images/s3.png';

function Aegents() {
    return (
        <div className="agent">
            <div className="a-heading">
                <h1>Agents</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="b-container">
                <Aegentsbox image={Agentimage1} name="jayraj"/>
                <Aegentsbox image={Agentimage2} name="Ali"/>
                <Aegentsbox image={Agentimage3} name="happy"/>
            </div>
        </div>
    )
}

export default Aegents;
