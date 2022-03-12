import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';

function FormSignUp(props){
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    const login = () => {
        console.log(password);
        console.log(email);
        
        //const requestOptions = {
        //    method: 'POST', headers: { 'Content-Type': 'application/json' }, 
            //body: JSON.stringify({ email: email, password: password}),
            //mode: 'cors'   
        //};     
        //console.log(requestOptions);
        //fetch('http://localhost:8080/add', requestOptions)         
        //.then(response => {if(!response.ok) throw new Error(response.status)
        //else{
        //    props.onHide();
        //}
        //});
    }

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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
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