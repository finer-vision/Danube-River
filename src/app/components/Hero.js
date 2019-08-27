import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset} from "../core/utils";
import Nav from './Nav';

export default class Hero extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    pageTitleType: PropTypes.oneOf(['type-hero', 'type-single-page']),
    pageTagType: PropTypes.oneOf(['type-hero', 'type-single-page']),
    className: PropTypes.string
  };

  static defaultProps = {
    pageTitleType: 'type-hero',
    pageTagType: 'type-hero',
    className: ''
  };

  displayPageTag() {
    if (this.props.pageTagType === 'type-hero') {
      return (
        <div className="animation-fade-in-from-left">
          <div className="type-h2">
            {this.props.tag}
          </div>
        </div>
      );
    }
    return (
      <div className="animation-fade-in">
        <div className="type-h2">
          {this.props.tag}
        </div>
      </div>
    );
  }

  displayPageSubTitle() {
    if (this.props.pageTitleType === 'type-hero') {
      return (
        <div className="type-hero animation-fade-in-from-bottom">
          {this.props.title}
        </div>
      );
    }
    return (
      <h1 className="type-h1 type-single-page animation-fade-in animation-fade-in--delay-1s">
        {this.props.title}
      </h1>
    );
  }

  render = () => (
    <div className="Hero" style={{backgroundImage: `url(${this.props.background})`}}>
      <Nav />
      <div className="Hero__logo">
        <img src={asset('assets/img/cgtn-logo-header-white.png')} alt="CGTN Logo"/>
      </div>

      <div className="Hero__title">
        {this.displayPageTag()}
        {this.displayPageSubTitle()}
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
