import "../../css/Games.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Loading from "../Loading";
import GamesCards from "./GamesCards.js";

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

  /*   const pageCount = 10;
  const changePage = ({ selected }) => {
    setPageNum(selected);
  }; */

  return (
    <Container className="all-games-container">
      <GamesCards games={games} />
    </Container>
  );
};

export default Games;

{
  /* <Container className="mt-5 mb-5">
<Row
  style={{
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  }}
>
  {games &&
    games.map((game) => (
      <Card className="games-card" key={game._id}>
        <Card.Header>{game.title}</Card.Header>
        <Card.Body>
          <Card.Text>{game.teaser}</Card.Text>
          <Link to={`/game/${game._id}`}>
            <Button variant="light">details</Button>
          </Link>
        </Card.Body>
      </Card>
    ))}

  <ReactPaginate
    previousLabel={
      <FontAwesomeIcon
        className="previousBtn"
        icon={["fas", "angle-left"]}
      />
    }
    nextLabel={
      <FontAwesomeIcon
        className="nextBtn"
        icon={["fas", "angle-right"]}
      />
    }
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBtns"}
    previousLinkClassName={"previousBtn"}
    nextLinkClassName={"nextBtn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
  />
</Row>
</Container> */
}
