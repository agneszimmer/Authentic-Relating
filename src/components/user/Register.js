import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated, error, setError } = useContext(
    AuthContext
  );
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  //destructure this formState
  const { username, email, password } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field]) return alert(`${field} is empty`);
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
    <div className="container">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="name"
            value={username}
            onChange={onChange}
          />
        </div>
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
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        {/*         <div className="form-group">
          <label htmlFor="location">Where are you?</label>
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="location"
            value={location}
            onChange={onChange}
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
