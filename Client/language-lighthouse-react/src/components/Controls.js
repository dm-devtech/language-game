import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
    super(props)
      this.state = {
        wordToMatch: [],
        selectionOne: [],
        selectionTwo: [],
        selectionThree: []
    }
  }

  myRandomInts(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max) + 1)
    }
    return set
  }

  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/german'
    const response = await fetch(url)
    const data = await response.json()

    const incorrectSelections = this.myRandomInts(2, data.length) // object of two random words that are different to the word
    const correctSelection = Math.floor(Math.random() * data.length) // the random number used to find a random word as basis of turn
    const values = Array.from(incorrectSelections, (v, i) => v-1) // converting object of two incorrect words into an array and zero indexing
    const allWords = [] // create empty array to push the main word and two incorrect words into
    allWords.push(correctSelection, values[0], values[1]) // pushing correct word and two incorrect words into this array
    const randomOrder = this.myRandomInts(3, allWords.length) // generating three random numbers to use to randomise order of allWords
    const order = Array.from(randomOrder, (v, i) => v-1) // converting order obj to array and zero indexing
    const randomSelectionOne = allWords[order[0]] // random number for selection 1 using array of allWords and using random order
    const randomSelectionTwo = allWords[order[1]] // random number for selection 2 using array of allWords and using random order
    const randomSelectionThree = allWords[order[2]] // random number for selection 3 using array of allWords and using random order

    this.setState({wordToMatch: data[correctSelection], loading: false})
    this.setState({selectionOne: data[randomSelectionOne], loading: false})
    this.setState({selectionTwo: data[randomSelectionTwo], loading: false})
    this.setState({selectionThree: data[randomSelectionThree], loading: false})
  }

  render() {
    return (
      <div>
        <h1>Language LightHouse</h1>
          {this.state.loading || !this.state.wordToMatch ? (
            <div>loading...</div>
          ) : (
          <div>
                <div data-testid="eng">english: {this.state.wordToMatch.eng}</div>
                <div data-testid="ger">german: {this.state.wordToMatch.ger}</div>
                <br/>
                Select from the below:
                <br/>
                <div>Num match: {this.state.selectionOne.ger}</div>
                <div>num wrong: {this.state.selectionTwo.ger}</div>
                <div>num wrong2: {this.state.selectionThree.ger}</div>
          </div>
          )}
      </div>
    )
  }
}

// render() {
//   return (
//
//         {this.state.loading || !this.state.allWords ? (
//           <div>loading...</div>
//         ) : (
//             <div data-testid="eng">
//             info: {this.state.allWords.eng}
//
//             </div>
//           )
// }
// }


export default Controls
