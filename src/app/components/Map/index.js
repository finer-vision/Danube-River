import React, {Component, createRef} from "react";
import {Waypoint} from "react-waypoint";
import {MapContextProvider} from "../../context/MapContext";
import Zoomed from "./Zoomed/index";
import Full from "./Full/index";
import Clouds from "./Clouds";
import config from "../../core/config";
import {clamp} from "../../core/utils";
import {AppContext} from "../../context/AppContext";
import Services from "../../services";
import {
  CLOUDS_ANIMATION_TIME,
  DEFAULT_ACTIVE_ITEM,
  MAP_SWAP_AFTER_ANIMATION_PROGRESS,
  SCROLL_THROTTLING
} from "./consts";

@AppContext
export default class Map extends Component {
  #timeout = null;
  #waypointDelayTimeout = null;
  #waypointDelay = 250;
  #lastScrollTime = 0;
  #container = createRef();

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
    Services.event.on('screen.wheel', this.#handleWheel);
    Services.event.on('screen.scroll', this.#handleScroll);
  }

  componentWillUnmount() {
    this.#timeout !== null && clearTimeout(this.#timeout);
    this.#clearWaypointDelayTimeout();
    Services.event.off('screen.wheel', this.#handleWheel);
    Services.event.off('screen.scroll', this.#handleScroll);
  }

  #handleScroll = () => {
    const top = this.#container.current.getBoundingClientRect().top;
    top <= window.innerHeight * -0.5 && this.#setActiveMap('zoomed');
    this.props.app.scrollY <= window.innerHeight * 0.5 && this.#setActiveItem({...DEFAULT_ACTIVE_ITEM});
  };

  #handleWheel = event => {
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
        this.#setActiveItem({...DEFAULT_ACTIVE_ITEM});
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
      }

      this.#setActiveItem({...config.articles[nextIndex]});
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
      Services.event.emit('map.change', activeMap);
      this.#timeout = setTimeout(() => {
        this.setState({showCloudsAnimation: false});
      }, CLOUDS_ANIMATION_TIME * (1 - MAP_SWAP_AFTER_ANIMATION_PROGRESS));
    }, CLOUDS_ANIMATION_TIME * MAP_SWAP_AFTER_ANIMATION_PROGRESS);
  };

  #setActiveItem = activeItem => {
    Services.event.emit('map.section.change', activeItem.id);
    return this.setState({activeItem});
  };

  #handleHotSpotClick = async index => {
    await this.#setActiveItem({...config.articles[index]});
    this.#setActiveMap('full');
  };

  #clearWaypointDelayTimeout = () => {
    this.#waypointDelayTimeout !== null && clearTimeout(this.#waypointDelayTimeout);
    this.#waypointDelayTimeout = null;
  };

  #waypoint = visible => () => {
    this.#clearWaypointDelayTimeout();
    this.#waypointDelayTimeout = setTimeout(() => {
      this.setState({visible});
      visible && this.props.app.toggleLockScroll(true);
    }, this.#waypointDelay);
  };

  render() {
    return (
      <MapContextProvider value={this.#getContext()}>
        <div className="Map" ref={this.#container}>
          {this.state.showCloudsAnimation && <Clouds/>}
          {this.state.activeMap === 'zoomed' && <Zoomed onHotSpotClick={this.#handleHotSpotClick}/>}
          {this.state.activeMap === 'full' && <Full activeItem={this.state.activeItem}/>}
          <Waypoint onEnter={this.#waypoint(true)} onLeave={this.#waypoint(false)}/>
        </div>
      </MapContextProvider>
    );
  }
}
