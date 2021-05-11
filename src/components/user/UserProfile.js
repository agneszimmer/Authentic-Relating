import "../../css/Users.css";
import { useEffect, useContext, useState } from "react";
import { Container, Button, Card, Jumbotron, Row, Col } from "react-bootstrap";
import profile from "../../pictures/profile2.jpg";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading";
import questionsArray from "../../questionsKeys.json";

import profilePic from "../../pictures/profilepic.jpg";

const UserProfile = () => {
  const { activeUser, loading, setLoading, error, setError } = useContext(
    AuthContext
  );

  const [question, setQuestion] = useState(
    "What is the number one reason that you think people want to hang out with you?"
  );

  useEffect(() => {
    const random = Math.floor(Math.random() * 25);
    console.log(random);
    console.log(questionsArray);
    const newQuestion = () => questionsArray[random];
    setQuestion(newQuestion);
    console.log(question);
  }, []);

  if (loading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="profile-container" activeUser={activeUser}>
      {activeUser && (
        <Card className="profile-card">
          <Row>
            <Col xs={5} lg={3}>
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-circle img-fluid"
                height="90%"
              />
            </Col>

            <Col>
              <h1>Hello {activeUser.username}!</h1>
              <h4>{question}</h4>
            </Col>
          </Row>
        </Card>
        /*        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {
                      <img
                        src={profile}
                        alt="Profile"
                        className="rounded-circle"
                        width="150"
                      />
                    }
                    <div className="mt-3">
                      <h4>{user.username}</h4>
                      <p className="text-secondary mb-1">{user.bio}</p>
                      <p className="text-muted font-size-sm">{user.location}</p>
                      <button className="btn btn-primary">Change</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.username}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Change</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div> */
      )}
    </Container>
  );
};

export default UserProfile;
