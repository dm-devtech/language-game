import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import GermanNouns from './components/GermanNouns.js'
import GermanVerbs from './components/GermanVerbs.js'
import FrenchNouns from './components/FrenchNouns.js'
import FrenchVerbs from './components/FrenchVerbs.js'
import LatinNouns from './components/LatinNouns.js'
import LatinVerbs from './components/LatinVerbs.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
            <Route path="/game/german/nouns">
              <GermanNouns />
              <Footer />
            </Route>
              <Route path="/game/german/verbs">
                <GermanVerbs />
                <Footer />
              </Route>
          <Route path="/game/french/nouns">
            <FrenchNouns />
            <Footer />
          </Route>
          <Route path="/game/french/verbs">
            <FrenchVerbs />
            <Footer />
          </Route>
          <Route path="/game/latin/nouns">
            <LatinNouns />
            <Footer />
          </Route>
          <Route path="/game/latin/verbs">
            <LatinVerbs />
            <Footer />
          </Route>
      </div>
  );
}

export default App;
