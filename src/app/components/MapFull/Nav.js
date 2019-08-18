import React, { Component } from "react";
import { asset } from "../../core/utils";

export default class Nav extends Component {
  state = {
    menu: [
      {active: true, link: '/article/1', title: 'Sturgeons'},
      {active: false, link: '/article/2', title: 'Microplastics'},
      {active: false, link: '/article/3', title: 'Dammed'},
      {active: false, link: '/article/4', title: 'Rewilding'},
      {active: false, link: '/article/5', title: 'Mila 23'},
    ],
  };

  render () {
    return (
      <div className="MapFull__nav">
        {this.state.menu.map((item, index) => (
          <div
            key={`menu-item-${index}`}
            className={`MapFull__nav-item ${item.active ? 'MapFull__nav-item--active' : ''}`}
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
