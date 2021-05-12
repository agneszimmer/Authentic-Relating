import "../../css/About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

import React from "react";
import ReactPlayer from "react-player";

import housten from "../../pictures/fotos/housten.jpg";

const AuthenticRelating = () => {
  return (
    <Container className="about-container">
      <Card className="about-card" style={{ textAlign: "center" }}>
        <Card.Header>
          <h1>Authentic Relating</h1>
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
            </Col>
            <Col xs={12} sm={6} md={5} lg={4}>
              <img className="imageGame" src={housten} alt="img"></img>
            </Col>
          </Row>

          <Row style={{ margin: "2rem" }} className="justify-content-md-center">
            <Col md={10} lg={8}>
              <h4>
                Authentic Relating Games were created to give you a playbook for
                how to begin relating on an authentic level.
              </h4>
              <br />
              <h5>
                Often communication starts and stops because we feel unsure
                about how to approach it, what to say, or what to ask. Turning
                communication into a game provides a guiding structure and set
                of agreements for everyone involved. This removes a lot of the
                stress and anxiety from connection, and adds in an inviting
                element of play.
              </h5>
              <br />
              <h4>
                Authentic Relating Games (played with 2 or more people) are
                designed to take you from:
              </h4>
            </Col>
          </Row>
          <Row style={{ margin: "2rem" }} className="justify-content-md-center">
            <Col style={{ padding: "2rem" }}>
              <Card style={{ height: "rem" }}>
                <h5>
                  Surface level answers to sharing what’s really going on{" "}
                </h5>
              </Card>
            </Col>
            <Col style={{ padding: "2rem" }}>
              <Card>
                <h5>Feeling disconnected to feeling a real bond</h5>
              </Card>
            </Col>
            <Col style={{ padding: "2rem" }}>
              <Card>
                <h5>
                  Not knowing what to say to a connected in-flow conversation
                  Lack of understanding to gaining helpful insights about each
                  other
                </h5>
              </Card>
            </Col>
          </Row>
          <Row>
            <h4>
              Playing these games help build skills for any relationship:
              Romantic partnerships, families, roommates, friends, community
              groups, teams, and clientele.
            </h4>
          </Row>
        </Card.Body>
        <div className="player" style={{ margin: "2rem" }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=LJG7R7Da5xA" />
        </div>
      </Card>
    </Container>
  );
};

export default AuthenticRelating;
