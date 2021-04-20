import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import GermanNouns from './components/GermanNouns.js'
import GermanVerbs from './components/GermanVerbs.js'
import FrenchNouns from './components/FrenchNouns.js'
import FrenchVerbs from './components/FrenchVerbs.js'
import LatinNouns from './components/LatinNouns.js'
import LatinVerbs from './components/LatinVerbs.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="container">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/german/nouns">
            <GermanNouns />
          </Route>
          <Route exact path="/game/german/verbs">
            <GermanVerbs />
          </Route>
          <Route exact path="/game/french/nouns">
            <FrenchNouns />
          </Route>
          <Route exact path="/game/french/verbs">
            <FrenchVerbs />
          </Route>
          <Route exact path="/game/latin/nouns">
            <LatinNouns />
          </Route>
          <Route exact path="/game/latin/verbs">
            <LatinVerbs />
          </Route>
        </Router>
      </div>
  );
}

export default App;
