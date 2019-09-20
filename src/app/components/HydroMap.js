import React, {Component} from "react";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";
import {Waypoint} from "react-waypoint";
import CountUp from 'react-countup';

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
        <LazyImage src={asset('assets/img/hydromap/hydromap.jpg')}/>

        <div className="Stats Stats--hydromap">
          <div className="Stats__number">
            <span className="Stats--big">
              {this.state.focused &&  <CountUp end={62} duration={4}/> }
            </span>
            <span className="Stats--small"> dams</span>
          </div>

          <h4 className="type-h4">on the Danube - 59 of which are on its first 1,000km</h4>
        </div>

        <Waypoint onEnter={this.#toggleFocused(true)} onLeave={this.#toggleFocused(false)}/>
      </div>
    );
  }
}
