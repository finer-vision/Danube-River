import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";
import Popup from "./Popup";
import {getScale, getSegmentCoordinate} from "../utils";
import {asset} from "../../../core/utils";
import {MAP, TILE_COORDINATES} from "../consts";
import {AppContext} from "../../../context/AppContext";
import LazyImage from "../../LazyImage";

@MapContext
@AppContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.articles[0]},
  };

  render() {
    const segmentCoordinates = [
      getSegmentCoordinate(this.props.app.screenW, this.props.app.screenH, 0),
      getSegmentCoordinate(this.props.app.screenW, this.props.app.screenH, 1),
      getSegmentCoordinate(this.props.app.screenW, this.props.app.screenH, 2),
      getSegmentCoordinate(this.props.app.screenW, this.props.app.screenH, 3),
      getSegmentCoordinate(this.props.app.screenW, this.props.app.screenH, 4),
    ];

    const scale = getScale(this.props.app.screenW, this.props.app.screenH);
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
              <LazyImage
                key={`map-segment-${segment}`}
                src={asset(`assets/img/map/segments/${segment}.jpg`)}
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
