import React, { Component } from 'react';
import { Link, BrowserRouter, Redirect } from "react-router-dom";

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

  renderRedirectGerman() {
    if (this.state.redirectGerman) {
      return <Redirect to='/game/german/nouns' />
    }
  }

  redirectHandlerGermanVerbs = () => {
    this.setState({redirectGermanVerbs: true})
    this.renderRedirectGermanVerbs();
  }

  renderRedirectGermanVerbs() {
    if (this.state.redirectGermanVerbs) {
      return <Redirect to='/game/german/verbs' />
    }
  }

  redirectHandlerFrench = () => {
    this.setState({redirectFrench: true})
    this.renderRedirectFrench();
  }

  renderRedirectFrench() {
    if (this.state.redirectFrench) {
      return <Redirect to='/game/french/nouns' />
    }
  }

  redirectHandlerFrenchVerbs = () => {
    this.setState({redirectFrenchVerbs: true})
    this.renderRedirectFrenchVerbs();
  }

  renderRedirectFrenchVerbs() {
    if (this.state.redirectFrenchVerbs) {
      return <Redirect to='/game/french/verbs' />
    }
  }

  redirectHandlerLatin = () => {
    this.setState({redirectLatin: true})
    this.renderRedirectLatin();
  }

  renderRedirectLatin()  {
    if (this.state.redirectLatin) {
      return <Redirect to='/game/latin/nouns' />
    }
  }

  redirectHandlerLatinVerbs = () => {
    this.setState({redirectLatinVerbs: true})
    this.renderRedirectLatinVerbs();
  }

  renderRedirectLatinVerbs() {
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
                    <Link data-testid="nouns-de" className="button" to={"/game/german/nouns"} >Deutsch (Nouns)</Link>

                    <Link data-testid="verbs-de" className="button" to={"/game/german/verbs"} >Deutsch (Verbs)</Link>
                  </div>
                  <div className="french">
                    <Link data-testid="nouns-fr" className="button" to={"/game/french/nouns"} >Français (Nouns)</Link>

                    <Link data-testid="verbs-fr" className="button" to={"/game/french/verbs"} >Français (Verbs)</Link>
                  </div>
                  <div className="latin">
                    <Link data-testid="nouns-la" className="button" to={"/game/latin/nouns"} >Lingua Romanorum (Nouns)</Link>

                    <Link data-testid="verbs-la" className="button" to={"/game/latin/verbs"} >Lingua Romanorum (Verbs)</Link>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Home
