import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function NumPad() {
    let keys = [
        {
            id: "one",
            value: "1",
            action: {}
        },
        {
            id: "two",
            value: "2",
            action: {}
        },
        {
            id: "three",
            value: "3",
            action: {}
        },
        {
            id: "four",
            value: "4",
            action: {}
        },
        {
            id: "five",
            value: "5",
            action: {}
        },
        {
            id: "six",
            value: "6",
            action: {}
        },
        {
            id: "seven",
            value: "7",
            action: {}
        },
        {
            id: "eight",
            value: "8",
            action: {}
        },
        {
            id: "nine",
            value: "9",
            action: {}
        }
    ];

    let keyPad = keys.map(key =>
    <Col>
        <Button
            id={key.id}
            variant="outline-info"
            block
            size="lg"
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