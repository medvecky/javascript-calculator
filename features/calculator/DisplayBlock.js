import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Display from "./Display";

function DisplayBlock(props) {
    return (
        <div>
          <Container >
              <Row>
                 <Col>
                   <Display content={props.expression} />
                 </Col>
              </Row>
              <Row>
                  <Col id="display" >
                      <Display content={props.currentValue} />
                  </Col>
              </Row>
          </Container>
        </div>
    );
}
 export default DisplayBlock;