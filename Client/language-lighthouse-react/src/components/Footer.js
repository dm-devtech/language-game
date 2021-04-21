import React, { Component } from 'react';
import { Link } from "react-router-dom";
import home from '../styling/iconfinder_Streamline-18_185038.png'
import {  } from "react-router-dom"

export default class Footer extends Component {
  render() {
    return (
      <Link to="/"><img src={home} alt="home-icon" /></Link>
    )
  }
}
