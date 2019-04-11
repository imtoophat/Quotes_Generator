import React, { Component } from "react";
import AdjectiveButton from "./CustomInputs/AdjectiveButton";
import NounButton from "./CustomInputs/NounButton";

class CustomQuoteInput extends Component {
  changeSentenceStructure = e => {
    const newSentence = e.target.value;
    this.setState({ currStructure: newSentence });
    this.props.changeSentenceStructure(newSentence);
  };

  addAdjective = () => {
    let newStructure = this.props.currStructure;
    newStructure += ` {{adjective}}`;
    this.setState({ currStructure: newStructure });
    this.props.changeSentenceStructure(newStructure);
  };

  addNoun = () => {
    let newStructure = this.props.currStructure;
    newStructure += ` {{noun}}`;
    this.setState({ currStructure: newStructure });
    this.props.changeSentenceStructure(newStructure);
  };
  render() {
    return (
      <div>
        <label>
          Custom Quote:
          <input
            type="text"
            value={this.props.currStructure}
            onChange={this.changeSentenceStructure.bind(this)}
          />
        </label>

        <NounButton addNoun={this.addNoun.bind(this)} />
        <AdjectiveButton addAdjective={this.addAdjective.bind(this)} />
      </div>
    );
  }
}

export default CustomQuoteInput;
