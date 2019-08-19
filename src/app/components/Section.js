import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Section extends Component {

  static propTypes = {
    show: PropTypes.bool,
  };

  static defaultProps = {
    show: true,
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={"Section " + (this.props.classes || "")}>
        {this.props.children}
      </div>
    );
  }
}
