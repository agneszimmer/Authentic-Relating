import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/events/Events";
import Games from "./components/games/Games";
import SearchGames from "./components/games/SearchGames";
import SingleGame from "./components/games/SingleGame";
import UploadGame from "./components/games/UploadGame";
import Users from "./components/user/Users";
import UserProfile from "./components/user/UserProfile";
import UserCollection from "./components/user/UserCollection";
import NotFound from "./components/NotFound";
import Community from "./components/community/Community";
import Groups from "./components/community/Groups";

import { loginModalOpen } from "./context/GamesContext";

// import UploadGame from "./components/UploadGame";
// import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/*       <Modal isOpen={loginModalOpen}>
        <h2>login</h2>
      </Modal> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}></Route>
        <Route path="/events" component={Events}></Route>
        <Route exact path="/games" component={Games}></Route>
        <Route exact path="/searchGames" component={SearchGames}></Route>
        <Route path="/game/:game_id" component={SingleGame}></Route>
        <Route path="/uploadgame" component={UploadGame}></Route>
        <Route exact path="/users" component={Users}></Route>
        <ProtectedRoute
          exact
          path="/userprofile/:id"
          component={UserProfile}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/users/collection/:id"
          component={UserCollection}
        ></ProtectedRoute>
        <Route path="/community" component={Community}></Route>
        <Route path="/groups" component={Groups}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};
export default App;
