import React, {Component, createRef} from "react";
import {withRouter} from "react-router-dom";
import config from "../core/config";
import {asset} from "../core/utils";

@withRouter
export default class MobileMap extends Component {
  #articles = config.articles.map(() => createRef());

  #goToArticle = article => () => {
    this.props.history.push(`/article/${article.id}`);
  };

  #scrollToArticle = index => () => {
    this.#articles[index].current && this.#articles[index].current.scrollIntoView();
  };

  render() {
    return (
      <div className="MobileMap">
        <div className="MobileMap__info">
          <div className="type-h4 text-center">
            {config.mapInfo}
          </div>
        </div>
        <div className="MobileMap__intro">
          <div className="MobileMap__articles">
            {config.articles.map((article, index) => (
              <div
                key={`intro.article.${article.id}`}
                onClick={this.#scrollToArticle(index)}
                className="MobileMap__articles-article"
              >
                <div className="type-tag">{article.title}</div>
                <div className="type-h3">{article.intro}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="MobileMap__map">
          {config.articles.map((article, index) => (
            <div
              key={`map.article.${article.id}`}
              ref={this.#articles[index]}
              className="MobileMap__map-article-container"
              style={{backgroundImage: `url(${asset(`/assets/img/map/segments/mobile/${article.id}.jpg`)})`}}
            >
              <div className="MobileMap__map-article">
                <div className="type-tag">{article.title}</div>
                <div className="type-h2">{article.intro}</div>
                <p className="type-p">{article.description}</p>
                <div className="button" onClick={this.#goToArticle(article)}>
                  <div className="type-h4">{article.title}</div>
                  <img src={asset('/assets/img/arrow-blue.svg')} alt="Read more"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
