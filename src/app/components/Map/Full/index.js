import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";
import Popup from "./Popup";

const MAP = {
  width: 12000,
  height: 5483,
};

@MapContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.menu[0]},
  };

  render() {
    return (
      <div className="MapFull">
        <Nav/>
        <Popup/>
      </div>
    );
  }
}
