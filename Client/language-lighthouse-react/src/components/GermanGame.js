import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
    super(props)
      this.state = {
        wordToMatch: [],
        selectionOne: [],
        selectionTwo: [],
        selectionThree: [],
        counter: 0,
        answer: "",
        apiLength: 0,
        correctSelection: 0,
        availableSelectionsObj: 0,
        availableSelectionsArr: 0,
        randomOrderObj: 0,
        orderArr: 0,
        randomSelectionOne: 0,
        randomSelectiontTwo: 0,
        randomSelectiontThree: 0,
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
      this.changeWord()
        } else {
      this.setState({answer: "INCORRECT"})
      console.log("incorrect availableSelectionsObj", this.state.availableSelectionsObj, "availableSelectionsArr", this.state.availableSelectionsArr)
    }
    // id === this.state.wordToMatch.id ? console.log("correct") : console.log("incorrect")
    // this.setState({counter: this.state.counter + 1})
  }

  async changeWord() {
    this.setState({counter: this.state.counter + 1})
    this.setState({answer: "CORRECT"})
    const correctSelection = await Math.floor(Math.random() * (this.state.apiLength))
    this.setState({correctSelection: correctSelection}) // the random number used to find a random word as basis of turn
    const newRandomWord = await this.state.apiData[this.state.correctSelection]
    this.setState({wordToMatch: newRandomWord})
    console.log("check wordToMatch 1>>>>>", this.state.wordToMatch.eng, "correctSelection", this.state.apiData[this.state.correctSelection], "new word", newRandomWord)

    const randomArray = await Array.from(this.myRandomInts(3, this.state.apiLength, this.state.correctSelection), (v, i) => v)
    this.setState({availableSelectionsArr: randomArray}) // converting object of available selections into an array and zero indexing

    this.setState({orderArr: Array.from(this.myRandomOrder(3, 3), (v, i) => v)}) // converting order obj to array and zero indexing

    this.setState({randomSelectionOne: this.state.availableSelectionsArr[this.state.orderArr[0]-1]}) // random number for selection 1 using array of allWords and using random order
    this.setState({randomSelectionTwo: this.state.availableSelectionsArr[this.state.orderArr[1]-1]}) // random number for selection 2 using array of allWords and using random order
    this.setState({randomSelectionThree: this.state.availableSelectionsArr[this.state.orderArr[2]-1]}) // random number for selection 3 using array of allWords and using random order
    console.log("check", "check randomSelectionOne>>>", this.state.randomSelectionOne, "check randomSelectionTwo>>>", this.state.randomSelectionTwo, "check randomSelectionThree>>>>", this.state.randomSelectionThree, "check availableSelectionsArr>>>>", this.state.availableSelectionsArr)
    console.log("check wordToMatch 2>>>>>>", this.state.wordToMatch.eng)

    this.setState({selectionOne: this.state.apiData[this.state.randomSelectionOne]})
    this.setState({selectionTwo: this.state.apiData[this.state.randomSelectionTwo]})
    this.setState({selectionThree: this.state.apiData[this.state.randomSelectionThree]})
    console.log("check api data", this.state.apiData, "check SelectionOne>>>", this.state.apiData[this.state.randomSelectionOne], "check SelectionTwo>>>", this.state.apiData[this.state.randomSelectionTwo], "check SelectionThree>>>>", this.state.apiData[this.state.randomSelectionThree])
    // console.log("check SelectionOne>>>", this.state.SelectionOne.ger, "check SelectionTwo>>>", this.state.SelectionTwo.ger, "check SelectionThree>>>>", this.state.SelectionThree.ger, "check availableSelectionsArr>>>>", this.state.availableSelectionsArr)

  }


  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/german'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({apiData: data, loading: false})

    // const cat = "modal" // category
    // const newData = data.filter(function (word) { // filter array by category = modal verbs.  array indexes can then be used
    // return word.category === cat;
    // });
    // console.log(newData)

    this.setState({apiLength: data.length-1})
    console.log("dm api length", this.state.apiLength)
    this.setState({correctSelection: Math.floor(Math.random() * (this.state.apiLength)) }) // the random number used to find a random word as basis of turn
    this.setState({wordToMatch: this.state.apiData[this.state.correctSelection]})
    console.log("did mount wordToMatch", this.state.wordToMatch.eng)

    this.setState({randomArray: Array.from(this.myRandomInts(3, this.state.apiLength, this.state.correctSelection), (v, i) => v)})
    this.setState({availableSelectionsArr: this.state.randomArray}) // converting object of available selections into an array and zero indexing

    this.setState({orderArr: Array.from(this.myRandomOrder(3, 3), (v, i) => v)}) // converting order obj to array and zero indexing
    console.log("did mount", "orderArr", this.state.orderArr)

    this.setState({randomSelectionOne: this.state.availableSelectionsArr[this.state.orderArr[0]-1]}) // random number for selection 1 using array of allWords and using random order
    this.setState({randomSelectionTwo: this.state.availableSelectionsArr[this.state.orderArr[1]-1]}) // random number for selection 2 using array of allWords and using random order
    this.setState({randomSelectionThree: this.state.availableSelectionsArr[this.state.orderArr[2]-1]}) // random number for selection 3 using array of allWords and using random order
    console.log("DM randomSelectionOne>>>", this.state.randomSelectionOne, "dm randomSelectionTwo>>>", this.state.randomSelectionTwo, "DM randomSelectionThree>>>>", this.state.randomSelectionThree)

    this.setState({selectionOne: this.state.apiData[this.state.randomSelectionOne]})
    this.setState({selectionTwo: this.state.apiData[this.state.randomSelectionTwo]})
    this.setState({selectionThree: this.state.apiData[this.state.randomSelectionThree]})
    console.log("dm api data", this.state.apiData, "dm SelectionOne>>>", this.state.apiData[this.state.randomSelectionOne], "dm SelectionTwo>>>", this.state.apiData[this.state.randomSelectionTwo], "dm SelectionThree>>>>", this.state.apiData[this.state.randomSelectionThree])
    // console.log("dm SelectionOne>>>", this.state.SelectionOne.ger, "DM SelectionTwo>>>", this.state.SelectionTwo.ger, "dm SelectionThree>>>>", this.state.SelectionThree.ger, "DM availableSelectionsArr>>>>", this.state.availableSelectionsArr)

  }

  render() {
    return (
      <div>
        <h1>Language LightHouse</h1>
          <div>{this.state.answer}</div>
          <br/>
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
