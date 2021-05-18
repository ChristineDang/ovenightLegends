import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  const [mailerState, setMailerState] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
  // When a user types in information to the form
  function handleStateChange(event) {
    setMailerState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="contact-form">
      <Form onSubmit={submitEmail}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="First name"
                onChange={handleStateChange}
                name="first-name"
                value={mailerState.fname}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                onChange={handleStateChange}
                name="last-name"
                value={mailerState.lname}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />{" "}
        </Form.Group>
      </Form>
    </div>
  );
}
