import "../../App.css";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
        `https://arg-api.herokuapp.com/games/search/query?title=${title}&category=${category}&occasion={occasion}&players={players}&time={time}`
      );
      const jsonData = await response.json();
      setGames(jsonData);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  /*  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3333/games/search/query?title=${title}&category=${category}`
        );
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getGames();
  }, [formState]); */

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>
              Please choose category, occasion, players and time to search for
              games
            </h2>
            <br></br>
          </Col>
        </Row>
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
                  <option value="awareness">Awareness Games</option>
                  <option>Meditations</option>
                  <option>Fun and Improv Games</option>
                  <option>Group Bonding Games</option>
                  <option>Self-Awareness Games</option>
                  <option>Self-Expression Games</option>
                  <option>Perspective-Shifting Games</option>
                  <option>Feedback Games</option>
                  <option>Curiosity Games</option>
                  <option>Deep Empathy Games</option>
                  <option>Movement Games</option>
                  <option>Touch Games</option>
                  <option>Edge Games</option>
                  <option>Oneness Games</option>
                  <option>Resourcing Games</option>
                  <option>Appreciation Games</option>
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
                  <option>With friends</option>
                  <option>Relationship</option>
                  <option>First date</option>
                  <option>Work (or work retreat)</option>
                  <option>Edgy Work Games</option>
                  <option>With family/kids</option>
                  <option>With strangers</option>
                  <option>For conflict</option>
                  <option>All</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="form.ControlSelectPlayers">
                <Form.Label>Players</Form.Label>
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
                  <option value="120">2 hours</option>
                  <option value="130">a lifetime</option>
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
            <Col>
              <Form.Group controlId="form.ControlSelectSearch">
                <Button variant="dark outline-dark" type="submit">
                  Search
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Link to="/games">
          <button type="button">Check out all games</button>
        </Link>
      </Container>
    </div>
  );
};

export default SearchGames;
