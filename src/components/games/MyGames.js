import "../../css/Games.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Loading from "../Loading";
import GamesCards from "./GamesCards.js";

const MyGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://arg-api.herokuapp.com/games/search/query?&players=2`
        );
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

  /*   const pageCount = 10;
  const changePage = ({ selected }) => {
    setPageNum(selected);
  }; */

  return <GamesCards games={games} />;
};

export default MyGames;
