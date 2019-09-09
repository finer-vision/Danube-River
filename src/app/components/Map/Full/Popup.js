import React, {Component} from "react";
import get from "lodash/get";
import {asset} from "../../../core/utils";
import {MapContext} from "../../../context/MapContext";

@MapContext
export default class Popup extends Component {
  state = {
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.#handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.#handleResize);
  }

  #handleResize = () => this.setState({screen: {width: window.innerWidth, height: window.innerHeight}});

  #getContainerStyle = () => {
    const maxWidth = 700;
    const artwork = {width: 1440, height: 900};
    const x = this.props.map.activeItem.x || 0;
    const y = this.props.map.activeItem.y || 0;
    return {
      maxWidth: maxWidth,
      width: `${(100 / artwork.width) * maxWidth}vw`,
      transform: `translate(${window.innerWidth * ((1 / artwork.width) * x)}px, ${window.innerHeight * ((1 / artwork.height) * y)}px)`,
    };
  };

  render() {
    return (
      <div
        className={`MapFull__popup MapFull__popup--${this.props.map.activeItem.index}`}
        style={this.#getContainerStyle()}
      >
        <div className="MapFull__popup-background">
          <div className="MapFull__popup-main">
            <div className="MapFull__popup-tag">
              <div className="type-p">
                {this.props.map.activeItem.title.toUpperCase()}
              </div>
            </div>

            <div className="type-h2">
              {this.props.map.activeItem.intro}
            </div>
            <div className="type-p">
              {this.props.map.activeItem.description}
            </div>
          </div>
        </div>

        <div className="MapFull__popup-label flex align-center justify-center">
          <div className="type-h4">
            Read more
          </div>
          <img src={asset('/assets/img/arrow.svg')} alt="Read more"/>
        </div>

        {get(this.props.map.activeItem, 'images', []).map((image, index) => (
          <div className="MapFull__popup-img" key={`${this.props.map.activeItem.index}.image.${index}`}>
            <img src={image} alt={this.props.map.activeItem.title}/>
          </div>
        ))}
      </div>
    );
  }
}
