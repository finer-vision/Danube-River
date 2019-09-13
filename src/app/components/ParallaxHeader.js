import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset, map} from "../core/utils";
import {PARALLAX_ARTWORK, PARALLAX_LAYERS, PARALLAX_SCALE_PADDING} from "../core/consts";
import {AppContext} from "../context/AppContext";
import Services from "../services";
import LazyImage from "./LazyImage";

@AppContext
export default class ParallaxHeader extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  state = {
    scale: 1,
  };

  #getTransform = layer => {
    const x = map(this.props.app.scrollY, 0, this.props.app.screenH, layer.x, layer.end.x);
    const y = map(this.props.app.scrollY, 0, this.props.app.screenH, layer.y, layer.end.y);
    return `translate(${x}px, ${y}px)`;
  };

  #getScale = () => {
    let scale = 1;
    if (this.props.app.screenW < this.props.app.screenH) {
      scale = (1 / PARALLAX_ARTWORK.height) * this.props.app.screenH;
      if (PARALLAX_ARTWORK.width * scale < this.props.app.screenW) {
        scale = (1 / PARALLAX_ARTWORK.width) * this.props.app.screenW;
      }
    } else {
      scale = (1 / PARALLAX_ARTWORK.width) * this.props.app.screenW;
      if (PARALLAX_ARTWORK.height * scale < this.props.app.screenH) {
        scale = (1 / PARALLAX_ARTWORK.height) * this.props.app.screenH;
      }
    }
    return scale + PARALLAX_SCALE_PADDING;
  };

  #getStyle = () => {
    if (!this.props.app.isMobile) {
      return {};
    }
    return {backgroundImage: `url(${asset(`assets/img/parallax/${this.props.id}/mobile.jpg`)})`};
  };

  #handleResize = () => this.#setScale();

  #setScale = () => this.setState({scale: this.#getScale()});

  componentDidMount() {
    this.#setScale();
    Services.event.on('screen.resize', this.#handleResize);
  }

  componentWillUnmount() {
    Services.event.off('screen.resize', this.#handleResize);
  }

  render() {
    if (!PARALLAX_LAYERS.hasOwnProperty(this.props.id)) {
      return null;
    }

    return (
      <div className="ParallaxHeader" style={this.#getStyle()}>
        {!this.props.app.isMobile && (
          <div
            className="ParallaxHeader__layers"
            style={{transform: `scale(${this.state.scale}) translate(-50%, 0%)`}}
          >
            {PARALLAX_LAYERS[this.props.id].map((layer, index) => {
              const layerId = PARALLAX_LAYERS[this.props.id].length - (index + 1);
              return (
                <LazyImage
                  key={`layer-${layerId}`}
                  src={asset(`assets/img/parallax/${this.props.id}/${layerId}.png`)}
                  className={`layer layer--${layerId}`}
                  style={{transform: this.#getTransform(layer)}}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
