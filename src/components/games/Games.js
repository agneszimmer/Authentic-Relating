import "../../App.css";
import { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://arg-api.herokuapp.com/games");
        const jsonData = await response.json();
        console.log(jsonData);
        setGames(jsonData);
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
      setLoading(false);
    };
    getGames();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="gamesContainer fluid">
      {games &&
        games.map((game) => (
          <Card className="games-card" key={game._id}>
            <Card.Header>{game.title}</Card.Header>
            <Card.Body>
              <Card.Text>{game.teaser}</Card.Text>
              <Link to={`/games/${game._id}`}>
                <Button variant="light">details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default Games;
