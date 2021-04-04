import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
    super(props)
      this.state = {
        wordToMatch: [],
        selectionOne: [],
        selectionTwo: [],
        selectionThree: [],
        counter: 0
    }
  }

  myRandomInts(quantity, max, correctSelection){
    const set = new Set()
    set.add(correctSelection)
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * (max)) + 1)
    }
    return set
  }

  myRandomOrder(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * (max)) + 1)
    }
    return set
  }

  checkAnswer = e => {
    let id = parseInt(e.target.getAttribute('word_id'))
    if(id === this.state.wordToMatch.id){
      console.log("correct")
      this.setState({counter: this.state.counter + 1})
      console.log(this.state.counter)
    } else {
      console.log("incorrect")
    }
    // id === this.state.wordToMatch.id ? console.log("correct") : console.log("incorrect")
    // this.setState({counter: this.state.counter + 1})
  }

  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/german'
    const response = await fetch(url)
    const data = await response.json()

    // const cat = "modal" // category
    // const newData = data.filter(function (word) { // filter array by category = modal verbs.  array indexes can then be used
    // return word.category === cat;
    // });
    // console.log(newData)

    const apiLength = data.length-1
    const correctSelection = (Math.floor(Math.random() * (apiLength))) // the random number used to find a random word as basis of turn

    const availableSelectionsObj = this.myRandomInts(3, apiLength, correctSelection) // object of selections available
    const availableSelectionsArr = Array.from(availableSelectionsObj, (v, i) => v) // converting object of available selections into an array and zero indexing

    const randomOrderObj = this.myRandomOrder(3, 3) // PROBLEM AREA generating three random numbers to use to randomise order of available selections
    const orderArr = Array.from(randomOrderObj, (v, i) => v) // converting order obj to array and zero indexing

    const randomSelectionOne = availableSelectionsArr[orderArr[0]-1] // random number for selection 1 using array of allWords and using random order
    const randomSelectionTwo = availableSelectionsArr[orderArr[1]-1] // random number for selection 2 using array of allWords and using random order
    const randomSelectionThree = availableSelectionsArr[orderArr[2]-1] // random number for selection 3 using array of allWords and using random order

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
          <>
                <div data-testid="eng">English: {this.state.wordToMatch.eng}</div>
                <br/>
                Select from the below:
                <br/>
                <button onClick={this.checkAnswer} word_id={this.state.selectionOne.id}>Option 1: {this.state.selectionOne.ger} </button>
                <br/>
                <button onClick={this.checkAnswer} word_id={this.state.selectionTwo.id}>Option 2: {this.state.selectionTwo.ger} </button>
                <br/>
                <button onClick={this.checkAnswer} word_id={this.state.selectionThree.id}>Option 3: {this.state.selectionThree.ger} </button>
                <br/>
                Score: {this.state.counter}
            </>
          </div>
          )}
      </div>
    )
  }
}


export default Controls
