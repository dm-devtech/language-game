import React, { Component } from 'react';
import { Redirect } from "react-router";

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        redirectGerman: false,
        redirectGermanVerbs: false,
        redirectFrench: false,
        redirectFrenchVerbs: false,
        redirectLatin: false,
        redirectLatinVerbs: false
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

  redirectHandlerGermanVerbs = () => {
    this.setState({redirectGermanVerbs: true})
    this.renderRedirectGermanVerbs();
  }

  renderRedirectGermanVerbs = () => {
    if (this.state.redirectGermanVerbs) {
      return <Redirect to='/game/german/verbs' />
    }
  }

  redirectHandlerFrench = () => {
    this.setState({redirectFrench: true})
    this.renderRedirectFrench();
  }

  renderRedirectFrench = () => {
    if (this.state.redirectFrench) {
      return <Redirect to='/game/french/nouns' />
    }
  }

  redirectHandlerFrenchVerbs = () => {
    this.setState({redirectFrenchVerbs: true})
    this.renderRedirectFrenchVerbs();
  }

  renderRedirectFrenchVerbs = () => {
    if (this.state.redirectFrenchVerbs) {
      return <Redirect to='/game/french/verbs' />
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

  redirectHandlerLatinVerbs = () => {
    this.setState({redirectLatinVerbs: true})
    this.renderRedirectLatinVerbs();
  }

  renderRedirectLatinVerbs = () => {
    if (this.state.redirectLatinVerbs) {
      return <Redirect to='/game/latin/verbs' />
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
                  <div className="german">
                  <button className="button" onClick={this.redirectHandlerGerman}>Deutsch (Nouns)</button>{this.renderRedirectGerman()}
                  <button className="button" onClick={this.redirectHandlerGermanVerbs}>Deutsch (Verbs)</button>{this.renderRedirectGermanVerbs()}
                  </div>
                    <div className="french">
                    <button className="button" onClick={this.redirectHandlerFrench}>Français (Nouns)</button>{this.renderRedirectFrench()}
                    <button className="button" onClick={this.redirectHandlerFrenchVerbs}>Français (Verbs)</button>{this.renderRedirectFrenchVerbs()}
                    </div>
                      <div className="latin">
                      <button className="button" onClick={this.redirectHandlerLatin}>Lingua Romanorum (Nouns)</button>{this.renderRedirectLatin()}
                      <button className="button" onClick={this.redirectHandlerLatinVerbs}>Lingua Romanorum (Verbs)</button>{this.renderRedirectLatinVerbs()}
                      </div>
                    </div>
                </div>
          </div>
    )
  }

}

export default Home
