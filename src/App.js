import React, { Component } from "react";
import NameTag from "./NameTag";
import "./styles.css";

class App extends Component {
  state = {
    nameData: [
      { id: 1, name: "Jayci" },
      { id: 2, name: "Embie" },
      { id: 3, name: "Squish" },
      { id: 4, name: "Togepi" },
      { id: 5, name: "Pikachu" }
    ]
  };

  renderNameTag = (nameObject) => {
    return <NameTag key={nameObject.id} name={nameObject.name} />;
  };

  render() {
    const NameTagElements = this.state.nameData.map(this.renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

export default App;