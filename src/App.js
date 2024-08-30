import React, { Component } from "react";
import NameTag from "./NameTag";
import "./styles.css";

class App extends Component {
  state = {
    names: ["Embie", "Togepi", "Squish", "Jayci", "Cyndaquil"]
  };

removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
