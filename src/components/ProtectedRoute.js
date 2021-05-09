import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Route {...rest} render={() => <Component />} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;

// check react custum route render method - create a custum component that returns a route
// takes in a component property and the ...rest(exact, path...) and renders conditionally
