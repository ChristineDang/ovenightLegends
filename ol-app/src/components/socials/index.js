import React from "react";
import "./socials.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FaInstagram, FaTwitch, FaTwitter, FaFireAlt } from "react-icons/fa";

import ig from "./ig.png";

function Socials(props) {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <FaInstagram className="icons" size="3rem" />
        <FaTwitch className="icons " size="3rem" />
        <FaTwitter className="icons" size="3rem" />
        <FaFireAlt className="icons" size="3rem" />
      </Col>
    </Row>
  );
}

export default Socials;
