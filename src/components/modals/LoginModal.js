import "../../css/Modals.css";

import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Form, Modal, Container, Button, Row, Col } from "react-bootstrap";
import Loading from "../Loading";

const LoginModal = () => {
  //ModalActions:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isAuthenticated,
    setIsAuthenticated,
    activeUser,
    setActiveUser,
    error,
    setError,
  } = useContext(AuthContext);

  const [formState, setFormState] = useState({ email: "", password: "" });

  //destructure this formState
  const { email, password } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field]) return alert("${field} is empty");
    }

    try {
      const res = await fetch("https://arg-api.herokuapp.com/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const { token, user, error } = await res.json();
      if (error) {
        setError(error);
        setTimeout(() => setError(""), 8000);
      }

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      console.log(user);
      setActiveUser(user);
      console.log(activeUser.username);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <>
      <Button variant="link" onClick={handleShow} className="nav-link">
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Please enter Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password">and your Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={onSubmit} className="btn btn-success ">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
