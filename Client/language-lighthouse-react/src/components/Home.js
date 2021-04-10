import React, { Component } from 'react';
import { Redirect } from "react-router";

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        redirectGerman: false,
        redirectFrench: false,
        redirectLatin: false,
    }
  }

  componentDidMount() {
      document.title = "Language lighthouse";
  }

    redirectHandlerGerman = () => {
          this.setState({redirectGerman: true})
          this.renderRedirectGerman();
      }

    renderRedirectGerman = () => {
          if (this.state.redirectGerman) {
              return <Redirect to='/game/german' />
          }
      }

    redirectHandlerFrench = () => {
          this.setState({redirectFrench: true})
          this.renderRedirectFrench();
      }

    renderRedirectFrench = () => {
          if (this.state.redirectFrench) {
              return <Redirect to='/game/French' />
          }
      }

    redirectHandlerLatin = () => {
          this.setState({redirectLatin: true})
          this.renderRedirectLatin();
      }

    renderRedirectLatin = () => {
          if (this.state.redirectLatin) {
              return <Redirect to='/game/Latin' />
          }
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
                    <button className="button" onClick={this.redirectHandlerGerman}>Deutsch</button>{this.renderRedirectGerman()}
                      <br/>
                    <button className="button" onClick={this.redirectHandlerFrench}>Français</button>{this.renderRedirectFrench()}
                      <br/>
                    <button className="button" onClick={this.redirectHandlerLatin}>Lingua Romanorum</button>{this.renderRedirectLatin()}
                      <br/>
                  </div>
            </div>
        </div>
        </div>
      )
  }
}


export default Home
