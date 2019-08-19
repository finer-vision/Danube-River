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
        {config.menu.map(item => (
          <div
            key={`menu-item-${item.id}`}
            className={`MapFull__nav-item ${item.id === this.props.map.activeItem.id ? 'MapFull__nav-item--active' : ''}`}
            onClick={this.#handleClick(item)}
          >
            {item.id === this.props.map.activeItem.id && (
              <div className="type-p">
                Read about
              </div>
            )}
            <div className={`type-${item.id === this.props.map.activeItem.id ? 'h4' : 'tag'}`}>
              {item.title} {item.id === this.props.map.activeItem.id &&
            <img src={asset('/assets/img/arrow.svg')} alt={`Read about ${item.title}`}/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
