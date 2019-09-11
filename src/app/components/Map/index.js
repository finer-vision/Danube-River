import React, {Component} from "react";
import {Waypoint} from "react-waypoint";
import {MapContextProvider} from "../../context/MapContext";
import Zoomed from "./Zoomed/index";
import Full from "./Full/index";
import Clouds from "./Clouds";
import config from "../../core/config";
import {clamp} from "../../core/utils";
import {AppContext} from "../../context/AppContext";

const CLOUDS_ANIMATION_TIME = 3000 * 1.1;
const MAP_SWAP_AFTER_ANIMATION_PROGRESS = 0.3;
const SCROLL_THROTTLING = 2000;
const DEFAULT_ACTIVE_ITEM = {...config.articles[0]};

@AppContext
export default class Map extends Component {
  #timeout = null;
  #waypointDelayTimeout = null;
  #waypointDelay = 250;
  /** @type {Element} */
  #scrollContainer = null;
  #lastScrollTime = 0;

  state = {
    // @todo replace when finished development
    // activeMap: 'full',
    // activeItem: {...config.articles[0]},
    activeMap: 'zoomed',
    activeItem: {...DEFAULT_ACTIVE_ITEM},
    showCloudsAnimation: false,
    visible: false,
  };

  componentDidMount() {
    this.#scrollContainer = document.querySelector('.Screen');
    this.#scrollContainer.addEventListener('wheel', this.#handleScroll, {passive: false});
  }

  componentWillUnmount() {
    this.#timeout !== null && clearTimeout(this.#timeout);
    this.#clearWaypointDelayTimeout();
    this.#scrollContainer.removeEventListener('wheel', this.#handleScroll, {passive: false});
  }

  #handleScroll = event => {
    if (this.props.app.lockScroll) {
      event.preventDefault();
    }

    // On "magic" mouse wheels that have "momentum" scrolling, this will stop this function being called excessively.
    // Also stop executing this function if the map is not visible.
    const now = Date.now();
    if (!this.state.visible || now - this.#lastScrollTime < SCROLL_THROTTLING) {
      return;
    }
    this.#lastScrollTime = now;

    // Determine the scroll direction, based on the deltaY.
    let direction = 'none';
    if (event.deltaY < 0) {
      direction = 'up';
    }
    if (event.deltaY > 0) {
      direction = 'down';
    }

    // Handle the "zoomed" map behaviour.
    if (this.state.activeMap === 'zoomed') {
      // Allow user to scroll up and out of map when the map is in it's initial "zoomed" state.
      direction === 'up' && this.props.app.toggleLockScroll(false);

      // When the user scrolls, zoom into the map and go to the first active item.
      if (direction === 'down') {
        this.#setActiveMap('full');
        this.setState({activeItem: {...DEFAULT_ACTIVE_ITEM}});
      }
    }

    // Handle the "full" map behaviour.
    if (this.state.activeMap === 'full') {
      // Zoom the map out to the "zoomed" map state.
      direction === 'up' && this.state.activeItem.index === 0 && this.#setActiveMap('zoomed');

      // Move to the next/prev active item when scrolling.
      let nextIndex = this.state.activeItem.index;
      if (direction === 'up') {
        nextIndex = clamp(this.state.activeItem.index - 1, 0, config.articles.length - 1);
      }
      if (direction === 'down') {
        nextIndex = clamp(this.state.activeItem.index + 1, 0, config.articles.length - 1);
      }

      // Enable scrolling and reset the map when going to the next section.
      if (direction === 'down' && this.state.activeItem.index + 1 > config.articles.length - 1) {
        this.props.app.toggleLockScroll(false);
        this.#setActiveMap('zoomed');
        this.setState({activeItem: {...DEFAULT_ACTIVE_ITEM}});
      }

      this.setState({activeItem: {...config.articles[nextIndex]}});
    }
  };

  #getContext = () => ({
    activeMap: this.state.activeMap,
    activeItem: this.state.activeItem,
    setActiveMap: this.#setActiveMap,
    setActiveItem: this.#setActiveItem,
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

  #setActiveItem = activeItem => {
    this.setState({activeItem});
  };

  #handleHotSpotClick = async index => {
    await this.setState({activeItem: {...config.articles[index]}});
    this.#setActiveMap('full');
  };

  #clearWaypointDelayTimeout = () => {
    this.#waypointDelayTimeout !== null && clearTimeout(this.#waypointDelayTimeout);
    this.#waypointDelayTimeout = null;
  };

  #waypoint = visible => () => {
    this.#clearWaypointDelayTimeout();
    this.#waypointDelayTimeout = setTimeout(() => {
      this.props.app.toggleLockScroll(visible);
      this.setState({visible: visible});
    }, this.#waypointDelay);
  };

  render() {
    return (
      <MapContextProvider value={this.#getContext()}>
        <div className="Map">
          {this.state.showCloudsAnimation && <Clouds/>}
          {this.state.activeMap === 'zoomed' && <Zoomed onHotSpotClick={this.#handleHotSpotClick}/>}
          {this.state.activeMap === 'full' && <Full activeItem={this.state.activeItem}/>}
          <Waypoint onEnter={this.#waypoint(true)} onLeave={this.#waypoint(false)}/>
        </div>
      </MapContextProvider>
    );
  }
}
