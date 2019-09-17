import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import {Waypoint} from "react-waypoint";
import {AppContext} from "../context/AppContext";
import Services from "../services";
import {map} from "../core/utils";
import config from "../core/config";

@AppContext
export default class Section extends Component {
  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    backgroundImg: PropTypes.string,
    name: PropTypes.string,
    parallax: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    })]),
  };

  static defaultProps = {
    show: true,
    className: '',
    backgroundImg: null,
    name: null,
    parallax: false,
  };

  #container = createRef();

  state = {
    container: null,
  };

  #toggleVisible = visible => () => {
    if (this.props.name === null && visible) {
      this.props.app.toggleLockScroll(false);
    }
  };

  #getStyle = () => {
    if (this.props.backgroundImg === null) {
      return {};
    }
    const style = {backgroundImage: `url(${this.props.backgroundImg})`};
    if (this.state.container !== null) {
      style.backgroundPosition = `0% ${map(this.state.container.top, window.innerHeight, -this.state.container.height, 100, 0)}%`;
    }
    return style;
  };

  #setContainer = () => {
    if (this.props.parallax === false) {
      return;
    }
    if (!this.#container.current) {
      return this.setState({container: null});
    }
    const {top, height} = this.#container.current.getBoundingClientRect();
    const container = this.state.container || {};
    container.top = top;
    container.height = height;
    if (container.hasOwnProperty('startTop')) {
      container.startTop = top;
    }
    return this.setState({container});
  };

  #handleScroll = async () => {
    if (this.props.parallax === false) {
      return;
    }
    this.#setContainer();
  };

  #handleResize = () => this.#setContainer();

  componentDidMount() {
    this.#setContainer();
    Services.event.on('screen.scroll', this.#handleScroll);
    Services.event.on('screen.resize', this.#handleResize);
  }

  componentWillUnmount() {
    Services.event.off('screen.scroll', this.#handleScroll);
    Services.event.off('screen.resize', this.#handleResize);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={`Section ${this.props.className}`} style={this.#getStyle()} ref={this.#container}>
        {this.props.children}
        <Waypoint onEnter={this.#toggleVisible(true)} onLeave={this.#toggleVisible(false)}/>
      </div>
    );
  }
}
