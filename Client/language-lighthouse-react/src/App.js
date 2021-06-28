import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import GermanNouns from './components/GermanNouns.js'
import GermanVerbs from './components/GermanVerbs.js'
import FrenchNouns from './components/FrenchNouns.js'
import FrenchVerbs from './components/FrenchVerbs.js'
import LatinNouns from './components/LatinNouns.js'
import LatinVerbs from './components/LatinVerbs.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    const App = () => (
    <div className="container">
      <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/german/nouns">
            <GermanNouns />
            <Footer />
          </Route>
          <Route exact path="/game/german/verbs">
            <GermanVerbs />
            <Footer />
          </Route>
          <Route exact path="/game/french/nouns">
            <FrenchNouns />
            <Footer />
          </Route>
          <Route exact path="/game/french/verbs">
            <FrenchVerbs />
            <Footer />
          </Route>
          <Route exact path="/game/latin/nouns">
            <LatinNouns />
            <Footer />
          </Route>
          <Route exact path="/game/latin/verbs">
            <LatinVerbs />
            <Footer />
          </Route>
        </Router>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
