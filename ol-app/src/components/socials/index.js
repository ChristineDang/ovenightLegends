import React from "react";
import "./socials.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
// import { isCompositeComponent } from "react-dom/test-utils";

import ig from "./ig.png";

function Socials(props) {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <img className="social-icons" src={ig}></img>
      </Col>
      <Col>
        <img className="social-icons" src={ig}></img>
      </Col>
      <Col>
        <img className="social-icons" src={ig}></img>
      </Col>
    </Row>
  );
}

export default Socials;
