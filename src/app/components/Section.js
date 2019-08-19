import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Section extends Component {

  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    show: true,
    className: '',
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={`Section ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
