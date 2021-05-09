/* import React, { createContext, useState, useEffect } from "react";
import Loading from "../components/Loading";

export const GamesContext = createContext();

const GamesState = ({ children }) => {
  const [games, setGames] = useState([]);
  const [singleGame, setSingleGame] = useState([]);
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

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GamesContext.Provider
      value={{
        games,
        setGames,
        singleGame,
        setSingleGame,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesState; */
