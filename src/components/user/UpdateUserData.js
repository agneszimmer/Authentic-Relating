import "../../css/Modals.css";

import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

const UpdateUserData = (props) => {
  /* 
  //ModalActions:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field]) return alert(`${field} is empty`);
      if (password !== password2) return alert("passwords are not matching");
    }

    try {
      const res = await fetch("https://arg-api.herokuapp.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const { token, user, error } = await res.json();
      if (error) {
        setError(error);
        return setTimeout(() => setError(""), 8000);
      }
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      setActiveUser(user);
      console.log({ token });
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;
  if (loading) return <Loading />;

  return (
    <div>
      <Button variant="link" onClick={handleShow} className="nav-link">
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">Update your User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login">
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label className="title">How do you want to be called?</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="your name"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">What is your Email address?</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Choose a Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Repeat your Password</label>
                <input
                  type="password"
                  name="password2"
                  className="form-control"
                  placeholder="password"
                  value={password2}
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={onSubmit} className="btn btn-primary">
            Register
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ); */
};

export default UpdateUserData;
