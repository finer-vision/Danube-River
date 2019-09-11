import React, {Component} from "react";
import PropTypes from "prop-types";
import {Waypoint} from "react-waypoint";
import {AppContext} from "../context/AppContext";

@AppContext
export default class Section extends Component {
  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    backgroundImg: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    show: true,
    className: '',
    backgroundImg: null,
    name: null,
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
    return {backgroundImage: `url(${this.props.backgroundImg})`};
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={`Section ${this.props.className}`} style={this.#getStyle()}>
        {this.props.children}
        <Waypoint onEnter={this.#toggleVisible(true)} onLeave={this.#toggleVisible(false)}/>
      </div>
    );
  }
}
