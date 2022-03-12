import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';

function FormSignUp(props){
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Влез
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs">
                <label htmlFor="email" className='form-label'>
                    Имейл:    
                </label>
                <input
                    id = 'email'
                    type='email'
                    name='email'
                    className="form-input"
                    placeholder="Въведи имейл"
                />
                <p />
                <label htmlFor="password" className='form-label'>
                    Парола:   
                </label>
                <input
                    id = 'password'
                    type='password'
                    name='password'
                    className="form-input"
                    placeholder="Въведи парола"
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit'>
                Потвърди
            </Button>
                <Button onClick={props.onHide}>Затвори</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormSignUp;