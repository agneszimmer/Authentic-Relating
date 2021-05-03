import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
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
      if (!formState[field]) return alert("${field} is empty");
    }

    try {
      const res = await fetch("https://localhost:3333/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

/*   const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        email: { email },
        password: { password },
      }),
      headers: { "content-Type": "application/json" },
    };
    const res = await fetch("https://localhost:3333/users/login", options);
    const { token } = await res.json();

    localStorage.setItem("token", token);
    console.log(token);
  }; */

/* const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }; */
