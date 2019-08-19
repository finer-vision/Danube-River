import React, {Component} from "react";
import {asset} from "../../../core/utils";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import config from "../../../core/config";

@withRouter
export default class Nav extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  state = {
    menu: JSON.parse(JSON.stringify(config.menu)),
  };

  #handleClick = item => () => {
    if (item.active) {
      return this.props.history.push(`/article/${item.id}`);
    }
    const menu = this.state.menu.map(menuItem => {
      menuItem.active = menuItem.id === item.id;
      return menuItem;
    });
    this.setState({menu});
    this.props.onChange && this.props.onChange(item);
  };

  render() {
    return (
      <div className="MapFull__nav">
        {this.state.menu.map(item => (
          <div
            key={`menu-item-${item.id}`}
            className={`MapFull__nav-item ${item.active ? 'MapFull__nav-item--active' : ''}`}
            onClick={this.#handleClick(item)}
          >
            {item.active && (
              <div className="type-p">
                Read about
              </div>
            )}
            <div className={`type-${item.active ? 'h4' : 'tag'}`}>
              {item.title} {item.active && <img src={asset('/assets/img/arrow.svg')} alt={`Read about ${item.title}`}/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
