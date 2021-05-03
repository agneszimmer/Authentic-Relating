import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    setTimeout(setError(""), 8000);
  }, [error]);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, logout }} // dubble {} because its a js expression and an object
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
