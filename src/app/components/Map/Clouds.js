import React, {Component} from "react";
import {asset} from "../../core/utils";

export default class Clouds extends Component {
  render() {
    return (
      <div className="Clouds">
        <img src={asset('/assets/img/map/fog.png')} className="Clouds__img"/>
      </div>
    );
  }
}
