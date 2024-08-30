import React, { Component } from "react";
import NameTagList from "./NameTagList";
import UserInput from "./UserInput";
import "./styles.css";

class App extends Component {
  state = {
    names: []
  };
addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
};

componentDidUpdated() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
}

componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
        const savedNames = JSON.parse(savedNamesString);
        this.setState({ names: savedNames });
    }
}

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
