import React, { Component } from "react";
import PropTypes from "prop-types";
import { asset } from "../core/utils";
import ParallaxHeader from "./ParallaxHeader";

export default class Hero extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    parallaxHeaderId: PropTypes.string,
    pageTitleType: PropTypes.oneOf(['type-hero', 'type-single-page']),
    pageTagType: PropTypes.oneOf(['type-hero', 'type-single-page']),
    className: PropTypes.string,
    style: PropTypes.object,
    parallax: PropTypes.bool,
  };

  static defaultProps = {
    pageTitleType: 'type-hero',
    pageTagType: 'type-hero',
    className: '',
    style: {},
    parallax: false,
  };

  #screen = null;

  state = {
    scrollY: 0,
  };

  componentDidMount () {
    this.#screen = document.querySelector('.Screen');
    this.#screen.addEventListener('scroll', this.#handleScroll);
  }

  componentWillUnmount () {
    this.#screen.removeEventListener('scroll', this.#handleScroll);
  }

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  displayPageTag () {
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

  displayPageSubTitle () {
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
    <div className="Hero" style={this.props.style}>
      <ParallaxHeader id={this.props.parallaxHeaderId}/>

      <div className="Hero__logo">
        <img src={asset('assets/img/cgtn-logo-header-white.png')} alt="CGTN Logo"/>
      </div>

      <div className="Hero__title">
        {this.displayPageTag()}
        {this.displayPageSubTitle()}
      </div>
    </div>
  );
}
