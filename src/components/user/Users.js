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
                <Row>
                  <Col xs={12} sm={6} sm={4} lg={3}>
                    <img
                      src={`http://localhost:3333/${user.image}`}
                      alt="Profile"
                      className="rounded-circle img-fluid"
                      height="90%"
                    />
                  </Col>

                  <Col>
                    <h1>Hello {user.username}!</h1>
                    <br />
                    <h5>Your Motto: {user.bio}</h5>
                    <h6>Email: {user.email}</h6>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
      </div>
      ;
    </div>
  );
};

export default Users;
