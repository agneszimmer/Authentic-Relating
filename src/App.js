import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Dates from './components/Dates';
import Games from './components/Games';
import Game from './components/Game';
//import Circling from './components/Circling';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}></Route>
        <Route path='/dates' component={Dates}></Route>
        <Route path='/games' component={Games}></Route>
        <Route path='/games/:topic' component={Game}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </div>
  );
};
export default App;
