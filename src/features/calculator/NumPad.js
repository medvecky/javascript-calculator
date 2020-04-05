import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import {
    clear,
    addNumber
} from './calculatorSlice';

function NumPad() {
    const dispatch = useDispatch();

    let keys = [
        {
            id: "one",
            value: "1"
        },
        {
            id: "two",
            value: "2"
        },
        {
            id: "three",
            value: "3"
        },
        {
            id: "four",
            value: "4"
        },
        {
            id: "five",
            value: "5"
        },
        {
            id: "six",
            value: "6"
        },
        {
            id: "seven",
            value: "7"
        },
        {
            id: "eight",
            value: "8"
        },
        {
            id: "nine",
            value: "9"
        }
    ];

    let keyPad = keys.map(key =>
    <Col key={key.id}>
        <Button
            id={key.id}
            variant="outline-info"
            block
            size="lg"
            onClick={() => dispatch(addNumber(key.value))}
        >
            {key.value}
        </Button>
    </Col>
    );
    return(
        <div>
            <Container>
                <Row>
                    {keyPad.slice(6, 9)}
                </Row>
                <Row>
                    {keyPad.slice(3, 6)}
                </Row>
                <Row>
                    {keyPad.slice(0, 3)}
                </Row>
                <Row>
                    <Col>
                        <Button
                            id="clear"
                            variant="outline-danger"
                            block
                            size="lg"
                            onClick={() => dispatch(clear())}
                        >
                         C
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            id="zero"
                            variant="outline-info"
                            block
                            size="lg"
                            onClick={() => dispatch(addNumber("0"))}
                        >
                            0
                        </Button>
                    </Col>
                    <Col>
                    <Button
                        id="decimal"
                        variant="outline-info"
                        block
                        size="lg"
                    >
                        .
                    </Button>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NumPad;