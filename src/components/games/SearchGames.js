import "../../App.css";
import * as ReactBootStrap from "react-bootstrap";
import React from "react";

const SearchGames = () => {
  return (
    <div>
      <ReactBootStrap.Container>      
        <ReactBootStrap.Row>
          <ReactBootStrap.Col>
            <h2>Please choose category, occasion, players and time to search for games</h2><br></br>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Form>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Group controlId="form.ControlSelectCategory">
                <ReactBootStrap.Form.Control as="select">
                  <option>Awareness Games</option>
                  <option>Meditations</option>
                  <option>Fun and Improv Games</option>
                  <option>Group Bonding Games</option>
                  <option>Self-Awareness Games</option>
                  <option>Self-Expression Games</option>
                  <option>Perspective-Shifting Games</option>
                  <option>Feedback Games</option>
                  <option>Curiosity Games</option>
                  <option>Deep Empathy Games</option>
                  <option>Movement Games</option>
                  <option>Touch Games</option>
                  <option>Edge Games</option>
                  <option>Oneness Games</option>
                  <option>Resourcing Games</option>
                  <option>Appreciation Games</option>
                </ReactBootStrap.Form.Control>
              </ReactBootStrap.Form.Group>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Group controlId="form.ControlSelectOccasion">
                <ReactBootStrap.Form.Control as="select">
                  <option>First date</option>
                  <option>Relationship</option>
                  <option>Work (or work retreat)</option>
                  <option>Edgy Work Games</option>
                  <option>With family/kids</option>
                  <option>With friends</option>
                  <option>With strangers</option>
                  <option>For conflict</option>
                  <option>All</option>
                </ReactBootStrap.Form.Control>
              </ReactBootStrap.Form.Group>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <ReactBootStrap.Form.Group controlId="form.ControlSelectPlayers">
                <ReactBootStrap.Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>             
                </ReactBootStrap.Form.Control>
              </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col>
                <ReactBootStrap.Form.Group controlId="form.ControlSelectTime">
                  <ReactBootStrap.Form.Control as="select">
                    <option>10 minutes</option>
                    <option>20 minutes</option>
                    <option>30 minutes</option>
                    <option>40 minutes</option>
                    <option>50 minutes</option>
                    <option>1 hour</option>
                    <option>1 hour 10 minutes</option>
                    <option>1 hour 20 minutes</option>
                    <option>1 hour 30 minutes</option>  
                  </ReactBootStrap.Form.Control>
                </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col>
                <ReactBootStrap.Form.Group controlId="form.ControlSelectSearch">
                  <ReactBootStrap.Button variant="dark" variant="outline-dark" type="text">
                    Search
                  </ReactBootStrap.Button>
                </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Form>
      </ReactBootStrap.Container>
    </div>
  );
};

export default SearchGames;