import React, {Component} from "react";
import PropTypes from "prop-types";
import {map} from "../core/utils";

const ARTWORK = {
  width: 2560,
  height: 1600,
};

const getPercentage = (value, axis = 'x') => {
  const dimension = ARTWORK[axis === 'x' ? 'width' : 'height'];
  return (100 / dimension) * value;
};

const LAYERS = {
  // Background -> foreground
  'landing': [
    {
      x: getPercentage(-312),
      y: getPercentage(0, 'y'),
      width: getPercentage(2048),
      height: getPercentage(1598, 'y'),
      range: [0, 30],
    },
    {
      x: getPercentage(-303),
      y: getPercentage(107, 'y'),
      width: getPercentage(2050),
      height: getPercentage(256, 'y'),
      range: [0, 25],
    },
    {
      x: getPercentage(-303),
      y: getPercentage(139, 'y'),
      width: getPercentage(1746),
      height: getPercentage(1409, 'y'),
      range: [0, 22],
    },
    {
      x: getPercentage(-316),
      y: getPercentage(145, 'y'),
      width: getPercentage(1249),
      height: getPercentage(682, 'y'),
      range: [0, 10],
    },
    {
      x: getPercentage(677),
      y: getPercentage(95, 'y'),
      width: getPercentage(1069),
      height: getPercentage(805, 'y'),
      range: [0, -10],
    },
    {
      x: getPercentage(1),
      y: getPercentage(346, 'y'),
      width: getPercentage(1748),
      height: getPercentage(1204, 'y'),
      range: [0, -50],
    },
    {
      x: getPercentage(-302),
      y: getPercentage(790, 'y'),
      width: getPercentage(2048),
      height: getPercentage(811, 'y'),
      range: [0, -100],
    },
  ],
  'microplastic': [
    {
      x: getPercentage(-312),
      y: getPercentage(0, 'y'),
      width: getPercentage(2048),
      height: getPercentage(1598, 'y'),
      range: [0, 30],
    },
    {
      x: getPercentage(-303),
      y: getPercentage(107, 'y'),
      width: getPercentage(2050),
      height: getPercentage(256, 'y'),
      range: [0, 25],
    },
    {
      x: getPercentage(-303),
      y: getPercentage(139, 'y'),
      width: getPercentage(1746),
      height: getPercentage(1409, 'y'),
      range: [0, 22],
    },
    {
      x: getPercentage(-316),
      y: getPercentage(145, 'y'),
      width: getPercentage(1249),
      height: getPercentage(682, 'y'),
      range: [0, 10],
    },
    {
      x: getPercentage(677),
      y: getPercentage(95, 'y'),
      width: getPercentage(1069),
      height: getPercentage(805, 'y'),
      range: [0, -10],
    },
    {
      x: getPercentage(1),
      y: getPercentage(346, 'y'),
      width: getPercentage(1748),
      height: getPercentage(1204, 'y'),
      range: [0, -50],
    },
    {
      x: getPercentage(-302),
      y: getPercentage(790, 'y'),
      width: getPercentage(2048),
      height: getPercentage(811, 'y'),
      range: [0, -100],
    },
  ],
  'island-people': [
    {
      x: getPercentage(0),
      y: getPercentage(0, 'y'),
      width: getPercentage(2563),
      height: getPercentage(1661, 'y'),
      range: [0, 30],
    },
    {
      x: getPercentage(0),
      y: getPercentage(545, 'y'),
      width: getPercentage(2564),
      height: getPercentage(98, 'y'),
      range: [0, 25],
    },
    {
      x: getPercentage(618),
      y: getPercentage(223, 'y'),
      width: getPercentage(1496),
      height: getPercentage(363, 'y'),
      range: [0, 22],
    },
    {
      x: getPercentage(452),
      y: getPercentage(318, 'y'),
      width: getPercentage(1662),
      height: getPercentage(696, 'y'),
      range: [0, 10],
    },
    {
      x: getPercentage(2005),
      y: getPercentage(716, 'y'),
      width: getPercentage(628),
      height: getPercentage(150, 'y'),
      range: [0, -10],
    },
    {
      x: getPercentage(0),
      y: getPercentage(950, 'y'),
      width: getPercentage(2565),
      height: getPercentage(650, 'y'),
      range: [0, -50],
    },
    {
      x: getPercentage(0),
      y: getPercentage(685, 'y'),
      width: getPercentage(2563),
      height: getPercentage(915, 'y'),
      range: [0, -100],
    },
  ],
};

export default class ParallaxHeader extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  #screen = null;

  state = {
    scrollY: 0,
  };

  async componentDidMount() {
    this.#screen = document.querySelector('.Screen');
    this.#screen.addEventListener('scroll', this.#handleScroll);
  }

  componentWillUnmount() {
    this.#screen.removeEventListener('scroll', this.#handleScroll);
  }

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  #getYPos = (layer, index) => {
    const value = layer.y + map(this.state.scrollY, 0, window.innerHeight, layer.range[0], layer.range[1]);
    const max = Math.abs((layer.height + layer.y) - 200);

    if (index === LAYERS[this.props.id].length - 1 && value <= max) {
      return max;
    }
    return value;
  };

  render() {
    if (!LAYERS.hasOwnProperty(this.props.id)) {
      return null;
    }

    return (
      <div className="ParallaxHeader">
        {LAYERS[this.props.id].map((layer, index) => {
          const layerId = LAYERS[this.props.id].length - (index + 1);
          return (
            <img
              key={`layer-${layerId}`}
              src={`/assets/img/parallax/${this.props.id}/${layerId}.png`}
              className={`layer layer--${layerId}`}
              style={{
                top: '0px',
                left: '0px',
                transform: `translate(${layer.x}vw, ${this.#getYPos(layer, index)}vh)`,
                width: `${layer.width}vw`,
              }}
            />
          );
        })}
      </div>
    );
  }
}
