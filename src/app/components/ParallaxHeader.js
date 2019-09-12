import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset, map} from "../core/utils";
import {PARALLAX_ARTWORK, PARALLAX_LAYERS, PARALLAX_SCALE_PADDING} from "../core/consts";
import {AppContext} from "../context/AppContext";

@AppContext
export default class ParallaxHeader extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  #getTransform = layer => {
    const x = map(this.props.app.scrollY, 0, window.innerHeight, layer.x, layer.end.x);
    const y = map(this.props.app.scrollY, 0, window.innerHeight, layer.y, layer.end.y);
    return `translate(${x}px, ${y}px)`;
  };

  #getScale = () => {
    let scale = 1;
    if (this.props.app.screenW < this.props.app.screenH) {
      scale = (1 / PARALLAX_ARTWORK.height) * window.innerHeight;
      if (PARALLAX_ARTWORK.width * scale < window.innerWidth) {
        scale = (1 / PARALLAX_ARTWORK.width) * window.innerWidth;
      }
    } else {
      scale = (1 / PARALLAX_ARTWORK.width) * window.innerWidth;
      if (PARALLAX_ARTWORK.height * scale < window.innerHeight) {
        scale = (1 / PARALLAX_ARTWORK.height) * window.innerHeight;
      }
    }
    return scale + PARALLAX_SCALE_PADDING;
  };

  #getStyle = () => {
    if (!this.props.app.isMobile) {
      return {};
    }
    return {backgroundImage: `url(${asset(`/assets/img/parallax/${this.props.id}/mobile.jpg`)})`};
  };

  render() {
    if (!PARALLAX_LAYERS.hasOwnProperty(this.props.id)) {
      return null;
    }

    return (
      <div className="ParallaxHeader" style={this.#getStyle()}>
        {!this.props.app.isMobile && (
          <div
            className="ParallaxHeader__layers"
            style={{
              width: `${PARALLAX_ARTWORK.width}px`,
              height: `${PARALLAX_ARTWORK.height}px`,
              top: '0px',
              left: '50%',
              transform: `scale(${this.#getScale()}) translate(-50%, 0%)`,
            }}
          >
            {PARALLAX_LAYERS[this.props.id].map((layer, index) => {
              const layerId = PARALLAX_LAYERS[this.props.id].length - (index + 1);
              return (
                <img
                  key={`layer-${layerId}`}
                  src={`/assets/img/parallax/${this.props.id}/${layerId}.png`}
                  className={`layer layer--${layerId}`}
                  style={{
                    top: '0px',
                    left: '0px',
                    transform: this.#getTransform(layer),
                    width: `${layer.width}px`,
                    height: `${layer.height}px`,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
