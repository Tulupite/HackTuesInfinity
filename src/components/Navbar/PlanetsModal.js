import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button} from 'react-bootstrap';

function PlanetsModal(props) { 
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
        <p>{props.planetInfo}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Show Information</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlanetsModal;