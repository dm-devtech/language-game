import React, { Component } from 'react';
import Footer from '../components/Footer';

class LatinGame extends Component {

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
      this.setState({answer: "CORRECT"})
      this.changeWord()
        } else {
      this.setState({answer: "INCORRECT"})
      setTimeout(() => {
        this.setState({answer: ""})
      }, 500);
    }
    // id === this.state.wordToMatch.id ? console.log("correct") : console.log("incorrect")
    // this.setState({counter: this.state.counter + 1})
  }

  async changeWord() {
    this.setState({counter: this.state.counter + 1}) // score +1 when answer correct
    setTimeout(() => {
      this.setState({answer: ""})
    }, 500); // correct message shown during game

    const correctSelection = await Math.floor(Math.random() * (this.state.apiLength)) // random number based on api length
    this.setState({correctSelection: correctSelection}) // random number for word index

    const newRandomWord = await this.state.apiData[this.state.correctSelection] // using index with api to set word for turn
    this.setState({wordToMatch: newRandomWord}) // allocating word to state

    const randomArray = await Array.from(this.myRandomInts(3, this.state.apiLength, this.state.correctSelection), (v, i) => v) // random numbers for selections
    this.setState({availableSelectionsArr: randomArray}) // allocating random numbers to state

    this.setState({orderArr: Array.from(this.myRandomOrder(3, 3), (v, i) => v)}) // allocating randomised selection order to state

    this.setState({randomSelectionOne: this.state.availableSelectionsArr[this.state.orderArr[0]-1]}) // randomising order of selections
    this.setState({randomSelectionTwo: this.state.availableSelectionsArr[this.state.orderArr[1]-1]}) // same as above
    this.setState({randomSelectionThree: this.state.availableSelectionsArr[this.state.orderArr[2]-1]}) // same as above

    this.setState({selectionOne: this.state.apiData[this.state.randomSelectionOne]}) // setting selection to state used for buttons
    this.setState({selectionTwo: this.state.apiData[this.state.randomSelectionTwo]}) // same as above
    this.setState({selectionThree: this.state.apiData[this.state.randomSelectionThree]}) // same as above

  }


  async componentDidMount() {
    const url = 'http://language-lighthouse.herokuapp.com/api/latin'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({apiData: data, loading: false}) // setting data to state

    // const cat = "modal" // category
    // const newData = data.filter(function (word) { // filter array by category = modal verbs.  array indexes can then be used
    // return word.category === cat;
    // });
    // console.log(newData)

    this.setState({apiLength: data.length-1})

    this.setState({correctSelection: Math.floor(Math.random() * (this.state.apiLength)) }) // random number based on api length
    this.setState({wordToMatch: this.state.apiData[this.state.correctSelection]}) // using index with api to set word for turn

    this.setState({randomArray: Array.from(this.myRandomInts(3, this.state.apiLength, this.state.correctSelection), (v, i) => v)}) // random numbers for selections
    this.setState({availableSelectionsArr: this.state.randomArray}) // random numbers for selections allocated to available selections

    this.setState({orderArr: Array.from(this.myRandomOrder(3, 3), (v, i) => v)}) // converting order obj to array and zero indexing

    this.setState({randomSelectionOne: this.state.availableSelectionsArr[this.state.orderArr[0]-1]}) // random number for selection 1 using array of allWords and using random order
    this.setState({randomSelectionTwo: this.state.availableSelectionsArr[this.state.orderArr[1]-1]}) // random number for selection 2 using array of allWords and using random order
    this.setState({randomSelectionThree: this.state.availableSelectionsArr[this.state.orderArr[2]-1]}) // random number for selection 3 using array of allWords and using random order

    this.setState({selectionOne: this.state.apiData[this.state.randomSelectionOne]}) // using word and random order to alocate selections to buttons
    this.setState({selectionTwo: this.state.apiData[this.state.randomSelectionTwo]}) // same as above
    this.setState({selectionThree: this.state.apiData[this.state.randomSelectionThree]}) // same as above

  }

  render() {
    return (
      <div>
        <div className="Header">Language Lighthouse</div>
          {this.state.loading || !this.state.wordToMatch ? (
            <div>loading...</div>
          ) : (
          <>
                <div>
                <div className="body-text" data-testid="eng">English: {this.state.wordToMatch.eng}</div>
                <br/>
                <div >
                <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionOne.id}>{this.state.selectionOne.lat} </button>
                <br/>
                <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionTwo.id}>{this.state.selectionTwo.lat} </button>
                <br/>
                <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionThree.id}>{this.state.selectionThree.lat} </button>
                <br/>
                </div>
                <div className="body-text">Score: {this.state.counter} {this.state.answer}</div>
                </div>
            </>
          )}
          <div className="body-text"><Footer /></div>
      </div>
    )
  }
}


export default LatinGame
