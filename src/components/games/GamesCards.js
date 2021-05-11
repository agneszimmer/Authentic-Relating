import "../../css/Games.css";
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const GamesCards = ({ games }) => {
  return (
    <Container className="gamecard-container fluid">
      <Row>
        {games &&
          games.map((game) => (
            <Col lg={3}>
              <Card className="games-card" key={game._id}>
                <Card.Body>
                  <h5>{game.title}</h5>
                  <Card.Text>{game.teaser}</Card.Text>
                  <Link to={`/game/${game._id}`}>
                    <Button variant="light">details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default GamesCards;
