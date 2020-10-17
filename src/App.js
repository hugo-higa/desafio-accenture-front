import React, { Component } from "react";
import InputNumerico from "./components/InputNumerico";

export class App extends Component {
  state = {
    texto: []
  };

  render() {
    return (
      <div>
        <InputNumerico />
      </div>
    );
  }
}

export default App;
