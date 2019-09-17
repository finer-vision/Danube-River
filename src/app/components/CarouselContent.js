import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CarouselContent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="CarouselContent">
        <div className="CarouselContent__title type-h4">
          {this.props.title}
        </div>
        <div className="CarouselContent__description">
          {this.props.description}
        </div>
      </div>
    );
  }
}
