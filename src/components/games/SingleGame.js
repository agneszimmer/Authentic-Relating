import "../../css/Games.css";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
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
          `http://localhost:3333/games/${game_id}`
          /*  `https://arg-api.herokuapp.com/games/${game_id}` */
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

  return (
    <div>
      {game && (
        <Container className="single-game-container">
          <Card className="single-game-card">
            <Card.Header className="single-game-card-header">
              <h2>{game.title}</h2>
            </Card.Header>
            <Card.Body>
              {/* <img className="imageGame" src="{games.image}" alt="img"></img> */}
              <h5>
                Time:{" "}
                {game.time_min === game.time_max
                  ? game.time_min
                  : `${game.time_min} - ${game.time_max} min`}{" "}
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                Players:{" "}
                {game.players_min === game.players_max
                  ? game.players_min
                  : `${game.players_min} - ${game.players_max}`}{" "}
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                Category: {game.category}
              </h5>
              {/*               {game.occasion && <h5>Occasions: </h5>}
              <p>{game.occasion}</p> */}
              <h5>Directions:</h5>
              <p>{game.description}</p>
              {game.variations && <h5>Variations:</h5>}
              <p>{game.variations}</p>
            </Card.Body>
          </Card>
          <PostComment game={game} setComments={setComments} />

          <Comments game={game} comments={comments} setComments={setComments} />
        </Container>
      )}
    </div>
  );
};

export default SingleGame;
