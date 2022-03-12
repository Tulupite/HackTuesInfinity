import Planet from "./planet";
import React from "react";
import PopUp from "./PopUp";

function Galaxy(props) {
    return (
        <div >
            <Planet className="Sun" classNameBG="Слънцето"></Planet>
            <Planet className="Mercury" classNameBG="Меркурий"></Planet>
            <Planet className="Venus" classNameBG="Венера"></Planet>
            <Planet className="Earth" classNameBG="Земята"></Planet>
            <Planet className="Mars" classNameBG="Марс"></Planet>
            <Planet className="Jupiter" classNameBG="Юпитер"></Planet>
            <Planet className="Saturn" classNameBG="Сатурн"></Planet>
            <Planet className="Uranus" classNameBG="Уран"></Planet>
            <Planet className="Neptune" classNameBG="Нептун"></Planet>
            <PopUp/>
        </div>
    );
}

export default Galaxy;
