import React, {Component} from "react";
import {asset} from "../../core/utils";
import LazyImage from "../LazyImage";

export default class Clouds extends Component {
  render() {
    return (
      <div className="Clouds">
        <LazyImage src={asset('assets/img/map/fog.png')} className="Clouds__img"/>
      </div>
    );
  }
}
