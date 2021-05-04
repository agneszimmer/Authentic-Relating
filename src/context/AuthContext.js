import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    //to check if the token is still valid:
    const verifySession = async () => {
      const res = await fetch(
        "https://arg-api.herokuapp.com/users/verify-session",
        {
          headers: { token },
        }
      );
      const { success } = await res.json();
      if (success) {
        console.log("success");
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("token");
        setIsAuthenticated("false");
      }
    };

    if (token) {
      verifySession();
    }
  }, []);

  useEffect(() => {
    setTimeout(setError(""), 8000);
  }, [error]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        error,
        setError,
        logout,
      }} // dubble {} because its a js expression and an object
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
