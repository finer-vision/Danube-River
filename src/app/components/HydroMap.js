import React, {Component} from "react";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";
import {Waypoint} from "react-waypoint";

export default class HydroMap extends Component {
  state = {
    focused: false
  }

  #toggleFocused = focused => () => this.setState({focused});

  render() {
    return (
      <div className={`HydroMap ${this.state.focused ? 'HydroMap--focused' : ''}`}>
        <LazyImage src={asset('assets/img/hydromap/medium.svg')} className="HydroMap__layer"/>
        <LazyImage src={asset('assets/img/hydromap/large.svg')} className="HydroMap__layer"/>
        <LazyImage src={asset('assets/img/hydromap/map.jpg')}/>

        <Waypoint onEnter={this.#toggleFocused(true)} onLeave={this.#toggleFocused(false)}/>
      </div>
    );
  }
}
