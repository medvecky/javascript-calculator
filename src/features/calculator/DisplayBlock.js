import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Display from "./Display";

function DisplayBlock() {
    return (
        <div>
          <Container >
              <Row>
                 <Col>
                   <Display content="Expression" />
                 </Col>
              </Row>
              <Row>
                  <Col id="display" >
                      <Display content="Current value" />
                  </Col>
              </Row>
          </Container>
        </div>
    );
}
 export default DisplayBlock;