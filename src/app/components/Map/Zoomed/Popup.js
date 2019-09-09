import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Popup extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render = () => (
    <div className="MapZoomed__popup" style={{left: `${this.props.x}px`, top: `${this.props.y}px`}}>
      <div className="MapZoomed__popup-triangle"/>
      <div className="type-tag">
        {this.props.tag}
      </div>
      <div className="type-h3">
        {this.props.title}
      </div>
    </div>
  );
}
