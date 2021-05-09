import "../../css/Games.css";
import React from "react";
import { Nav, NavDropdown, Button, NavItem } from "react-bootstrap";

const GamesList = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1">all games alphabetically</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">sort by category</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">sort by occasion</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default GamesList;
