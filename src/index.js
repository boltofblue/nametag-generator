import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import nameData from "./data";

import "./styles.css";

const renderNameTag = (nameObject) => {
  return <NameTag key={nameObject.id} name={nameObject.name} />;
};

const App = () => {
  const NameTagElements = nameData.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements} {/* render the NameTagElements variable */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);