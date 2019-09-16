import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import Popup from "./Popup";
import {MapContext} from "../../../context/MapContext";
import config from "../../../core/config";
import {Waypoint} from "react-waypoint";
import {
  HOT_SPOT_OFFSET_X,
  MAP_RATIO_H,
  MAP_RATIO_W,
  MAP_SCALE_H,
  MAP_SCALE_H_INVERSE,
  MAP_SCALE_W,
  MAP_SCALE_W_INVERSE,
  ZOOMED_MAP,
  MAP_VIEW_BOX,
} from "../consts";
import {AppContext} from "../../../context/AppContext";
import HotSpot from "./HotSpot";
import {map} from "../../../core/utils";

const RIVER_SCALE = ((1 / ZOOMED_MAP.width) * ZOOMED_MAP.riverWidth);

@MapContext
@AppContext
export default class MapZoomed extends Component {
  static propTypes = {
    onHotSpotClick: PropTypes.func,
  };

  #map = createRef();

// <ellipse id="Mila23" cx="849" cy="313" rx="20" ry="19"></ellipse>
// <ellipse id="Rewilding" cx="761" cy="343" rx="20" ry="19"></ellipse>
// <ellipse id="Hydropower" cx="430" cy="372" rx="20" ry="19"></ellipse>
// <ellipse id="Microplastics" cx="196" cy="107" rx="20" ry="19"></ellipse>
// <ellipse id="Sturgeon" cx="20" cy="19" rx="20" ry="19"></ellipse>

  state = {
    hotSpots: [
      {active: false, x: 250 + HOT_SPOT_OFFSET_X, y: 72, tag: config.articles[0].title, title: config.articles[0].intro},
      {
        active: false,
        x: 430 + HOT_SPOT_OFFSET_X,
        y: 170,
        tag: config.articles[1].title,
        title: config.articles[1].intro
      },
      {
        active: false,
        x: 660 + HOT_SPOT_OFFSET_X,
        y: 425,
        tag: config.articles[2].title,
        title: config.articles[2].intro
      },
      {
        active: false,
        x: 991 + HOT_SPOT_OFFSET_X,
        y: 396,
        tag: config.articles[3].title,
        title: config.articles[3].intro
      },
      {
        active: false,
        x: 1079 + HOT_SPOT_OFFSET_X,
        y: 366,
        tag: config.articles[4].title,
        title: config.articles[4].intro
      },
    ],
    popupPosition: {x: 0, y: 0},
    focused: false,
  };

