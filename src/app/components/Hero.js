import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import ParallaxHeader from "./ParallaxHeader";
import {AppContext} from "../context/AppContext";
import Video from "./Video";

@withRouter
@AppContext
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
    videoLoop: PropTypes.bool,
    video: PropTypes.string,
  };

  static defaultProps = {
    pageTitleType: 'type-hero',
    pageTagType: 'type-hero',
    className: '',
    style: {},
    parallax: false,
    videoLoop: false,
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
    <div className="Hero" style={this.props.style}>
      {!this.props.video && <ParallaxHeader id={this.props.parallaxHeaderId}/>}
      {this.props.video && (
        <Video
          src={this.props.video}
          muted
          autoPlay
          noSkin
          loop={this.props.videoLoop}
        />
      )}

      <div className="Hero__title">
        {this.displayPageTag()}
        {this.displayPageSubTitle()}
      </div>
    </div>
  );
}
