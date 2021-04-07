import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import home from '../styling/iconfinder_Streamline-18_185038.png'

export default class Footer extends Component {
  render() {
    return (
      <Router>
      <Link to={"/"}><img src={home} alt="home-icon" /></Link>
      </Router>
    )
  }
}
