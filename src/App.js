import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Dates from "./components/Dates";
import Games from "./components/Games";
import SingleGame from "./components/SingleGame";
import NotFound from "./components/NotFound";
import Upload from "./components/Upload";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}></Route>
        <Route path="/dates" component={Dates}></Route>
        <Route exact path="/games" component={Games}></Route>
        <Route path="/games/:game_id" component={SingleGame}></Route>
        <Route path="/:upload" component={Upload}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};
export default App;
