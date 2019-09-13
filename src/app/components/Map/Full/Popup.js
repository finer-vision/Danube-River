import React, {Component} from "react";
import get from "lodash/get";
import {withRouter} from "react-router-dom";
import {asset} from "../../../core/utils";
import {MapContext} from "../../../context/MapContext";
import {AppContext} from "../../../context/AppContext";
import LazyImage from "../../LazyImage";

@MapContext
@withRouter
@AppContext
export default class Popup extends Component {
  #getContainerStyle = () => {
    const maxWidth = 700;
    const artwork = {width: 1440, height: 900};
    const x = this.props.map.activeItem.x || 0;
    const y = this.props.map.activeItem.y || 0;
    return {
      maxWidth: maxWidth,
      width: `${(100 / artwork.width) * maxWidth}vw`,
      transform: `translate(${this.props.app.screenW * ((1 / artwork.width) * x)}px, ${this.props.app.screenH * ((1 / artwork.height) * y)}px)`,
    };
  };

  #goToArticle = () => this.props.history.push(`/article/${this.props.map.activeItem.id}`);

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

        <div className="MapFull__popup-label flex align-center justify-center" onClick={this.#goToArticle}>
          <div className="type-h4">
            Read more
          </div>
          <LazyImage src={asset('assets/img/arrow.svg')} alt="Read more"/>
        </div>

        {get(this.props.map.activeItem, 'images', []).map((image, index) => (
          <div className="MapFull__popup-img" key={`${this.props.map.activeItem.index}.image.${index}`}>
            <LazyImage src={image} alt={this.props.map.activeItem.title}/>
          </div>
        ))}
      </div>
    );
  }
}
