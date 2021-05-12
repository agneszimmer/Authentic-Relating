import "../../css/Games.css";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import Loading from "../Loading";
import PostComment from "./PostComment";
import Comments from "./Comments";

const SingleGame = () => {
  const { game_id } = useParams();
  const [game, setGame] = useState();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getGame = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://arg-api.herokuapp.com/games/${game_id}`
        );
        const jsonData = await response.json();
        console.log(jsonData);

        if (response) {
          setGame(jsonData);
        }
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
      setLoading(false);
    };
    getGame();
  }, [game_id]);

  if (loading) return <Loading />;

  return (
    <div>
      {game && (
        <Container className="single-game-container">
          <Card className="single-game-card">
            <Card.Header style={{ textAlign: "center" }}>
              <h2>{game.title}</h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <h5>
                    Time:{" "}
                    {game.time_min === game.time_max
                      ? game.time_min
                      : `${game.time_min} - ${game.time_max} min`}{" "}
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; Players:{" "}
                    {game.players_min === game.players_max
                      ? game.players_min
                      : `${game.players_min} - ${game.players_max}`}{" "}
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; Category: {game.category}
                  </h5>
                  {/*               {game.occasion && <h5>Occasions: </h5>}
              <p>{game.occasion}</p> */}
                  <h5>Directions:</h5>
                  <p>{game.description}</p>
                  {game.variations && <h5>Variations:</h5>}
                  <p>{game.variations}</p>
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                  <img
                    className="imageGame"
                    src={`http://localhost:3333/${game.image}`}
                    alt="img"
                  ></img>
                </Col>
              </Row>
            </Card.Body>
            <PostComment game={game} setComments={setComments} />
          </Card>

          <Comments game={game} comments={comments} setComments={setComments} />
        </Container>
      )}
    </div>
  );
};

export default SingleGame;
