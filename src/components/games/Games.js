import "../../App.css";

import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";

import circle from "../../pictures/circle.png";

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

        if (response) {
          setGames(jsonData);
        }
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getGames();
  }, []);

  /*   useEffect(() => {
    const getGames = async () => {
      const res = await axios
        .get("http://localhost:3333/")
        .catch((error) => console.log(error.message));
    };
    getGames();
    console.log(res);
  }, []);   
  
  useEffect(() => {
        fetch("http://localhost:3333/")     
        setLoading(true); 
        .then((response) => {
            setArticles(response.items)
            setLoading(false)
        })
        .catch(err => console.log(err.message))
    }, []); */

  if (loading)
    return <img className="loadingImage" src={circle} alt="loading..." />; //spinner einfügen
  if (error) return <div>Error: {error.message}</div>;

  const ParamsGame = (props) => {
    const { game_id } = useParams();
  };

  return (
    <div className="gamesContainer fluid">
      {games &&
        games.map((game) => (
          <Card key={game.game_id} style={{ width: "18rem" }}>
            {console.log(game.image)}
            <Card.Img variant="top" src="{games.image}" />
            <Card.Body>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>{game.teaser}</Card.Text>
              <Link to={`/games/${game.game_id}`}>
                <Button variant="light">play</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Games;
