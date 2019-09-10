import React, {Component} from "react";
import config from "../core/config";

export default class MobileMap extends Component {
  render() {
    return (
      <div className="MobileMap">
        <div className="MobileMap__info">
          <div className="type-h4 text-center">
            {config.mapInfo}
          </div>
        </div>
      </div>
    );
  }
}
