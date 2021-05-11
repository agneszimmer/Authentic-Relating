import "../../App.css";

import { useState, useEffect } from "react";

import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import circle from "../../pictures/circle.png";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://arg-api.herokuapp.com/users");
        const jsonData = await response.json();
        console.log(jsonData);

        if (response) {
          setUsers(jsonData);
        }
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading)
    return <img className="loadingImage" src={circle} alt="loading..." />; //spinner einfügen
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="usersContainer fluid">
        {users &&
          users.map((user) => (
            <Card key={user._id} style={{ width: "18rem" }}>
              <Card.Body>
                <Col xs={4} lg={2} className="justify-content-md-center">
                  <Image
                    className="comment-picture"
                    src="{user.image}"
                    roundedCircle
                    style={{ width: 100, radius: 50 }}
                  />
                </Col>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.bio}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      ;
    </div>
  );
};

export default Users;
