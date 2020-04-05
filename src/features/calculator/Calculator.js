import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DisplayBlock from "./DisplayBlock";
import './Calculator.css'
import OpsPad from "./OpsPad";
import NumPad from "./NumPad";
import {useSelector} from 'react-redux';
import {
    selectCurrentValue,
    selectExpression
} from "./calculatorSlice";

function Calculator() {
    const expression = useSelector(selectExpression);
    const currentValue = useSelector(selectCurrentValue);

    return (
        <div>
            <Container className="main">
                <Row>
                    <Col>
                        <DisplayBlock
                            expression={expression}
                            currentValue={currentValue}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="9">
                        <NumPad/>
                    </Col>
                    <Col>
                        <OpsPad/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Calculator;