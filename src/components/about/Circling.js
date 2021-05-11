import "../../css/About.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

const Circling = () => {
  return (
    <Container className="circling-container">
      <Card className="circling-jumbo">
        <h1>Authentic Relating Leipzig</h1>

        <h3>Skip the small talk and dive into meaningful human connection.</h3>

        <h6>
          Challenge our social patterns . Explore new ways of being with one
          another . Co-create meaningful interactions{" "}
        </h6>
        <h6> Remember our fundamental similarity: BEING HUMAN</h6>

        <br></br>
        <Link to="/events">
          <button type="button" className="btn btn-outline-light ">
            Meet us at our next workshop in Leipzig in June
          </button>
        </Link>
      </Card>
    </Container>
  );
};

export default Circling;
