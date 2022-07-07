import React from "react"
import "../App.css";

export default function Header(){
    return(
        <div>
            <img className="header-image" src={require("../images/Group 77.png")} />
            <h1 className="header-ele">Online Experiences</h1>
            <p className="header-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

