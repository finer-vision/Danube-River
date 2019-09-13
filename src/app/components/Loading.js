import React, {Component} from "react";
import PropTypes from "prop-types";
import {map} from "../core/utils";
import config from "../core/config";

const TITLE_SVG_VIEW_BOX = {
  x: 0,
  y: 0,
  width: 569.69,
  height: 144.58,
};

const TITLE = 'LIFE OF A RIVER';

const Title = props => (
  <text
    fill={props.fill}
    fontFamily="Tungsten, sans-serif"
    fontSize="135"
    fontWeight="600"
    letterSpacing=".014em"
    style={{isolation: 'isolate'}}
    transform="translate(0 114.75)"
  >
    {props.title}
  </text>
);

export default class Loading extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['screen', 'preload']),
    progress: PropTypes.number,
  };

  static defaultProps = {
    type: 'screen',
    progress: 0,
  };

  render() {
    return (
      <div className={`Loading Loading--${this.props.type}`}>
        <div className="Loading__hero">
          <div className="type-h2">The Danube</div>
          <div className="Loading__hero-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={Object.values(TITLE_SVG_VIEW_BOX).join(' ')}>
              <defs>
                <clipPath
                  id="text-mask"
                  transform={`translate(0 ${this.props.type === 'screen' ? -TITLE_SVG_VIEW_BOX.height : map(this.props.progress, 0, 100, 0, -TITLE_SVG_VIEW_BOX.height)})`}
                >
                  <path fill="none" d="M0 0H569.55V143.75H0z"/>
                </clipPath>
              </defs>
              <Title title={TITLE} fill={config.color['blue-100']}/>
              <g clipPath="url(#text-mask)">
                <Title title={TITLE} fill="#fff"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="Loading__progress type-h3">{this.props.progress}%</div>
        <div className="Loading__progress-message type-tag">Loading your experience</div>
      </div>
    );
  }
}
