import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import OurModal from "../modal";

export default function ToggleModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Contact us
      </Button>

      <OurModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
