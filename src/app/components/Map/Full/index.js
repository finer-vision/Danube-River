import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";
import Popup from "./Popup";
import {asset} from "../../../core/utils";
import {getScaledMap, getSegmentCoordinate} from "../utils";

@MapContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.menu[0]},
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
    ];

    const scaledMap = getScaledMap(this.state.screen.width, this.state.screen.height);
    const activeCoordinate = segmentCoordinates[this.props.map.activeItem.id - 1];

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
              transform: `translate(${activeCoordinate.x}px, ${activeCoordinate.y}px)`,
              width: `${scaledMap.width}px`,
              height: `${scaledMap.height}px`,
            }}
          />
        </div>
      </div>
    );
  }
}
