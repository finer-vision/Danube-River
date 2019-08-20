import React, {Component} from "react";
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

  render = () => (
    <div className={`Screen Screen--${this.props.name} ${this.props.lockSections ? 'Screen--lock-sections' : ''}`}>
      {this.props.children}
    </div>
  );
}
