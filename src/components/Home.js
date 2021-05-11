import "../css/Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="home-container">
      <Card className="home-jumbo">
        <div className="home">
          <h1>Authentic Relating Leipzig</h1>
        </div>
        <div className="home">
          <h3>
            Skip the small talk and dive into meaningful human connection.
          </h3>
        </div>
        <div className="home">
          <h6>
            Challenge our social patterns . Explore new ways of being with one
            another . Co-create meaningful interactions{" "}
          </h6>
          <h6> Remember our fundamental similarity: BEING HUMAN</h6>
        </div>
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

export default Home;
