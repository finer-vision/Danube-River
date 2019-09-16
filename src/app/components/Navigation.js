import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import config from "../core/config";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";

const ITEMS = config.articles.map(article => ({
  title: article.title,
  link: `/article/${article.id}`,
  active: false,
}));

@withRouter
export default class Navigation extends Component {
  state = {
    items: [
      {
        title: 'The Danube',
        link: '/',
        active: false,
      },
      ...ITEMS,
    ],
  };

  componentDidMount() {
    const {items} = this.state;
    for (let i = 0; i < items.length; i++) {
      items[i].active = items[i].link === this.props.location.pathname;
    }
    this.setState({items});
  }

  render() {
    return (
      <div className="Navigation">
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
