import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button} from 'react-bootstrap';

function PlanetsModal(props) { 
  const getPlanet = () => {
    const requestOptions = {
        method: 'GET', headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({description: description}),
        mode: 'cors'   
    };     
    console.log(requestOptions);
    fetch('http://localhost:8080/all', requestOptions)         
    .then(response => {if(!response.ok) throw new Error(response.status)
    else{
        props.onHide();
    }
    });
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Information about {props.planetName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>What is {props.planetName} ?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={getPlanet}>Show Information</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlanetsModal;