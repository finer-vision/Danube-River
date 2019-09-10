import React, {Component} from "react";
import {asset} from "../../../core/utils";
import {withRouter} from "react-router-dom";
import config from "../../../core/config";
import {MapContext} from "../../../context/MapContext";

@withRouter
@MapContext
export default class Nav extends Component {
  #handleClick = item => () => {
    if (item.id === this.props.map.activeItem.id) {
      return this.props.history.push(`/article/${item.id}`);
    }
    this.props.map.setActiveItem(item);
  };

  render() {
    return (
      <div className="MapFull__nav">
        {config.articles.map(article => (
          <div
            key={`menu-item-${article.id}`}
            className={`MapFull__nav-item ${article.id === this.props.map.activeItem.id ? 'MapFull__nav-item--active' : ''}`}
            onClick={this.#handleClick(article)}
          >
            {article.id === this.props.map.activeItem.id && (
              <div className="type-p">
                Read about
              </div>
            )}
            <div className={`type-${article.id === this.props.map.activeItem.id ? 'h4' : 'tag'}`}>
              {article.title} {article.id === this.props.map.activeItem.id &&
            <img src={asset('/assets/img/arrow.svg')} alt={`Read about ${article.title}`}/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
