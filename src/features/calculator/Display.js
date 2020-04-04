import React from "react";
import Card from "react-bootstrap/Card";
import './Display.css';

function Display(props) {
    return(
        <div>
            <Card
                border="info"
                text="info"
            >
                <Card.Body className="align-right">
                    {props.content}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Display;