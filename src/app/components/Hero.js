import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset} from "../core/utils";
import Tilde from "./Tilde";

export default class Hero extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    pageTitleType: PropTypes.oneOf(['type-hero', 'type-single-page']),
    className: PropTypes.string
  };

  static defaultProps = {
    pageTitleType: 'type-hero',
    className: ''
  };

  displayPageTitle() {
    if (this.props.pageTitleType === 'type-hero') {
      return (
        <div className="type-hero animation-fade-in-from-bottom">
          {this.props.title}
        </div>
      );
    }
    return (
      <h1 className="type-h1 type-single-page">
        {this.props.title}
      </h1>
    );
  }

  render = () => (
    <div className="Hero" style={{backgroundImage: `url(${this.props.background})`}}>
      <div className="Hero__logo">
        <img src={asset('assets/img/cgtn-logo-header-white.png')} alt="CGTN Logo"/>
      </div>

      <div className="Hero__title">
        <div className="animation-fade-in-from-left">
          <div className="type-h2">
            {this.props.tag}
          </div>
        </div>
        {this.displayPageTitle()}
      </div>

      <div className="ScrollDownButton text-center">
        <img src={asset('assets/img/curbe-yellow.svg')}/>
        <div className="ScrollDownButton__text">
          Scroll down
        </div>
      </div>
    </div>
  );
}
