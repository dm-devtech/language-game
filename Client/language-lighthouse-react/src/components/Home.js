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
      return <Redirect to='/game/german/nouns' />
    }
  }

  redirectHandlerFrench = () => {
    this.setState({redirectFrench: true})
    this.renderRedirectFrench();
  }

  renderRedirectFrench = () => {
    if (this.state.redirectFrench) {
      return <Redirect to='/game/french/founs' />
    }
  }

  redirectHandlerLatin = () => {
    this.setState({redirectLatin: true})
    this.renderRedirectLatin();
  }

  renderRedirectLatin = () => {
    if (this.state.redirectLatin) {
      return <Redirect to='/game/latin/nouns' />
    }
  }

  render(){
    return (
      <div>
          <div className='Header'>
            Language Lighthouse
              <br/>
                <div className="body-text">(Langue Leuchtturm)
                  <br/>
                    <br/>
                      Select a language:
                        <br/>
                          <div>
                            <br/>
                              <button className="button" onClick={this.redirectHandlerGerman}>Deutsch (Nouns)</button>{this.renderRedirectGerman()}
                                <br/>
                              <button className="button" onClick={this.redirectHandlerFrench}>Français (Nouns)</button>{this.renderRedirectFrench()}
                                <br/>
                              <button className="button" onClick={this.redirectHandlerLatin}>Lingua Romanorum (Nouns)</button>{this.renderRedirectLatin()}
                                <br/>
                          </div>
                </div>
          </div>
      </div>
    )
  }

}

export default Home
