import React, { useState } from 'react'
import {
    Jumbotron, Container,
    Row, Col, Button, Form
} from 'react-bootstrap'
import './calculator.css'

export default () => {

    const [displayTxt, setDisplayTxt] = useState('0')

    const addNumber = number => {
        setDisplayTxt(displayTxt + number);
    }

    const defineOperation = operation => {

    }

    return (
        <Jumbotron
            style={{
                background: 'transparent !important',
                backgroundColor: '#007bff',
                padding: '5px',
                margin: '5px',
                width: '400px'
            }}>
                <Container>
                    <Row>
                        <Col xs="3">
                            <Button variant="danger"
                                onClick={() => setDisplayTxt('0')}
                            >C</Button>
                        </Col>
                        <Col xs="9">
                            <Form.Control
                                type="text" 
                                name="displayTxt" 
                                className="text-right" 
                                readOnly="readOnly"
                                value={displayTxt}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('7')}
                            >7</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('8')}>8</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('9')}>9</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={() => defineOperation('/')}>/</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('4')}>4</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('5')}>5</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('6')}>6</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={() => defineOperation('*')}>*</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('1')}>1</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('2')}>2</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('3')}>3</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={() => defineOperation('-')}>-</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('0')}>0</Button>
                        </Col>
                        <Col>
                            <Button variant="light">.</Button>
                        </Col>
                        <Col>
                            <Button variant="success">=</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={() => defineOperation('+')}>+</Button>
                        </Col>
                    </Row>
                </Container>
        </Jumbotron>
    )
}
