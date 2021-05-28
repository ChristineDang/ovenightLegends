import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./contact.css";

export default function ContactForm(props) {
  const [mailerState, setMailerState] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  // When a user types in information to the form
  function handleStateChange(event) {
    setMailerState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  }

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
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "Success") {
          alert("Message was sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          fname: "",
          lname: "",
          message: "",
        });
      });
  };

  return (
    <div className="contact-form">
      <Form onSubmit={submitEmail}>
        <Form.Group controlId="exampleForm.ControlInput">
          <Form.Label>Name</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="First name"
                name="fname"
                onChange={handleStateChange}
                value={mailerState.fname}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last name"
                onChange={handleStateChange}
                name="lname"
                value={mailerState.lname}
              ></Form.Control>
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
        <Button
          className="form-button"
          id="cancelBtn"
          variant="secondary"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          className="form-button"
          id="submitBtn"
          variant="primary"
          type="submit"
          onClick={props.onHide}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
