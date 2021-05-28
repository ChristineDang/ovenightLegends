import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import Contact from "../contact";

export default function OurModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Overnight Legends
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Contact Us</h4>
        <div>
          <Contact {...props}></Contact>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
