import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import GermanGame from './components/GermanGame.js'
import FrenchGame from './components/FrenchGame.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="container">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/german">
            <GermanGame />
          </Route>
          <Route exact path="/game/french">
            <FrenchGame />
          </Route>
        </Router>
      </div>
  );
}

export default App;
