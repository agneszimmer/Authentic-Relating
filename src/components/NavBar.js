import "../css/Navbar.css";
import React, { Fragment, useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Button, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginModal from "./modals/LoginModal.js";
import RegisterModal from "./modals/RegisterModal.js";

const NavBar = () => {
  const { isAuthenticated, logout, activeUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      variant="light"
      bg="light"
      collapseOnSelect
      expand="lg"
      sticky="top"
      activeUser={activeUser}
    >
      <Navbar.Brand href="/">LOVE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
          <NavLink
            to="/searchgames"
            activeClassName="active"
            className="nav-link"
          >
            Authentic Relating Games
          </NavLink>
          <NavDropdown
            className="ml-auto"
            title="Get In Touch"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <NavLink
                to="/events"
                activeClassName="active"
                className="nav-link"
              >
                Events
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/community"
                activeClassName="active"
                className="nav-link"
              >
                Community
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {!isAuthenticated ? (
          <Fragment>
            <NavItem className="ml-auto">
              <RegisterModal />
            </NavItem>
            <NavItem>
              <LoginModal />
            </NavItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavDropdown
              className="ml-auto"
              title={`You are logged in as ${activeUser.username}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  to={`/users/profile/${activeUser._id}`}
                  activeClassName="active"
                  className="nav-link"
                >
                  Your Profile
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={`/users/profile/${activeUser._id}`}
                  activeClassName="active"
                  className="nav-link"
                >
                  Your Games Collections
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Button
                  Button
                  variant="link"
                  onClick={logout}
                  className="nav-link"
                >
                  Logout
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Fragment>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
