import React, { useState } from "react";
import PlanetsModal from './Navbar/PlanetsModal';

function Planet(props){
    const [ModalShow, setModalShow] = React.useState(false);
    
    return(
        <div>
            <div className={props.className} onClick={() => setModalShow(true)}/>
            <PlanetsModal show={ModalShow} planetName = {props.classNameBG} onHide={() => setModalShow(false)} />
        </div>
    ); 
  };
  

  export default Planet;