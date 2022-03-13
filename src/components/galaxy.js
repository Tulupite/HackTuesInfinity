import Planet from "./planet";
import React from "react";
import PopUp from "./PopUp";

function Galaxy(props) {
    return (
        <div >
            <Planet className="Sun"></Planet>
            <Planet className="Mercury"></Planet>
            <Planet className="Venus"></Planet>
            <Planet className="Earth"></Planet>
            <Planet className="Mars"></Planet>
            <Planet className="Jupiter"></Planet>
            <Planet className="Saturn"></Planet>
            <Planet className="Uranus"></Planet>
            <Planet className="Neptune"></Planet>
            <PopUp/>
        </div>
    );
}

export default Galaxy;
