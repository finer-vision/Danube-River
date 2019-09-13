import React, {Component} from "react";
import PropTypes from "prop-types";
import assets from "../../assets";

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

  state = {
    src: '',
  };

  async componentDidMount() {
    try {
      const img = await assets[this.props.src];
      this.setState({src: img.default});
    } catch {
      console.warn(`Unable to load ${this.props.src}`);
    }
  }

  render() {
    return <img src={this.state.src} className={this.props.className} style={this.props.style} alt={this.props.alt}/>;
  }
}
