import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {AppContext} from "../context/AppContext";

@AppContext
@withRouter
export default class Screen extends Component {
  static defaultProps = {
    name: '',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render = () => (
    <div className={`Screen Screen--${this.props.name}`}>
      {this.props.children}
    </div>
  );
}
