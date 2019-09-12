import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {AppContext} from "../context/AppContext";

@AppContext
@withRouter
export default class Screen extends Component {
  static propTypes = {
    lockSections: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    lockSections: false,
  };

  #screen = createRef();

  componentDidMount() {
    this.#screen.current !== null && this.props.app.setScreen(this.#screen.current);
  }

  render = () => (
    <div
      ref={this.#screen}
      className={`
        Screen 
        Screen--${this.props.name} 
        ${this.props.lockSections && !this.props.app.isMobile ? 'Screen--lock-sections' : ''} 
        ${this.props.app.isMobile ? 'Screen--mobile' : ''}
      `}
    >
      {this.props.children}
    </div>
  );
}
