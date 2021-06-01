import "../../css/About.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import kreis from "../../pictures/fotos/kreis.jpg";

const Circling = () => {
  return (
    <Container className="circling-container">
      <Card className="about-card" style={{ textAlign: "center" }}>
        <Card.Header>
          <h1>What is Circling</h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6} md={7}>
              <br />
              <br />
              <h3>
                How is it right now to be you? And how does the connection feel
                between you and I?
              </h3>
              <br />
              <br />
              <h4>How does it feel right now ind this present moment?</h4>{" "}
              <h4>how to begin relating on an authentic level.</h4>
            </Col>
            <Col xs={12} sm={6} md={5} lg={4}>
              <img className="imageGame" src={kreis} alt="img"></img>
            </Col>
          </Row>

          <Row style={{ margin: "2rem" }} className="justify-content-md-center">
            <Col md={10} lg={8}>
              <br />
              <h5>
                Often communication starts and stops because we feel unsure
                about how to approach it,{" "}
              </h5>
              <h5>
                what to say, or what to ask. Turning communication into a game
                provides a guiding structure and set{" "}
              </h5>
              <h5>of agreements for everyone involved. </h5>
              <h5>
                This removes a lot of the stress and anxiety from connection,
              </h5>
              <h5>and adds in an inviting element of play.</h5>
              <br />
              <h4>
                Authentic Relating Games (played with 2 or more people) are
                designed to take you from:
              </h4>
            </Col>
          </Row>
          <Row style={{ margin: "2rem" }} className="justify-content-md-center">
            <Col style={{ padding: "2rem" }}>
              <Card className="viereck">
                <br />
                <h5>
                  Surface level answers to sharing what’s really going on{" "}
                </h5>
              </Card>
            </Col>
            <Col style={{ padding: "2rem" }}>
              <Card className="viereck">
                <br />
                <h5>Feeling disconnected to feeling a real bond</h5>
              </Card>
            </Col>
            <Col style={{ padding: "2rem" }}>
              <Card className="viereck">
                <h5>
                  Not knowing what to say to a connected in-flow conversation
                  Lack of understanding to gaining helpful insights about each
                  other
                </h5>
              </Card>
            </Col>
          </Row>
          <Row>
            <h4>Playing these games help build skills for any relationship:</h4>
            <h4>
              Romantic partnerships, families, roommates, friends, community
              groups, teams, and clientele.
            </h4>
          </Row>
        </Card.Body>
        {/*         <div className="player" style={{ margin: "2rem" }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=LJG7R7Da5xA" />
        </div> */}
      </Card>
    </Container>
  );
};

export default Circling;
