import React, { Component } from 'react';

class FrenchVerbs extends Component {

  constructor(props) {
    super(props)
      this.state = {
        wordToMatch: [],
        selectionOne: [],
        selectionTwo: [],
        selectionThree: [],
        counter: 0,
        answerMsg: "",
        apiLength: 0
      }
  }

  myRandomInts(quantity, max, correctWord){
    const set = new Set()
    set.add(correctWord)
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
      this.setState({answerMsg: "CORRECT"})
      this.nextWord()
    } else {
      this.setState({answerMsg: "INCORRECT"})
      setTimeout(() => {
        this.setState({answerMsg: ""})
      }, 1000);
    }
    // id === this.state.wordToMatch.id ? console.log("correct") : console.log("incorrect")
    // this.setState({counter: this.state.counter + 1})
  }

  async newRandomWord() {
    const correctWord = await Math.floor(Math.random() * (this.state.apiLength)) // random number based on api length
    return correctWord
  }

  async randomisedOptions(correctWord) {
    const randomOptions = await Array.from(this.myRandomInts(3, this.state.apiLength, correctWord), (v, i) => v) // random numbers for options
    return randomOptions
  }

  async randomisedOrder() {
    const randomOrder = await Array.from(this.myRandomOrder(3, 3), (v, i) => v)
    return randomOrder
  }

  async allocatedOptions(randomOptions, randomOrders) {
    const randomOptionOne = await randomOptions[randomOrders[0]-1] // randomising order of options
    const randomOptionTwo = await randomOptions[randomOrders[1]-1] // same as above
    const randomOptionThree = await randomOptions[randomOrders[2]-1] // same as above
    let options = [randomOptionOne, randomOptionTwo, randomOptionThree]
    return options
  }

  async nextWord() {
    this.setState({counter: this.state.counter + 1}) // score +1 when answer correct
    setTimeout(() => {
      this.setState({answerMsg: ""})
    }, 1000); // correct message shown during game

    this.setState({apiLength: this.state.dictionary.length-1})

    const correctWord = await this.newRandomWord()
    this.setState({wordToMatch: this.state.dictionary[correctWord]}) // allocating word to state

    const randomOptions = await this.randomisedOptions(correctWord)
    const randomOrders = await this.randomisedOrder() // allocating randomised selection order
    const [randomOptionOne, randomOptionTwo, randomOptionThree] = await this.allocatedOptions(randomOptions, randomOrders)

    this.setState({selectionOne: this.state.dictionary[randomOptionOne]}) // setting selection to state used for buttons
    this.setState({selectionTwo: this.state.dictionary[randomOptionTwo]}) // same as above
    this.setState({selectionThree: this.state.dictionary[randomOptionThree]}) // same as above
  }


  async componentDidMount() {
    const url = 'https://language-lighthouse.herokuapp.com/api/french'
    const response = await fetch(url)
    const data = await response.json()

    const filteredDictionary = await data.filter(function (word) {
      return word.wordtype === 'verb';
    })

    this.setState({dictionary: filteredDictionary})
    this.setState({apiLength: this.state.dictionary.length-1})

    const correctWord = await Math.floor(Math.random() * (this.state.apiLength)) // random number based on api length
    this.setState({wordToMatch: this.state.dictionary[correctWord]}) // allocating word to state

    const randomOptions = await this.randomisedOptions(correctWord)
    const randomOrders = await this.randomisedOrder() // allocating randomised selection order
    const [randomOptionOne, randomOptionTwo, randomOptionThree] = await this.allocatedOptions(randomOptions, randomOrders)

    this.setState({selectionOne: this.state.dictionary[randomOptionOne]}) // setting selection to state used for buttons
    this.setState({selectionTwo: this.state.dictionary[randomOptionTwo]}) // same as above
    this.setState({selectionThree: this.state.dictionary[randomOptionThree]}) // same as above
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
                <div className="answer" data-testid="eng">English: {this.state.wordToMatch.eng}</div>
                  <div>
                    <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionOne.id}>{this.state.selectionOne.fre} </button>
                      <br/>
                    <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionTwo.id}>{this.state.selectionTwo.fre} </button>
                      <br/>
                    <button className="button" onClick={this.checkAnswer} word_id={this.state.selectionThree.id}>{this.state.selectionThree.fre} </button>
                      <br/>
                  </div>
                    <div className="body-text">Score: {this.state.counter} {this.state.answerMsg}</div>
                </div>
            </>
          )}
      </div>
    )
  }
}


export default FrenchVerbs
