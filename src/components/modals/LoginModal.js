import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginModal = (props) => {
  const { isAuthenticated, setIsAuthenticated, error, setError } = useContext(
    AuthContext
  );
  const [formState, setFormState] = useState({ email: "", password: "" });

  //destructure this formState
  const { email, password } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field]) return alert("fill all fields please");
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

  /* const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.2)",
  color: "##FFF",
  fontSize: "40px",
}; */

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
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
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button className="btn btn-primary" onClick={props.closed}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
