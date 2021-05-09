import "../../css/Games.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Container, Button, Row, Col, Card } from "react-bootstrap";
import Loading from "../Loading.js";
import GamesCards from "./GamesCards.js";
import GamesLists from "./GamesLists.js";
import Games from "./Games.js";

const SearchGames = () => {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    occasion: "",
    players: "",
    time: "",
  });

  const { title, category, occasion, players, time } = formState;

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://arg-api.herokuapp.com/games/search/query?title=${title}&category=${category}&occasion=${occasion}&players=${players}&time=${time}`
      );
      const jsonData = await response.json();
      setGames(jsonData);
      console.log(games);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Card className="search-card">
        <Card.Header className="search-card-header">
          <Link to="/games">
            <h4>Check out all Authentic Relating Games</h4>
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title className="">or search for </Card.Title>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="form.ControlSelectCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={category}
                    onChange={onChange}
                  >
                    <option></option>
                    <option>Awareness</option>
                    <option>Meditation</option>
                    <option>Fun and Impro</option>
                    <option>Group Bonding</option>
                    <option>Self-Awareness</option>
                    <option>Self-Expression</option>
                    <option>Perspective-Shifting</option>
                    <option>Feedback</option>
                    <option>Curiosity</option>
                    <option>Deep Empathy</option>
                    <option>Movement</option>
                    <option>Touch</option>
                    <option>Edge</option>
                    <option>Oneness</option>
                    <option>Resourcing</option>
                    <option>Appreciation</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="form.ControlSelectOccasion">
                  <Form.Label>Occasion</Form.Label>
                  <Form.Control
                    as="select"
                    name="occasion"
                    value={occasion}
                    onChange={onChange}
                  >
                    <option></option>
                    <option value="Friends">With Friends</option>
                    <option>Relationship</option>
                    <option>First Date</option>
                    <option value="Work">Work (or Work Retreat)</option>
                    <option value="Edgy">Edgy Work Games</option>
                    <option value="Family">With Family/ Kids</option>
                    <option value="Strangers">With Strangers</option>
                    <option value="Conflicts">For Conflict</option>
                    <option>All</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="form.ControlSelectPlayers">
                  <Form.Label>Number of People</Form.Label>
                  <Form.Control
                    as="select"
                    name="players"
                    value={players}
                    onChange={onChange}
                  >
                    <option></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">Breakout Groups (3-8 people)</option>
                    <option value="10">Full Group</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="form.ControlSelectTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    as="select"
                    name="time"
                    value={time}
                    onChange={onChange}
                  >
                    <option></option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                    <option value="15">15 minutes</option>
                    <option value="20">20 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="60">up to a lifetime</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="form.ControlSelectTime">
                  <Form.Label>Search in Titles</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. noticing"
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                </Form.Group>
              </Col>
              <Col md="auto" className="align-item-bottom">
                <Form.Group controlId="form.ControlSelectSearch">
                  <Button
                    variant="secondary"
                    type="submit"
                    className="search-button button"
                  >
                    Find Games
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <GamesCards games={games} />
      {/*     <GamesLists /> */}
    </div>
  );
};

export default SearchGames;
