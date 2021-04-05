import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
render(){
    return (
      <div className="header">
        <h1>Language LightHouse</h1>
        <h2>Language Learning App</h2>
        <h3>Select a language</h3>
          <br/>
          <div className="home-buttons">
            <button><Link to={"/game/german"}>German</Link></button>
            <br/>
            <button><Link to={"/game/french"}>French</Link></button>
            <br/>
            <button>Latin (Coming Soon)</button>
            <br/>
          </div>
      </div>
    )
  }
}


export default Home
