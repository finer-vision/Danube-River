import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset, map} from "../core/utils";
import {BACKGROUND_VELOCITY, PARALLAX_ARTWORK, PARALLAX_LAYERS, PARALLAX_SCALE_PADDING} from "../core/consts";
import {AppContext} from "../context/AppContext";

@AppContext
export default class ParallaxHeader extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  #screen = null;

  state = {
    scrollY: 0,
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };

  async componentDidMount() {
    this.#handleResize();
    this.#screen = document.querySelector('.Screen');
    this.#screen.addEventListener('scroll', this.#handleScroll);
    window.addEventListener('resize', this.#handleResize);
  }

  componentWillUnmount() {
    this.#screen.removeEventListener('scroll', this.#handleScroll);
    window.removeEventListener('resize', this.#handleResize);
  }

  #handleResize = () => this.setState({screen: {width: window.innerWidth, height: window.innerHeight}});

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  #getYPos = (layer, index) => {
    const value = layer.y + (layer.y * map(this.state.scrollY, 0, window.innerHeight, layer.range[0], layer.range[1]));
    // Increase value of background layers
    if (index < (PARALLAX_LAYERS[this.props.id].length - 1) / 2) {
      return value * BACKGROUND_VELOCITY;
    }
    // Prevent foreground from coming all the way into the canvas (stop at it's base)
    if (index === PARALLAX_LAYERS[this.props.id].length - 1 && value < PARALLAX_ARTWORK.height - layer.height) {
      return PARALLAX_ARTWORK.height - layer.height;
    }
    return value;
  };

  #getScale = () => {
    let scale = 1;
    if (this.state.screen.width < this.state.screen.height) {
      scale = (1 / PARALLAX_ARTWORK.height) * window.innerHeight;
    } else {
      scale = (1 / PARALLAX_ARTWORK.width) * window.innerWidth;
    }
    return scale + PARALLAX_SCALE_PADDING;
  };

  #getStyle = () => {
    if (!this.props.app.isMobile) {
      return {};
    }
    return {
      backgroundImage: `url(${asset(`/assets/img/parallax/${this.props.id}/mobile.jpg`)})`,
    };
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
                    transform: `translate(${layer.x}px, ${this.#getYPos(layer, index)}px)`,
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
