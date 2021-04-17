import React from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

// // Variables initialized
// const activeCard = document.querySelector(".card-selection");

// //Event handlers
// activeCard.addEventListener("click", function () {
//   console.log("I am active now");
//   activeCard.style.transform = "scale(1)";
// });

function Cards(props) {
  return (
    <Card className="card-selection">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
