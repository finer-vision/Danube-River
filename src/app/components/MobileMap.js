import React, {Component} from "react";
import config from "../core/config";
import {asset} from "../core/utils";

export default class MobileMap extends Component {
  render() {
    return (
      <div className="MobileMap">
        <div className="MobileMap__info">
          <div className="type-h4 text-center">
            {config.mapInfo}
          </div>
        </div>
        <div className="MobileMap__map">
          <div className="MobileMap__articles">
            {config.articles.map(article => (
              <div key={`article.${article.id}`} className="MobileMap__articles-article">
                <div className="type-tag">{article.title}</div>
                <div className="type-h3">{article.intro}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
