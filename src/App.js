import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     message: "Hello World"
  //   }
  // }

  constructor(props){
    super(props)
    // this.state = {
    //   PLAYER_ONE_SYMBOL: "X",
    //   PLAYER_TWO_SYMBOL: "O",
    //   currentTurn: "X",
    //   board: [
    //     "", "", "", "", "", "", "", "", ""
    //   ]
    // }
    // this.baseState = this.state

    this.state = this.initialState;
  }

  handleClick(index) {
    if(this.state.board[index] === "") {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
      })
    }
  }

  get initialState() {
    return {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ]
    };
  }

  resetState() {
    this.setState(this.initialState);
  }

  // resetBoard = () => {
  //   console.log("hello")
  //   console.log(this.baseState)
  //   this.setState(this.baseState);
  // }

  render() {
    return (
        // <p onClick={() => this.setState({message: this.state.message + '!'})}> {this.state.message}</p>
        <div className="container">
          <div className="board">
            {this.state.board.map((cell, index) => {
              return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
            })}
          </div>
          <div className="resetdiv" onClick={() => this.resetState()
            //   this.setState({ board: [
            //   "", "", "", "", "", "", "", "", ""],
            // })
          }>Reset Game!
          </div>
        </div>
    );
  }
}

export default App;
