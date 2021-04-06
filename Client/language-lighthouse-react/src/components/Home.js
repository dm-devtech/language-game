import React, { Component } from 'react';
import { Link } from "react-router-dom";
import home from '../styling/iconfinder_Streamline-18_185038.png'

class Home extends Component {
  render(){
      return (
        <div>
            <div className='Header'>
              Language Lighthouse
              <br/>
              <div className="body-text">
                Select a language
                  <br/><br/><br/>
                  <div className="buttons">
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