  #getActiveHotSpotIndex = () => {
    return this.state.hotSpots.findIndex(hotSpot => hotSpot.active);
  };

  #getActiveHotSpot = () => {
    const activeHotSpotIndex = this.#getActiveHotSpotIndex();
    return activeHotSpotIndex === -1 ? null : this.state.hotSpots[activeHotSpotIndex];
  };

  #toggleFocused = focused => () => this.setState({focused});

  #getDimensions = () => {
    let w = this.props.app.screenW;
    let h = this.props.app.screenH;
    if (this.props.app.screenW > this.props.app.screenH) {
      h = this.props.app.screenH * MAP_SCALE_H;
      w = h * MAP_RATIO_W;
    } else {
      w = this.props.app.screenW * MAP_SCALE_W;
      h = w * MAP_RATIO_H;
    }

    if (w * MAP_SCALE_W_INVERSE > this.props.app.screenW) {
      w = this.props.app.screenW * MAP_SCALE_W;
      h = w * MAP_RATIO_H;
    }

    if (h * MAP_SCALE_H_INVERSE > this.props.app.screenH) {
      h = this.props.app.screenH * MAP_SCALE_H;
      w = h * MAP_RATIO_W;
    }

    const riverScaleW = (1 / (w / MAP_SCALE_W)) * ZOOMED_MAP.riverWidth;
    const riverScaleH = (1 / (h / MAP_SCALE_H)) * ZOOMED_MAP.riverHeight;
    return {
      map: {width: w, height: h},
      river: {
        width: (w / MAP_SCALE_W) * riverScaleW,
        height: (h / MAP_SCALE_H) * riverScaleH,
      },
    };
  };

  #toggleHotSpot = (index, active = false) => async () => {
    const hotSpots = this.state.hotSpots.map((hotSpot, hotSpotIndex) => {
      if (hotSpotIndex === index) {
        hotSpot.active = active;
      } else {
        hotSpot.active = false;
      }
      return hotSpot;
    });
    await this.setState({hotSpots});
    this.#setPopupPosition();
  };

  #setPopupPosition = () => {
    const activeHotSpot = this.#getActiveHotSpot();
    if (!activeHotSpot) {
      return;
    }
    const rect = this.#map.current.getBoundingClientRect();
    const popupPosition = {
      x: map(activeHotSpot.x, 0, MAP_VIEW_BOX.width, 0, rect.width) + rect.left,
      y: map(activeHotSpot.y, 0, MAP_VIEW_BOX.height, 0, rect.height) + rect.top,
    };
    this.setState({popupPosition});
  };

  #handleClick = index => () => {
    if (this.props.onHotSpotClick) {
      this.props.onHotSpotClick(index);
    }
  };

  render() {
    const activeHotSpot = this.#getActiveHotSpot();
    const dimensions = this.#getDimensions();

    return (
      <div
        className={`MapZoomed ${this.state.focused ? 'MapZoomed--focused' : ''}`}
        style={{backgroundSize: `${dimensions.map.width}px ${dimensions.map.height}px`}}
      >
        <div className="MapZoomed__gradient"/>

        <div className="MapZoomed__info type-h4">
          {config.mapInfo}
        </div>

        <svg
          ref={this.#map}
          className="MapZoomed__river"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${MAP_VIEW_BOX.width} ${MAP_VIEW_BOX.height}`}
          style={{width: `${(dimensions.map.width / MAP_SCALE_W) * RIVER_SCALE}px`}}
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              className="MapZoomed__river-path"
              stroke="#13B9C5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M0 96.824l6.367-3.733 6.31 1.929 3.834-1.514 2.677 2.468 8.364-.934 8.972-15.223 10.376.497 2.3-3.526 11.896-4.812 3.082-5.081h.166l4.588-4.5 20.924-5.767.882-8.47 14.39-7.728 10.231-7.316c11.17-.858 18.546-1.57 22.126-2.138 5.366-.85 7.904.869 10.564.411 8.63-1.484 13.826-2.662 16.304-3.288 4.769-1.206 7.763-2.548 8.983-4.028l2.246-6.905 3.743-1.727c1.568-.442 2.705-.634 3.41-.575 1.768.148 3.335 1.165 4.16.575a44.244 44.244 0 013.826-2.466v-1.562l-1.664-1.644c2.733-.403 3.758-1.225 3.078-2.466-.68-1.242-1.152-2.448-1.414-3.617l7.486.328c3.69-.443 6.435-.361 8.235.247 1.8.608 4.209 2.267 7.226 4.976l1.758-1.359 4.99 2.138c-.13 1.384.34 2.288 1.414 2.712 1.437.568 1.093 3.143 2.08 3.453 2.093.657 2.925.657 2.495 0 .978.029 1.726.029 2.246 0 .52-.028 1.324-.357 2.413-.986l2.245.246 4.16 2.795c.318.572.54 1.065.665 1.48.25.832.306 2.224.832 2.548 1.378.851 2.14 1.09 3.077.905.625-.124 1.21-.744 1.756-1.862l4.15.135c1.497.822 2.44 1.398 2.828 1.727.389.329.662.856.82 1.582.875.788 1.49 1.44 1.842 1.953.353.513.713 1.28 1.082 2.301.99 1.17 1.407 1.964 1.247 2.384-.386 1.018-1.535.965-1.58 1.316-.115.897.85.592.915.822.237.83 1.713-1.312 1.913-.822.361.886.639 1.16.832.822.61-.329 1.109-.192 1.497.41.388.604.5.905.333.905-.412.568-.634 1.034-.666 1.398-.031.364.08.555.333.575.72-.274 1.137-.356 1.248-.247.166.165-.048 1.742.332 1.973.707.43 1.428.594 2.163.494l1.83 1.89c2.469 1.835 4.132 2.904 4.99 3.207.72.253 1.306-.646 1.75-.498.77.256 1.463.477 2.077.662 2.09.63 3.56.931 4.409.904.832 1.26 1.913 1.918 3.244 1.973 1.33.055 2.273.028 2.828-.082 2.779.328 4.29.298 4.531-.089.31-.494-.612-.246-.124.073.593.388.984.559 1.172.512.482-.12.64-.966.92-.901.71.176 1.64 1.295 1.967 1.376.92.228 1.463.369 1.627.423.502.163.364 1.244.836 1.468 1.319.628 1.514.966 2.424 1.387 1.996.925 2.553 1.142 1.672.653a6.91 6.91 0 001.253 2.121c.836.98 1.505 1.387 2.006 2.04.502.653 1.349.221 1.589.49.648.726.947.757 1.253 1.06.718.712.734.865 1.421 1.55 1.3 1.298 2.347 1.53 1.84.409-.072-.158-.61-.286-1.087-.735-.087-.08-.142-.271-.168-.57.093-.273.26-.409.502-.409.241 0 .576.163 1.003.49.454.05.789.023 1.003-.082.214-.104.493-.376.836-.816.348-.05.6.087.752.408.153.322.209.702.167 1.142l.446.85c-.19.466-.2.863-.028 1.19.172.327.478.763.92 1.306.335.042.586-.04.752-.245.166-.206.222-.56.167-1.06.52.034.91.034 1.17 0 .26-.035.455-.226.585-.572l1.17.898c.746 1.157 1.275 2.082 1.589 2.774.313.692.425 1.181.334 1.468-.501 1.45-.668 2.43-.501 2.938.166.508.78.889 1.838 1.142 2.77.677 4.61 1.058 5.517 1.142.908.085 1.939-.46 3.093-1.632l11.767.988 2.805 4.306 14.232 4.47 5.626 5.244 10.298-2.143 3.24-3.857 14.015 5.49 1.504-3.449 11.642-1.429 5.887-5.367.52-6.326 5.83-4.755 1.894 2.245 6.089-1.755 7.448 2.877 6.393-.796 6.19 3.633 21.883-1.061 8.186 11.632 10.703 7.918 14 1.53 9.808-4.218v1.219l3.714 2.805 6.872.437 1.799 6.327 5.615 5.43v2h4.091c2.382 2.268 3.968 3.954 4.76 5.057 1.44 2.01 1.988 4.436 2.839 5.472.973 1.186 3.096.712 4.843 2.238.69.604 1.61 2.179 2.755 4.725l2.505-.58c2.843 2.896 5.098 4.858 6.763 5.886 1.666 1.027 3.82 1.785 6.461 2.272l16.523-1.616 14.507 2.162 10.187-2.818 14.185.488 4.602-5.628 10.855.498 2.743 4.626 5.935-5.12 6.446 3.861-.336 12.193-4.71 12.675 1.487 4.092-2.07 6.274-4.988 2.75-5.264 18.865 1.575 8.037 4.506 4.45-2.844 18.865 5.425 11.038-9.61 8.835 4.04 11.773-2.363 7.66 2.435 7.955.219 11.036-5.323 1.93-10.354 14.124 8.473 9.926h3.828l-1.78 2.367 1.78 2.367-3.155 1.96-.971 4.08h2.346l3.155-1.142v3.183l-4.53.898 3.155 2.612 3.883-2.612 1.375 3.592-5.219 1.52 3.825 4.19-4.017 4.5-.688 4.578 4.03 2.877 3.715-2.156 5.035 4.21-1.196 2.114-4.815-.616-.702 4.068 2.476 3.492-3.44 3.266 16.62 11.664 10.992.988v.912l8.633-3.905 2.649 3.911 14.664-.862 3.387-4.056 7.571 7.82 13.694-.04 10.162 12.237.087 3.407-3.793 1.577-.55 3.68 5.096 7.802 5.037 3.238L794.247 416l-6.624-19.665 3.84 4.289 11.434 1.514-1.65 9.362 8.065-.559 19.383 2.887 5.55 10.766 3.805 4.268 2.93-1.114 7.727-15.308 9.54-6.202c4.01 4.262 7.313 7.384 9.908 9.365 1.558 1.19 3.354-1.068 5.32 0 .872.474 2.423 1.945 4.653 4.412.522 1.536.522 2.563 0 3.08-.521.517-2.066 1.024-4.636 1.52l-4.257-3.101-3.573 1.581-.915 4.662h-4.654c-.664 1.72-.941 2.912-.831 3.58.11.667 1.163 1.332 3.158 1.997v6.91l4.571 4.578 5.569.916v5.66c0 2.105-2.93-3.393-.937-2.714 1.992.679 3.518 1.352 4.578 2.02 1.398.882 2.257 2.449 4.162 3.539 1.793 1.025 4.29 2.654 7.491 4.886l6.243 1.01 1.665 2.865-2.497 4.044-7.658 1.938a289.378 289.378 0 00-1.914 5.728 204.423 204.423 0 00-1.53 5.133l2.945 3.46 10.654 3.37 13.735-4.718 9.655-.505c2.971.78 4.941 1.398 5.91 1.853 1.714.806 2.241 2.041 3.33 2.443 2.013.743 3.844.743 5.494 0h5.577c.47.692 1.135 1.253 1.998 1.685 1.022.513 2.364.094 3.246 1.011 1.6 1.665 5.92 1.603 11.154 3.202 1.453.443 2.795 1.45 5.244 2.527 1.13.497 3.267 1.311 6.41 2.443l10.071-1.685c2.645-2.134 4.477-3.51 5.494-4.128 1.018-.618 2.96-1.151 5.827-1.6 2.114.643 3.724 1.176 4.828 1.6 1.634.627 3.203.898 3.995 1.432 1.595 1.076 4.092 2.508 7.492 4.297 1.119-1.428 2.479-2.215 4.079-2.36 1.13-.101 2.081-.709 5.016.031.81.205 2.024-.451 3.64-1.968 1.219-.341 2.412-.004 3.58 1.011 1.168 1.015 2.694 2.11 4.578 3.286l5.743-1.18c2.775 1.741 4.606 3.258 5.494 4.55.888 1.291 2.359 2.218 4.412 2.78a12.896 12.896 0 005.327-1.685c1.665-.955 3.524-1.152 5.577-.59 2.941-1.573 5.494-3.033 7.658-4.38.66-.411 1.861.685 4.495-.253.98-.35 2.172-1.332 3.58-2.95 1.523-1.449 2.716-2.432 3.579-2.948 1.17-.7 2.617-3.303 3.246-4.128 2.018-2.645 3.631-4.779 5.078-6.402 1.694-1.901 1.94-.21 4.245-2.275.753-.674 2.068-4.61 4.412-6.487.652-.522 2.29-.803 4.91-.842 2.146-.956 3.977-1.77 5.494-2.443 1.419-.629 4.029-2.523 5.91-2.949.845-.191 2.45.67 4.162.758 1.462.076 5.356-1.629 6.327-1.769 1.569-.226 1.719.41 4.078.337.975-.03 2.964-1.117 4.578-1.348.62-.089 1.224-1.09 2.331-1.18.798-.064 1.713.02 2.747.254 1.79-.647 3.093-1.18 3.912-1.601 2.293-1.178 4.284-2.598 5.494-3.033 1.859-.667 3.995-.892 6.41-.674 1.293-.638 2.347-.975 3.163-1.01.9-.04.914.911 1.997 1.01.09.008 1.332-.337 3.58-.674 2.247-.337-.827 1.768 5.743 2.106.884.046 2.315-.924 3.912-1.095.612-.065 1.583.103 2.914.506 1.33.402-.72-1.915.624-1.562l3.205.84 15.534-7.106 4.143-5.151 9.04-2.839 2.337-5.277 4.114-2.965.289-4.689-2.713-2.103 2.12-12.132-4.33-6.118.75-2.923.592-2.607 1.184-1.114.464-3.238 3.52-2.545-2.612-4.772 1.299-3.217-1.588-13.667 2.729-7.212v-.169l2.483-1.682-2.094-6.896 1.834-4.142 3.003-11.775 4.172-2.397 5.356 2.523 1.14-5.004 4.39 2.019 4.431 11.585 22.94 8.999 5.327-1.64-2.584-3.595 3.364-2.208-1.386-2.355 10.409 4.5 1.126-4.584 9.023-4.1 6.496.105 4.721-4.92 4.562-.841 8.171 1.43 3.826 1.03 7.03 6.75 1.545 6.244"
              transform="translate(-627 -494) translate(560 270) translate(69.753 224)"
            />

            {this.state.hotSpots.map((hotSpot, index) => (
              <HotSpot
                key={`hot.spot.${index}`}
                index={index}
                x={hotSpot.x}
                y={hotSpot.y}
                onPointerEnter={this.#toggleHotSpot(index, true)}
                onPointerLeave={this.#toggleHotSpot(index, false)}
                onClick={this.#handleClick(index)}
              />
            ))}
          </g>
        </svg>

        {activeHotSpot && (
          <Popup
            tag={activeHotSpot.tag}
            title={activeHotSpot.title}
            x={this.state.popupPosition.x}
            y={this.state.popupPosition.y}
          />
        )}

        <Waypoint onEnter={this.#toggleFocused(true)} onLeave={this.#toggleFocused(false)}/>
      </div>
    );
  }
}
