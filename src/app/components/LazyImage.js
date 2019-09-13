import React, {Component} from "react";
import PropTypes from "prop-types";

export default class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    alt: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    style: {},
    alt: '',
  };

  render() {
    return <img src={this.props.src} className={this.props.className} style={this.props.style} alt={this.props.alt}/>;
  }
}
