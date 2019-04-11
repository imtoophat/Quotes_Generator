import React, { Component } from "react";

class NounButton extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button onClick={() => this.props.addNoun()}>Insert Noun</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NounButton;
