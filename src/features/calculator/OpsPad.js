import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useDispatch } from 'react-redux';
import  {addOperation} from './calculatorSlice';

function OpsPad() {
    const dispatch = useDispatch();
    let keys = [
        {
            id: "add",
            value: "+"
        },
        {
            id: "subtract",
            value: "-"
        },
        {
            id: "multiply",
            value: "*"
        },
        {
            id: "divide",
            value: "/"
        },
        {
            id: "equals",
            value: "="
        }
    ];

    let keyPad = keys.map(key =>
        <Row key={key.id}>
            <Col>
                <Button
                    id={key.id}
                    variant="outline-warning"
                    size="lg"
                    block
                    onClick={() => dispatch(addOperation(key.value))}
                >
                    {key.value}
                </Button>
            </Col>
        </Row>
    );

    return (
        <div>
            <Container>
                {keyPad}
            </Container>
        </div>
    );
}

export default OpsPad;