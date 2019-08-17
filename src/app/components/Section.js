import React, { Component } from "react";

export default class Section extends Component {
  render = () => (
    <div className={"Section " + ( this.props.classes || "") }>
      {this.props.children}
    </div>
  );
}
