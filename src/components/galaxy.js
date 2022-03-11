import Planet from "./planet";
import React, { useState } from "react";


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
            
        </div>
    );
}

export default Galaxy;
