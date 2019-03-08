import React, { Component } from "react";

class CustomQuoteInput extends Component {
  changeSentenceStructure = e => {
    const newSentence = e.target.value;
    this.props.changeSentenceStructure(newSentence);
  };
  render() {
    return (
      <div>
        <label>
          Custom Quote:
          <input
            type="text"
            onChange={this.changeSentenceStructure.bind(this)}
          />
        </label>
      </div>
    );
  }
}

export default CustomQuoteInput;
