import React, { Component } from "react";
import PropTypes from "prop-types";
import { asset } from "../core/utils";
import Tilde from "./Tilde";

export default class Hero extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    pageTitleType: PropTypes.oneOf(['type-hero','type-single-page']),
    className: PropTypes.string
  };

static defaultProps = {
    pageTitleType: "type-hero",
    className: ''
};

  displayPageTitle() {
      if(this.props.pageTitleType === "type-hero"){
          return (
              <div className="type-hero">
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
        <img src={asset('assets/img/cgtn-logo.png')} alt="CGTN Logo"/>
      </div>

      <div className="Hero__title">
        <Tilde/>
        <div className="type-h4">
          {this.props.tag}
        </div>
          {this.displayPageTitle()}
      </div>
    </div>
  );
}
