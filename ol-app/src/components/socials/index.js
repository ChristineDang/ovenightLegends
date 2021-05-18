import React from "react";
import "./socials.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ig from "./ig.png";

function Socials(props) {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <a href="https://www.twitch.tv/formosaboba" target="_blank">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "twitch"]}
            size="3x"
          />
        </a>
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <img className="social-icons" src={ig}></img>
        <img className="social-icons" src={ig}></img>
        <img className="social-icons" src={ig}></img>
        <img className="social-icons" src={ig}></img>
      </Col>
    </Row>
  );
}

export default Socials;
