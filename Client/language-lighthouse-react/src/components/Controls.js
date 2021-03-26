import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
    super(props)
      this.state = {
        words: []
    }
  }

  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/german'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({words: data[0], loading: false})
  }

  render() {
    return (
      <div >
        <h1>Language LightHouse</h1>
          {this.state.loading || !this.state.words ? (
            <div>loading...</div>
          ) : (
              <div>
              English: {this.state.words.eng} <br/>
              German: {this.state.words.ger}
              </div>
          )}
      </div>
    )
  }
}

export default Controls
