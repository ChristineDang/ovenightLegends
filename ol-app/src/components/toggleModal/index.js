import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import OurModal from "../modal";
import "./ToggleModal.css";
import { FaEnvelope } from "react-icons/fa";

export default function ToggleModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="btn-circle"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        <FaEnvelope />
      </Button>

      <OurModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
