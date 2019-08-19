import React, {Component} from "react";
import Nav from "./Nav";
import config from "../../../core/config";
import {asset} from "../../../core/utils";
import Tilde from "../../Tilde";
import {MapContext} from "../../../context/MapContext";

@MapContext
export default class MapFull extends Component {
  static defaultProps = {
    activeItem: {...config.menu[0]},
  };

  state = {
    activeItem: this.props.activeItem,
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

  #handleResize = () => this.setState({
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });

  #handleNavChange = activeItem => {
    this.setState({activeItem});
  };

  #getImageSize = () => {
    const originalWidth = 660;
    const originalHeight = 389;
    const aspectRatio = originalWidth / originalHeight;
    const scale = 0.4;
    return {
      width: (this.state.screen.height * scale) * aspectRatio,
      height: this.state.screen.height * scale,
    };
  };

  render() {
    return (
      <div className="MapFull">
        <Nav onChange={this.#handleNavChange} activeItem={this.state.activeItem}/>
        <div className="MapFull__popup">
          <div className="MapFull__popup-id type-hero">
            {String(this.state.activeItem.id).padStart(2, '0')}
          </div>

          <div className="MapFull__popup-background">
            <div className="flex align-center MapFull__popup-tag">
              <Tilde/>
              <div className="type-p">
                {this.state.activeItem.title.toUpperCase()}
              </div>
            </div>

            <div className="MapFull__popup-main">
              <div className="type-h2">
                {this.state.activeItem.intro}
              </div>
              <div className="type-p">
                {this.state.activeItem.description}
              </div>
            </div>
          </div>

          <div className="MapFull__popup-img">
            <img
              src={asset(`/assets/img/${this.state.activeItem.id}.png`)}
              alt={this.state.activeItem.title}
              style={this.#getImageSize()}
            />
          </div>
        </div>
      </div>
    );
  }
}
