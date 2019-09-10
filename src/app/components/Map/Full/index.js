import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";
import Popup from "./Popup";
import {getScale, getSegmentCoordinate} from "../utils";
import {asset} from "../../../core/utils";
import {MAP, TILE_COORDINATES} from "../consts";

@MapContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.articles[0]},
  };

  state = {
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.#setScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.#setScreen);
  }

  #setScreen = () => this.setState({screen: {width: window.innerWidth, height: window.innerHeight}});

  render() {
    const segmentCoordinates = [
      getSegmentCoordinate(this.state.screen.width, this.state.screen.height, 0),
      getSegmentCoordinate(this.state.screen.width, this.state.screen.height, 1),
      getSegmentCoordinate(this.state.screen.width, this.state.screen.height, 2),
      getSegmentCoordinate(this.state.screen.width, this.state.screen.height, 3),
      getSegmentCoordinate(this.state.screen.width, this.state.screen.height, 4),
    ];

    const scale = getScale(this.state.screen.width, this.state.screen.height);
    const activeCoordinate = segmentCoordinates[this.props.map.activeItem.index];

    return (
      <div className="MapFull">
        <div className="MapFull__overlay">
          <Nav/>
          <Popup/>
        </div>

        <div className="MapFull__map">
          <div
            className="MapFull__map-container"
            style={{
              transform: `translate(${activeCoordinate.x}px, ${activeCoordinate.y}px) scale(${scale})`,
              width: `${MAP.width}px`,
              height: `${MAP.height}px`,
            }}
          >
            {[1, 2, 3, 4, 5].map((segment, index) => (
              <img
                key={`map-segment-${segment}`}
                src={asset(`/assets/img/map/segments/${segment}.jpg`)}
                className={`MapFull__map-segment MapFull__map-segment--${segment}`}
                style={{
                  zIndex: 5 - segment,
                  top: `${100 * TILE_COORDINATES[index].y}%`,
                  left: `${100 * TILE_COORDINATES[index].x}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
