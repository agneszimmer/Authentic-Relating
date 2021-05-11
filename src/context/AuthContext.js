import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    //to check if the token is still valid:
    const verifySession = async () => {
      const res = await fetch(
        "http://localhost:3333/users/auth/verify-session",
        {
          headers: { token },
        }
      );
      const { success, user } = await res.json(); //import {success,user} for the password issue
      if (success) {
        console.log("success");
        setActiveUser(user);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    };

    if (token) {
      verifySession();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  /*   useEffect(() => {
    setTimeout(setError(""), 8000);
  }, [error]); */

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        activeUser,
        setActiveUser,
        loading,
        setLoading,
        error,
        setError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
