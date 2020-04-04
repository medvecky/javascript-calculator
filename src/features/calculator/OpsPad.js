import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

function OpsPad() {
    let keys = [
        {
            id: "add",
            value: "+",
            action: {}
        },
        {
            id: "subtract",
            value: "-",
            action: {}
        },
        {
            id: "multiply",
            value: "*",
            action: {}
        },
        {
            id: "divide",
            value: "/",
            action: {}
        },
        {
            id: "equals",
            value: "=",
            action: {}
        }
    ];

    let keyPad = keys.map(key =>
        <Row>
            <Col>
                <Button
                    id={key.id}
                    variant="outline-warning"
                    size="lg"
                    block
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