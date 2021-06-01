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
            <Col lg={3} md={4} sm={6}>
              <Card className="games-card" key={game._id}>
                <Card.Header>
                  <h5>{game.title}</h5>
                  <p>
                    Players :{" "}
                    {game.players_min === game.players_max
                      ? game.players_min
                      : `${game.players_min} - ${game.players_max}`}{" "}
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; Time :{" "}
                    {game.time_min === game.time_max
                      ? game.time_min
                      : `${game.time_min} - ${game.time_max}`}
                    min{" "}
                  </p>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{game.teaser}</Card.Text>
                  <Link to={`/game/${game._id}`}>
                    <br />
                    <Button block variant="light">
                      details
                    </Button>
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
