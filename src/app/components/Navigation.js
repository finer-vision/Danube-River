import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import config from "../core/config";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";
import {AppContext} from "../context/AppContext";

const ITEMS = config.articles.map(article => ({
  title: article.title,
  link: `/article/${article.id}`,
  active: false,
}));

@withRouter
@AppContext
export default class Navigation extends Component {
  state = {
    mobileOpen: false,
    items: [
      {
        title: 'The Danube',
        link: '/',
        active: false,
      },
      ...ITEMS,
    ],
  };

  #toggleMenu = () => this.setState({mobileOpen: !this.state.mobileOpen});

  componentDidMount() {
    const {items} = this.state;
    for (let i = 0; i < items.length; i++) {
      items[i].active = items[i].link === this.props.location.pathname;
    }
    this.setState({items});
  }

  render() {
    return (
      <div className={`Navigation ${this.state.mobileOpen ? 'Navigation--open' : ''}`}>
        <img
          src={asset(`assets/img/mobile-menu-${this.state.mobileOpen ? 'close' : 'open'}.svg`)}
          className="Navigation__toggle"
          alt={`${this.state.mobileOpen ? 'Close' : 'Open'} mobile menu`}
          onClick={this.#toggleMenu}
        />

        <div className="Navigation__items">
          {this.state.items.map((item, index) => (
            <Link
              key={`navigation.${index}`}
              to={item.link}
              className={`Navigation__item ${item.active ? 'Navigation__item--active' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <LazyImage src={asset('assets/img/cgtn-logo-header-white.png')} alt="CGTN Logo" className="Navigation__logo"/>
      </div>
    );
  }
}
