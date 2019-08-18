import React, { Component } from "react";
import Nav from "./Nav";
import config from "../../core/config";
import { asset } from "../../core/utils";

export default class MapFull extends Component {
  state = {
    activeItem: {...config.menu[0]},
  };

  #handleNavChange = activeItem => {
    this.setState({activeItem});
  };

  render () {
    return (
      <div className="MapFull">
        <Nav onChange={this.#handleNavChange}/>
        <div className="MapFull__popup">
          <div className="MapFull__popup-id type-hero">
            {String(this.state.activeItem.id).padStart(2, '0')}
          </div>

          <div className="MapFull__popup-inner">
            <div className="flex align-center MapFull__popup-tag">
              <img src={asset('/assets/img/tilde.svg')} alt={this.state.activeItem.title}/>
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
        </div>
      </div>
    );
  }
}
