import React, {Component} from "react";
import {MapContextProvider} from "../../context/MapContext";
import Full from "./Full/index";
import Zoomed from "./Zoomed/index";
import Clouds from "./Clouds";
import config from "../../core/config";

const CLOUDS_ANIMATION_TIME = 3000 * 1.1;
const MAP_SWAP_AFTER_ANIMATION_PROGRESS = 0.3;

export default class Map extends Component {
  #timeout = null;

  state = {
    // @todo replace when finished development
    // activeMap: 'zoomed',
    activeMap: 'full',
    showCloudsAnimation: false,
    activeItem: {...config.menu[0]},
  };

  componentWillUnmount() {
    this.#timeout !== null && clearTimeout(this.#timeout);
  }

  #getContext = () => ({
    activeMap: this.state.activeMap,
    setActiveMap: this.#setActiveMap,
  });

  #setActiveMap = activeMap => {
    // 1. Show clouds animation
    // 2. Just before halfway through clouds animation, set activeMap.
    this.setState({showCloudsAnimation: true});
    this.#timeout = setTimeout(() => {
      this.setState({activeMap});

      this.#timeout = setTimeout(() => {
        this.setState({showCloudsAnimation: false});
      }, CLOUDS_ANIMATION_TIME * (1 - MAP_SWAP_AFTER_ANIMATION_PROGRESS));
    }, CLOUDS_ANIMATION_TIME * MAP_SWAP_AFTER_ANIMATION_PROGRESS);
  };

  #handleHotSpotClick = async index => {
    await this.setState({activeItem: {...config.menu[index]}});
    this.#setActiveMap('full');
  };

  render() {
    return (
      <MapContextProvider value={this.#getContext()}>
        <div className="Map">
          {this.state.showCloudsAnimation && <Clouds/>}
          {this.state.activeMap === 'zoomed' && <Zoomed onHotSpotClick={this.#handleHotSpotClick}/>}
          {this.state.activeMap === 'full' && <Full activeItem={this.state.activeItem}/>}
        </div>
      </MapContextProvider>
    );
  }
}
