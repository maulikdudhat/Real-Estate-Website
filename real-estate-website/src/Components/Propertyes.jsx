import React from 'react';
import Propertyesbox from './Propertybox';
import pimge1 from '../images/p1.png';
import pimge2 from '../images/p2.png';
import pimge3 from '../images/p3.png';

function Propertyes() {
    return (
        <div className="product">
            <div className="p-heading">
                <h3>Properties</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i</p>

            </div>
            <div className="product-container">
                <Propertyesbox image={pimge1} name="torento" price="$500000"/>
                <Propertyesbox image={pimge2} name="khanderi-medan" price="$700000"/>
                <Propertyesbox image={pimge3} name="ahemdabad" price="$500000"/>
                
            </div>
            
        </div>
    )
}

export default Propertyes;
