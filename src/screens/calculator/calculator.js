import React, { useState } from 'react'
import {
    Jumbotron, Container,
    Row, Col, Button, Form
} from 'react-bootstrap'
import './calculator.css'
import CalculatorService from './calculator.service'

export default () => {
    const [calculate, concatenateNumber, SUM, SUBTRACTION, MULTIPLICATION, DIVISION] = CalculatorService();

    const [displayTxt, setDisplayTxt] = useState('0')
    const [number1, setNumber1] = useState('0')
    const [number2, setNumber2] = useState(null)
    const [operation, setOperation] = useState(null)

    const addNumber = number => {
        let result
        if(operation) {
            result = concatenateNumber(number2, number)
            setNumber2(result)
        }
        else {
            result = concatenateNumber(number1, number)
            setNumber1(result)
        }
        setDisplayTxt(result)
    }

    const defineOperation = op => {
        if(!operation) {
            setOperation(op)
            return
        }
        if(number2) {
            const result = calculate(parseFloat(number1), parseFloat(number2), operation)
            setOperation(op)
            setNumber1(result.toString())
            setNumber2(null)
            setDisplayTxt(result.toString())
        }
    }

    const calculateAction = () => {
        if (number2) {
            const result = calculate(parseFloat(number1), parseFloat(number2), operation)
            setDisplayTxt(result.toString())
        }
    }

    const clearDisplayText = () => {
        setDisplayTxt('0')
        setNumber1('0')
        setNumber2(null)
        setOperation(null)
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
                                onClick={clearDisplayText}
                            >C</Button>
                        </Col>
                        <Col xs="9">
                            <Form.Control
                                type="text" 
                                name="displayTxt" 
                                className="text-right" 
                                readOnly="readOnly"
                                value={displayTxt}
                                data-testid="displayTxt"
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
                                onClick={() => defineOperation(DIVISION)}>/</Button>
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
                                onClick={() => defineOperation(MULTIPLICATION)}>*</Button>
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
                                onClick={() => defineOperation(SUBTRACTION)}>-</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('0')}>0</Button>
                        </Col>
                        <Col>
                            <Button variant="light"
                                onClick={() => addNumber('.')}>.</Button>
                        </Col>
                        <Col>
                            <Button variant="success"
                                onClick={calculateAction}>=</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={() => defineOperation(SUM)}>+</Button>
                        </Col>
                    </Row>
                </Container>
        </Jumbotron>
    )
}
