import React from "react";
import ExampleCard from "./components/ExampleCard";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

export default function App(){

    return(
        <div className="container">
            <NavBar/>
            <Main/>
            <ExampleCard/>
        </div>
    )
}