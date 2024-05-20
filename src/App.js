import "./App.css";
import React from "react";
import Sapa from "./sapa/sapa.js";
import Click from "./click/click.js";
import Paragraph from "./paragraph/paragraph.js";
import Log from "./log/log.js";

function App() {
  return (
    <div className="App">
      <Sapa name="Napa" />
      <Click />
      <Log />
      <Paragraph kata="Hallo aku Props PROPS DISINI" />
    </div>
  );
}

export default App;