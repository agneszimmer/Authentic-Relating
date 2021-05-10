import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

const SaveGame = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, error, setError } = useContext(AuthContext);

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
      const { token, error } = await res.json();
      if (error) {
        setError(error);
        setTimeout(() => setError(""), 8000);
      }

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <>
      <Button variant="link" onClick={handleShow} className="nav-link">
        Save Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
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
                <label htmlFor="userEmail">Email address</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SaveGame;
