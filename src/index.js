import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./context/AuthContext";
import App from "./App";
import "dotenv/config.js";

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping App component in Router */}
    <Router>
      <AuthState>
        <App />
      </AuthState>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
