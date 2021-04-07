import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {

  componentDidMount() {
      document.title = "Language lighthouse";
  }

  render(){
      return (
        <div>
            <div className='Header'>
              Language Lighthouse
              <br/>
              <div className="body-text">
                (Langue Leuchtturm)
                <br/>
                Select a language
                  <br/>
                  <div className="buttons">
                  <br/>
                  <Router>
                    <button className="click"><Link to={"/game/german"}>Deutsch</Link></button>
                      <br/>
                    <button className="click"><Link to={"/game/french"}>Francais</Link></button>
                      <br/>
                    <button className="click"><Link to={"/game/latin"}>Lingua Romanorum</Link></button>
                      <br/>
                      </Router>
                  </div>
            </div>
        </div>
        </div>
      )
  }
}


export default Home
