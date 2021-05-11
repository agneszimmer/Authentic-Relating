import "../../css/About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

import React from "react";
import ReactPlayer from "react-player";

const AuthenticRelating = () => {
  return (
    <Container className="about-container">
      <Card className="about-card">
        <Row>
          <Card className="about-dates">
            <Col sm={6} md={5}>
              <h1>Authentic Relating</h1>
              <h3>Changing the World, one connection at a time</h3>
            </Col>
          </Card>
        </Row>

        <h5>
          Authentic Relating Games were created to give you a playbook for how
          to begin relating on an authentic level.
        </h5>
        <p>
          Often communication starts and stops because we feel unsure about how
          to approach it, what to say, or what to ask. Turning communication
          into a game provides a guiding structure and set of agreements for
          everyone involved. This removes a lot of the stress and anxiety from
          connection, and adds in an inviting element of play.
        </p>
        <h5>
          Authentic Relating Games (played with 2 or more people) are designed
          to take you from:
        </h5>
        <p>Surface level answers to sharing what’s really going on </p>
        <p>Feeling disconnected to feeling a real bond</p>
        <p>
          Not knowing what to say to a connected in-flow conversation Lack of
          understanding to gaining helpful insights about each other
        </p>
        <h5>
          Playing these games help build skills for any relationship: Romantic
          partnerships, families, roommates, friends, community groups, teams,
          and clientele.
        </h5>
      </Card>
      <div className="player">
        <ReactPlayer url="https://www.youtube.com/watch?v=LJG7R7Da5xA" />
      </div>
    </Container>
  );
};

export default AuthenticRelating;
