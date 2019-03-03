import React, { Component } from "react";

class QuoteButton extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.getNewQuote()}
        >
          Get New Quote
        </button>
      </div>
    );
  }
}

export default QuoteButton;
