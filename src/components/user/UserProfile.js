import "../../css/Users.css";
import { useEffect, useContext, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading";
import UpdateMotto from "./UpdateMotto";
import UpdateUserData from "./UpdateUserData";
import questionsArray from "../../questionsKeys.json";

const UserProfile = () => {
  const { activeUser, error, loading, setError } = useContext(AuthContext);

  const [question, setQuestion] = useState(
    "What is the number one reason that you think people want to hang out with you?"
  );

  useEffect(() => {
    const random = Math.floor(Math.random() * 27);
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
            <Col xs={12} sm={6} md={4} lg={3}>
              <img
                src={`http://localhost:3333/${activeUser.image}`}
                alt="Profile"
                className="rounded-circle img-fluid"
                height="90%"
              />
            </Col>

            <Col>
              <h1>Hello {activeUser.username}!</h1>
              <h3>{question}</h3>
            </Col>
          </Row>
          <UpdateMotto activeUser={activeUser} />
        </Card>
      )}
    </Container>
  );
};

export default UserProfile;

{
  /* <Container className="profile-container" activeUser={activeUser}>
{activeUser && (
  <Card className="profile-card">
    <Row>
      <Col xs={12} sm={6} sm={4} lg={3}>
        <img
          src={`http://localhost:3333/${activeUser.image}`}
          alt="Profile"
          className="rounded-circle img-fluid"
          height="90%"
        />
      </Col>

      <Col>
        <h1>Hello {activeUser.username}!</h1>
        <h3>{question}</h3>
        <Row>
          <Col sm={8} sm={9} lg={9}>
            <br />
            <br />
            <br />

            <h5>{activeUser.bio}</h5>
          </Col>
          <Col>
            <br />
            <br />
            <UpdateMotto activeUser={activeUser} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
)}
</Container> */
}
