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
          Информация за {props.planetName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Какво е {props.planetName} ?</h4>
        <p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Добави коментар</Button>
        <Button onClick={props.onHide}>Затвори</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlanetsModal;