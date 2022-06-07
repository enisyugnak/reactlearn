import React from "react"
import navLogo from "../images/react-icon-small.png"

export default function NavBar (){

    return (
        <nav>
            <img src={navLogo} className="nav--icon"></img>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}