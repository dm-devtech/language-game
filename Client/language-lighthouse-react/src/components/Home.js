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
                <br/>
                Select a language:
                  <br/>
                  <div>
                  <br/>
                  <Route>
                    <button className="button"><Link to={"/game/german"}>Deutsch</Link></button>
                    </Route>
                      <br/>
                      <Route>
                    <button className="button"><Link to={"/game/french"}>Francais</Link></button>
                    </Route>
                      <br/>
                      <Route>
                    <button className="button"><Link to={"/game/latin"}>Lingua Romanorum</Link></button>
                      </Route>
                      <br/>
                  </div>
            </div>
        </div>
        </div>
      )
  }
}


export default Home
