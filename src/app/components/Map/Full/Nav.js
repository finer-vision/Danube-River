import React, {Component} from "react";
import {asset} from "../../../core/utils";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import config from "../../../core/config";

@withRouter
export default class Nav extends Component {
  static propTypes = {
    activeItem: PropTypes.object,
    onChange: PropTypes.func,
  };

  #handleClick = item => () => {
    if (item.id === this.props.activeItem.id) {
      return this.props.history.push(`/article/${item.id}`);
    }
    this.props.onChange && this.props.onChange(item);
  };

  render() {
    return (
      <div className="MapFull__nav">
        {config.menu.map(item => (
          <div
            key={`menu-item-${item.id}`}
            className={`MapFull__nav-item ${item.id === this.props.activeItem.id ? 'MapFull__nav-item--active' : ''}`}
            onClick={this.#handleClick(item)}
          >
            {item.id === this.props.activeItem.id && (
              <div className="type-p">
                Read about
              </div>
            )}
            <div className={`type-${item.id === this.props.activeItem.id ? 'h4' : 'tag'}`}>
              {item.title} {item.id === this.props.activeItem.id && <img src={asset('/assets/img/arrow.svg')} alt={`Read about ${item.title}`}/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
