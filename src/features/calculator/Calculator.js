import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DisplayBlock from "./DisplayBlock";
import './Calculator.css'
import OpsPad from "./OpsPad";
import NumPad from "./NumPad";

function Calculator() {

    return(
        <div>
            <Container className="main">
                <Row>
                    <Col>
                       <DisplayBlock />
                    </Col>
                </Row>
                <Row>
                    <Col xs="9">
                        <NumPad />
                    </Col>
                    <Col>
                        <OpsPad />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Calculator;