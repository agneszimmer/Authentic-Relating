import Navbar from "react-bootstrap/Navbar";
import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../App.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
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
      <NavLink to="/contact" activeClassName="active">
        Kontakt
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? (
            <Fragment>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  activeClassName="active"
                  className="nav-link"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="nav-link"
                >
                  Login
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item">
                <NavLink
                  to="/:username"
                  activeClassName="active"
                  className="nav-link"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <div onClick={logout} className="nav-link">
                  Logout
                </div>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </Navbar>
  );
};
export default NavBar;
