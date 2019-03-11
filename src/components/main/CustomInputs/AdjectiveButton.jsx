import React, { Component } from "react";

class AdjectiveButton extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button onClick={() => this.props.addAdjective()}>
              Insert Adjective
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdjectiveButton;
