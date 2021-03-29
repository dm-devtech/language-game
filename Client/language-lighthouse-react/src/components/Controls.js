import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
    super(props)
      this.state = {
        wordToMatch: [],
        allWords: []
    }
  }

  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/german'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({allWords: data, loading: false})
    this.setState({wordToMatch: data[Math.floor(Math.random() * this.state.allWords.length)], loading: false})
  }

  render() {
    return (
      <div >
        <h1>Language LightHouse</h1>
          {this.state.loading || !this.state.wordToMatch ? (
            <div>loading...</div>
          ) : (
              <div>
              English: {this.state.wordToMatch.eng} <br/>
              German: {this.state.wordToMatch.ger}
              </div>
          )}
      </div>
    )
  }
}

export default Controls
