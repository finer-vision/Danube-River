import React, {Component} from "react";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";

export default class HydroMap extends Component {
  render() {
    return (
      <div className="HydroMap">
        <LazyImage src={asset('assets/img/hydromap/medium.svg')} className="HydroMap__layer"/>
        <LazyImage src={asset('assets/img/hydromap/large.svg')} className="HydroMap__layer"/>
        <LazyImage src={asset('assets/img/hydromap/map.jpg')}/>
      </div>
    );
  }
}
