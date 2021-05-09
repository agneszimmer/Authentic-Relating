import "../../css/Community.css";
import { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getGroups = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://arg-api.herokuapp.com/groups");
        const jsonData = await response.json();
        console.log(jsonData);
        setGroups(jsonData);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getGroups();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="gamesContainer fluid">
      {groups &&
        groups.map((group) => (
          <Card className="groups-card" key={group._id}>
            <Card.Header>{group.groupname}</Card.Header>
            <Card.Body>
              <Card.Text>{group.location}</Card.Text>
              <Card.Text>{group.contact}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default Groups;
