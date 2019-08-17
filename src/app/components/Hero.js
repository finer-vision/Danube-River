import React, { Component } from "react";
import PropTypes from "prop-types";
import { asset } from '../core/utils'

export default class Hero extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  };

  render = () => (
    <div className="Hero" style={{backgroundImage: `url(${this.props.background})`}}>
      <div className="Hero__logo">
        <img src={asset('assets/img/cgtn-logo.png')} alt="CGTN Logo"/>
      </div>

      <div className="Hero__title">
        <img src={asset('assets/img/tilde.svg')} alt="Tilde"/>
        <div className="type-h4">
          {this.props.tag}
        </div>
        <div className="type-hero">
          {this.props.title}
        </div>
      </div>
    </div>
  );
}
