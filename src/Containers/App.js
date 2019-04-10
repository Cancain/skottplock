import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 0, name: "Stuff", price: 22, ammount: 6 },
      { id: 1, name: "More stuff", price: 22, ammount: 2 }
    ]
  };
  render() {
    return (
      <div className="App">
        <Layout items={this.state.items} />
      </div>
    );
  }
}

export default App;
