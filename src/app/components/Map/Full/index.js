import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";
import Popup from "./Popup";
import {asset, map} from "../../../core/utils";

const MAP = {
  width: 12000,
  height: 5483,
};

// 1923x1209
const MAP_SEGMENT = {
  width: 0.16025,
  height: 0.22049972642713841,
};

const getCoordinate = (x, y) => ({
  x: (1 / MAP.width) * x,
  y: (1 / MAP.height) * y,
});

@MapContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.menu[0]},
  };

  state = {
    section: 0,
  };

  render() {
    const coordinates = [
      getCoordinate(1224, 866),
    ];

    return (
      <div className="MapFull">
        <div className="MapFull__overlay">
          <Nav/>
          <Popup/>
        </div>

        <div className="MapFull__map">
          <img
            src={asset('./assets/img/map-full.jpg')}
            onDragStart={event => event.preventDefault()}
            style={{
              transform: `translate(-${coordinates[this.state.section].x}%, -${coordinates[this.state.section].y}%)`,
            }}
          />
        </div>
      </div>
    );
  }
}
