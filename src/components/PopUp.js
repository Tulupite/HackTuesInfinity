import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUp(){
  return(
  <div>
    <Popup trigger={<div className='Alian'></div>} 
     position="top right">
      <div className='PopUpText'>Welcome to the Space!</div>
    </Popup>
  </div>
  )
};

export default PopUp;