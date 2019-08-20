import React, {Component} from "react";
import {asset} from "../../../core/utils";
import {MapContext} from "../../../context/MapContext";
import Tilde from "../../Tilde";

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

  #getImageSize = () => {
    const originalWidth = 660;
    const originalHeight = 389;
    const aspectRatio = originalWidth / originalHeight;
    const scale = 0.4;
    return {width: (this.state.screen.height * scale) * aspectRatio, height: this.state.screen.height * scale};
  };

  render() {
    return (
      <div className={`MapFull__popup MapFull__popup--${this.props.map.activeItem.id}`}>
        <div className="MapFull__popup-id type-hero">
          {String(this.props.map.activeItem.id).padStart(2, '0')}
        </div>

        <div className="MapFull__popup-background">
          <div className="flex align-center MapFull__popup-tag">
            <Tilde/>
            <div className="type-p">
              {this.props.map.activeItem.title.toUpperCase()}
            </div>
          </div>

          <div className="MapFull__popup-main">
            <div className="type-h2">
              {this.props.map.activeItem.intro}
            </div>
            <div className="type-p">
              {this.props.map.activeItem.description}
            </div>
          </div>
        </div>

        <div className="MapFull__popup-img">
          <img
            src={asset(`/assets/img/articles/${this.props.map.activeItem.id}.png`)}
            alt={this.props.map.activeItem.title}
            style={this.#getImageSize()}
          />
        </div>
      </div>
    );
  }
}
