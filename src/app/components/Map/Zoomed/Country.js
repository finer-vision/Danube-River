import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Country extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  render = () => (
    <text
      fontFamily="Aktiv Grotesk Ex Trial"
      fontSize={14}
      letterSpacing={2}
      fill="#FFF"
      transform={`translate(${this.props.x} ${this.props.y})`}
    >
      <tspan x={2} y={14}>
        {this.props.name.toUpperCase()}
      </tspan>
    </text>
  );
}
