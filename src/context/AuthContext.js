import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }} // dubble {} because its a js expression and an object
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
