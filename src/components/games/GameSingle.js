import "../../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import circle from "../../pictures/circle.png"; //loading

const SingleGame = () => {
  const { game_id } = useParams();
  const [game, setGame] = useState();
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
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getGame();
  }, [game_id]);

  if (loading)
    return <img className="loadingImage" src={circle} alt="loading..." />; //spinner einfügen
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="singleGameContainer">
      {game && (
        <div key={game.game_id}>
          {console.log(game.title)}

          <img className="imageGame" src="{games.image}" alt="img"></img>

          <h2>{game.title}</h2>
          <h5>
            Time:{" "}
            {game.time_min === game.time_max
              ? game.time_min
              : `${game.time_min} - ${game.time_max} min`}{" "}
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            Players:{" "}
            {game.players_min === game.players_max
              ? game.players_min
              : `${game.players_min} - ${game.players_max}`}
          </h5>
          <h5>Directions:</h5>
          <p>{game.description}</p>
          {game.variations && <h5>Variations:</h5>}
          <p>{game.variations}</p>
        </div>
      )}
    </div>
  );
};

export default SingleGame;
