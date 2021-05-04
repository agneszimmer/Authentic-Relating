import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/events/Events";
import Games from "./components/games/Games";
import SingleGame from "./components/games/GameSingle";
import UploadGame from "./components/games/UploadGame";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import UserPage from "./components/user/UserPage";
import Profile from "./components/user/Profile";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

// import UploadGame from "./components/UploadGame";
// import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}></Route>
        <Route path="/events" component={Events}></Route>
        <Route exact path="/games" component={Games}></Route>
        <Route path="/games/:game_id" component={SingleGame}></Route>
        <Route path="/games/upload" component={UploadGame}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <ProtectedRoute
          exact
          path="/users/:id"
          component={UserPage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/users/profile/:id"
          component={Profile}
        ></ProtectedRoute>

        <Route path="/contact" component={Contact}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      {/*       <Modal isOpen={loginModalOpen}>
        <h2>login</h2>
      </Modal> */}
    </div>
  );
};
export default App;
