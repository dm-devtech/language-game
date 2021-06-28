import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
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

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/game/german/nouns' component={GermanNouns} />
        <Route path='/game/german/verbs' component={GermanVerbs} />
        <Route path='/game/french/nouns' component={FrenchNouns} />
        <Route path='/game/french/verbs' component={FrenchVerbs} />
        <Route path='/game/latin/nouns' component={LatinNouns} />
        <Route path='/game/latin/verbs' component={LatinVerbs} />
      </Switch>

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
