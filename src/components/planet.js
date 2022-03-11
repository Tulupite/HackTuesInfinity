import React, { useState } from "react";

function Planet(props){
    function getInfo(){
        
        console.log('Clicked - ' + props.className);
    }
    return(
            <div className={props.className} onClick={getInfo}/>
    ); 
  };
  

  export default Planet;