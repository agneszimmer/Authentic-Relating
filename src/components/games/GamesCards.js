import "../../css/Games.css";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading.js";

const GamesCards = ({ games }) => {
  return (
    <Container className="gamesContainer fluid">
      {games &&
        games.map((game) => (
          <Card className="games-card" key={game._id}>
            <Card.Header>{game.title}</Card.Header>
            <Card.Body>
              <Card.Text>{game.teaser}</Card.Text>
              <Link to={`/game/${game._id}`}>
                <Button variant="light">details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default GamesCards;
