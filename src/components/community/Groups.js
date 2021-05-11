import "../../css/Community.css";
import { useEffect, useState } from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import GroupsMap from "./GroupsMap";

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
      } catch (error) {
        setError(error);
        console.log(error.messageor);
      }
      setLoading(false);
    };
    getGroups();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="community-container">
      <Row>
        <Col className="groups-col col-md-4">
          {groups &&
            groups.map((group) => (
              <Card className="group-card" key={group._id}>
                <Card.Body>
                  <h5>{group.groupname}</h5>
                  <h6>{group.location}</h6>
                  <Link target="_blank" to={{ pathname: `${group.contact}` }}>
                    {group.contact}
                  </Link>
                </Card.Body>
              </Card>
            ))}
        </Col>
        <Col className="col-12 col-md-8 order-first">
          <Card className="map-card">
            <GroupsMap groups={groups} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Groups;
