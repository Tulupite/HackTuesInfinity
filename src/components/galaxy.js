import Planet from "./planet";
import React, { useState } from "react";

function Galaxy(props) {
    return (
        <div >
            <Planet className="sun"></Planet>
            <Planet className="mercury"></Planet>
            <Planet className="venus"></Planet>
            <Planet className="earth"></Planet>
            <Planet className="mars"></Planet>
            <Planet className="jupiter"></Planet>
            <Planet className="saturn"></Planet>
            <Planet className="uranus"></Planet>
            <Planet className="neptune"></Planet>
            
        </div>
    );
}

export default Galaxy;
