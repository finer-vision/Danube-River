import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Video extends Component {
  static propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })).isRequired,
  };

  render () {
    return (
      <div className="Video">
        <video playsInline {...this.props} sources={undefined}>
          {this.props.sources.map((source, index) => (
            <source key={`video-source-${index}`} src={source.src} type={source.type}/>
          ))}
        </video>
      </div>
    );
  }
}
