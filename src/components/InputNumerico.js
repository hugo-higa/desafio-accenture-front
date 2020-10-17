import React, { Component } from "react";
import axios from "axios";

export class InputNumerico extends Component {
  state = {
    text: [],
    number: null
  };
  handleEnter = () => {
    console.log(this.state.number);
    // axios
    //  .post("https://accenture-challenge-gama.herokuapp.com/accenture",
    //  {
    //    number: this.state.number
    //  });
    this.setState({
      text: [...this.state.text, this.state.number]
    });
    console.log(this.state.text);
  };
  inputNumber = (number) => {
    if (number === this.state.number % 10 && this.state.number < 100) {
      this.setState({
        number: this.state.number * 10 + number
      });
    } else {
      this.setState({
        number
      });
      this.handleEnter();
    }
  };
  render() {
    return (
      <div>
        <input value={this.state.text.join(" ")} />
        <button>voltar</button>
        <button onClick={this.handleEnter}>enter</button>
        <button onClick={() => this.inputNumber(1)}>1</button>
        <button onClick={() => this.inputNumber(2)}>2</button>
        <button onClick={() => this.inputNumber(3)}>3</button>
        <button onClick={() => this.inputNumber(4)}>4</button>
        <button onClick={() => this.inputNumber(5)}>5</button>
        <button onClick={() => this.inputNumber(6)}>6</button>
        <button onClick={() => this.inputNumber(7)}>7</button>
        <button onClick={() => this.inputNumber(8)}>8</button>
        <button onClick={() => this.inputNumber(9)}>9</button>
        <button onClick={() => this.inputNumber(-1)}>*</button>
        <button onClick={() => this.inputNumber(0)}>0</button>
        <button onClick={() => this.inputNumber()}>#</button>
        <button onClick={this.handleEnter}>enter</button>
      </div>
    );
  }
}

export default InputNumerico;
