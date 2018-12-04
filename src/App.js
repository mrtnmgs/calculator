import React, { Component } from "react";
import Screen from "./components/Screen";
import Memory from "./components/Memory";
import Dial from "./components/Dial";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen />
        <Memory />
        <Dial />
        <Result />
      </div>
    );
  }
}

export default App;
