import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" sticky="top">
      <Navbar.Brand href="/">LOVE</Navbar.Brand>
      {/*       <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink> */}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/games" activeClassName="active">
        Authentic Relating Games
      </NavLink>
      <NavLink to="/searchgames" activeClassName="active">
        Search Games
      </NavLink>
      {/*       <NavDropdown title="Authentic Relating Games" id="basic-nav-dropdown">
        <NavDropdown.Item href="/games">All</NavDropdown.Item>
        <NavDropdown.Item href="/games/x">
          Awareness Games & Meditations
        </NavDropdown.Item>
        <NavDropdown.Item href="/games/y">Fun and Impro Games</NavDropdown.Item>
        <NavDropdown.Item href="/games/y">
          Perspective-Shifting Games
        </NavDropdown.Item>
      </NavDropdown> */}
      <NavLink to="/events" activeClassName="active">
        Events
      </NavLink>
      <NavLink to="/upload" activeClassName="active">
        Upload
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </Navbar>
  );
};
export default NavBar;
