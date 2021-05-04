import Navbar from "react-bootstrap/Navbar";
import React, { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import "../App.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  /*   const { loginModalOpen, setLoginModalOpen } = useContext(ModalContext); */

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
