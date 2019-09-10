import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset, map} from "../core/utils";
import {BACKGROUND_VELOCITY, PARALLAX_ARTWORK, PARALLAX_LAYERS} from "../core/consts";
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

  #handleResize = () => {
    const screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const artworkRatio = PARALLAX_ARTWORK.width / PARALLAX_ARTWORK.height;
    PARALLAX_ARTWORK.height = window.innerHeight;
    PARALLAX_ARTWORK.width = window.innerHeight * artworkRatio;
    this.setState({screen});
  };

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  #getPercentage = (value, axis = 'x') => {
    const dimension = PARALLAX_ARTWORK[axis === 'x' ? 'width' : 'height'];
    return (100 / dimension) * value;
  };

  #getYPos = (layer, index) => {
    const y = this.#getPercentage(layer.y, 'y');
    const value = y + map(this.state.scrollY, 0, window.innerHeight, layer.range[0], layer.range[1]);
    if (index < PARALLAX_LAYERS[this.props.id].length - 1 / 2) {
      return value * BACKGROUND_VELOCITY;
    }
    return value;
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
        {!this.props.app.isMobile && PARALLAX_LAYERS[this.props.id].map((layer, index) => {
          const layerId = PARALLAX_LAYERS[this.props.id].length - (index + 1);
          return (
            <img
              key={`layer-${layerId}`}
              src={`/assets/img/parallax/${this.props.id}/${layerId}.png`}
              className={`layer layer--${layerId}`}
              style={{
                top: '0px',
                left: '0px',
                marginLeft: '-50vw',
                transform: `translate(${this.#getPercentage(layer.x)}vw, ${this.#getYPos(layer, index)}vh)`,
                width: `${this.#getPercentage(layer.width)}vw`,
              }}
            />
          );
        })}
      </div>
    );
  }
}
