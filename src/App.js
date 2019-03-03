import React, { Component } from "react";
import "./App.css";
import QuoteButton from "./components/QuoteButton";
import QuotesTextArea from "./components/QuotesTextArea";

import Sentencer from "sentencer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      structure: "{{adjective}} {{noun}}, {{adjective}} {{noun}}",
      quote: ""
    };
  }

  getNewQuote = () => {
    const sentence = Sentencer.make(this.state.structure);

    this.setState({ quote: sentence });
  };

  render() {
    return (
      <div className="App">
        <div>Quote Generator for your Un-Imaginative Ass</div>
        <br />
        <QuoteButton getNewQuote={this.getNewQuote} />
        <QuotesTextArea quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
