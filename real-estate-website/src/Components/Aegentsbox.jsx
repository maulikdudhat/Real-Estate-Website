import React from 'react'

function Aegentsbox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} alt=''/>
            </div>
            <div className="a-b-text">
                <h3>{props.name}</h3>
                <a href="#" className="agent-btn">Lern More</a>
            </div>
        </div>
    )
}

export default Aegentsbox
