import React, { Component } from "react";
import "./App.css";
import "./styles/main.css";
import CustomQuoteInput from "./components/main/CustomQuoteInput";
import QuoteButton from "./components/main/QuoteButton";
import QuotesTextArea from "./components/main/QuotesTextArea";

import Sentencer from "sentencer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      structure: "",
      quote: ""
    };
  }

  getNewQuote = () => {
    const sentence = Sentencer.make(this.state.structure);

    this.setState({ quote: sentence });
  };

  changeSentenceStructure = newStructure => {
    this.setState({ structure: newStructure });
  };

  render() {
    return (
      <div className="App">
        <div className="main-region">
          <div>Quote Generator for your Un-Imaginative Ass</div>
          <br />
          <QuoteButton getNewQuote={this.getNewQuote} />
          <QuotesTextArea quote={this.state.quote} />
          <br />
          <CustomQuoteInput
            className="CustomQuoteInput"
            currStructure={this.state.structure}
            changeSentenceStructure={this.changeSentenceStructure.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
