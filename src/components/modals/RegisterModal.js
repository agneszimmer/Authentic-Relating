import "../../css/Modals.css";

import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

const RegisterModal = (props) => {
  //ModalActions:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //RegisterForm:
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    error,
    setError,
  } = useContext(AuthContext);
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
      const { token, err } = await res.json();
      if (err) {
        setError(err);
        return setTimeout(() => setError(""), 8000);
      }
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      console.log({ token });
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <>
      <Button variant="link" onClick={handleShow} className="nav-link">
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">
            Great that you want to register!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Then you have access to all Authentic Relating Games, Sentence Stems
            and much more on this Website.
          </p>
          <p>
            You can save Games, Notes, create your own Authentic Relating Event
            Scedule and connect to other people in the community.
          </p>
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
    </>
  );
};

export default RegisterModal;
