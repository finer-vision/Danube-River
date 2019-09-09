import React, { Component } from "react";
import PropTypes from "prop-types";

const ARTWORK = {
  width: 1440,
  height: 900,
};

const getPercentage = (value, axis = 'x') => {
  const dimension = ARTWORK[axis === 'x' ? 'width' : 'height'];
  return (100 / dimension) * value;
};

const LAYERS = {
  'landing': [
    {x: getPercentage(-302), y: getPercentage(790, 'y'), width: getPercentage(2048), height: getPercentage(811, 'y')},
    {x: getPercentage(1), y: getPercentage(346, 'y'), width: getPercentage(1748), height: getPercentage(1204, 'y')},
    {x: getPercentage(677), y: getPercentage(95, 'y'), width: getPercentage(1069), height: getPercentage(805, 'y')},
    {x: getPercentage(-316), y: getPercentage(145, 'y'), width: getPercentage(1249), height: getPercentage(682, 'y')},
    {x: getPercentage(-303), y: getPercentage(139, 'y'), width: getPercentage(1746), height: getPercentage(1409, 'y')},
    {x: getPercentage(-303), y: getPercentage(107, 'y'), width: getPercentage(2050), height: getPercentage(256, 'y')},
    {x: getPercentage(-312), y: getPercentage(0, 'y'), width: getPercentage(2068), height: getPercentage(1600, 'y')},
  ],
};

export default class ParallaxHeader extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  #getLayers = () => {
    const layers = [];
    for (let i = LAYERS[this.props.id].length - 1; i >= 0; i--) {
      layers.push(LAYERS[this.props.id][i]);
    }
    return layers;
  };

  render () {
    if (!LAYERS.hasOwnProperty(this.props.id)) {
      return null;
    }

    console.log(this.#getLayers());

    return (
      <div className="ParallaxHeader">
        {this.#getLayers().map((layer, index) => {
          const layerId = LAYERS[this.props.id].length - (index + 1);
          return (
            <img
              key={`layer-${layerId}`}
              src={`/assets/img/parallax/${this.props.id}/${layerId}.svg`}
              className={`layer layer--${layerId}`}
              style={{
                top: '0px',
                left: '0px',
                transform: `translate(${layer.x}vw, ${layer.y}vh)`,
                width: `${layer.width}vw`,
                // height: `${layer.height}vh`,
              }}
            />
          );
        })}
      </div>
    );
  }
}
