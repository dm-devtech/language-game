import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
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
                    <button className="click"><Link to={"/game/german"}>Deutsch</Link></button>
                      <br/>
                    <button className="click"><Link to={"/game/french"}>Francais</Link></button>
                      <br/>
                    <button className="click"><Link to={"/game/latin"}>Lingua Romanorum</Link></button>
                      <br/>
                  </div>
            </div>
        </div>
        </div>
      )
  }
}


export default Home
