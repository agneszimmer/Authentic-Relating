import Navbar from "react-bootstrap/Navbar";
import React, { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  /*   const { loginModalOpen, setLoginModalOpen } = useContext(ModalContext); */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar" sticky="top">
      <Navbar.Brand href="/">LOVE</Navbar.Brand>
      {/*       <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink> */}
      <NavLink to="/about" activeClassName="active" className="nav-link">
        About
      </NavLink>
      <NavLink to="/games" activeClassName="active" className="nav-link">
        Authentic Relating Games
      </NavLink>
      <NavLink to="/events" activeClassName="active">
        Events
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
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
                {/*                 <NavLink
                  to="/login"
                  activeClassName="active"
                  className="nav-link"
                >
                  Login
                </NavLink> */}
              </li>
              {/*               <button
                onClick={() => {
                  setLoginModalOpen(true);
                }}
              >
                LoginModal
              </button> */}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
export default NavBar;
