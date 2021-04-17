import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
// import background from "../background/stars.jpg";

function Footer(props) {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>Overnight Legends</Col>
        <Col>Logo</Col>
        <Col>Contact Us</Col>
      </Row>
    </Container>
  );
}

export default Footer;
