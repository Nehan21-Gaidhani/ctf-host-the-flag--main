import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './cardComp.css';

const CardComp = ({ title, description, alertDesc, hintUrl, correctAnswer }) => {
    const [showModal, setShowModal] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track if form is submitted
    const [isCorrect, setIsCorrect] = useState(false); // State to track if answer is correct

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleHintButtonClick = () => {
        if (hintUrl) {
            window.open(hintUrl, '_blank');
        }
    };

    const handleSave = () => {
        setShowModal(false);
        setSubmitted(true); // Set submitted state to true
        // Check if the submitted answer is correct
        if (correctAnswer && textInput.toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
             // Set isCorrect state to true
        }
        setTextInput('');
    };
    

    return (
        <>
            <div onClick={handleCardClick}>
                <Card style={{ width: '18rem', borderRadius: '20px', backgroundColor: isCorrect ? '#4CAF50' : (submitted ? '#f07b84' : 'inherit'), color: submitted ? 'white' : 'inherit' }} className='mx-5 my-5 custom-card' id='custom-card'>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description }</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <Modal id="modal" show={showModal} onHide={handleCloseModal} centered>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
                
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{alertDesc}</p>
                    {hintUrl && (
                        <Button variant="info" onClick={handleHintButtonClick}>
                            View Hint
                        </Button>
                    )}
                    <Form>
                        <Form.Group controlId="formTextInput">
                            <Form.Label className='mt-3'>Your response :</Form.Label>
                            <Form.Control type="text" value={textInput} onChange={handleInputChange} placeholder="CTF(...)" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardComp;
