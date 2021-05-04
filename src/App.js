import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/events/Events";
import Games from "./components/games/Games";
import SearchGames from "./components/games/SearchGames";
import SingleGame from "./components/games/GameSingle";
import UploadGame from "./components/games/UploadGame";
import Login from "./components/user/Login";
import UserPage from "./components/user/UserPage";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}></Route>
        <Route path="/events" component={Events}></Route>
        <Route exact path="/games" component={Games}></Route>
        <Route exact path="/searchGames" component={SearchGames}></Route>
        <Route path="/games/:game_id" component={SingleGame}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/users/:id" component={UserPage}></Route>
        <Route path="/games/upload" component={UploadGame}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};
export default App;
