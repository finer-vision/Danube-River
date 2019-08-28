import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import config from "../core/config";
import {asset} from "../core/utils";
import Tilde from "./Tilde";

@withRouter
export default class Footer extends Component {
  #goToArticle = article => () => {
    this.props.history.push(`/article/microplastic`);
  };

  render = () => (
    <div className="Footer">
      <div className="Footer__title">
        <Tilde color="#fff"/>
        <div className="type-h2">
          Dive in Deeper
        </div>
      </div>

      <div className="Footer__articles">
        <div className="Footer__article" onClick={() => this.props.history.push('/')}>
          <div className="type-tag text-center text-uppercase">
            Introduction
          </div>
          <div className="type-h4 text-center">
            About the Danube
          </div>
        </div>
        {config.articles.map(article => (
          <div key={`footer.article.${article.id}`} className="Footer__article" onClick={this.#goToArticle(article)}>
            <div className="type-tag text-center text-uppercase">
              {article.title}
            </div>
            <div className="type-h4 text-center">
              {article.intro}
            </div>
          </div>
        ))}
      </div>

      <div className="Footer__wave">
        <div className="Footer__wave-top"/>
        <div className="Footer__wave-bottom"/>

        <div className="Footer__social">
          <div className="type-tag">
            Share your journey
          </div>
          <div className="type-h4">
            #LifeofaRiver
          </div>
          <div className="Footer__social-links">
            <img src={asset('/assets/img/social/link.svg')} alt="Share Link"/>
            <img src={asset('/assets/img/social/instagram.svg')} alt="Share on Instagram"/>
            <img src={asset('/assets/img/social/twitter.svg')} alt="Share on Twitter"/>
            <img src={asset('/assets/img/social/facebook.svg')} alt="Share on Facebook"/>
            <img src={asset('/assets/img/social/chat.png')} alt="Share on Chat"/>
          </div>
        </div>

        <div className="Footer__bottom">
          <div className="Footer__bottom-main flex align-center justify-between">
            <div className="Footer__info">
              <Tilde color={config.color.yellow}/>
              <div className="type-h4">
                THE DANUBE
              </div>
              <div className="type-h1">
                Life of a River
              </div>
            </div>

            <div className="Footer__logo">
              <img src={asset('/assets/img/cgtn-logo-white.png')} alt="CGTN Logo"/>
            </div>
          </div>

          <div className="Footer__small">
            <div className="Footer__small-links type-p">
              <div>
                Terms of use
              </div>
              <div>
                Copyright
              </div>
              <div>
                Privacy policy
              </div>
            </div>

            <div className="type-p">
              Copyright © 2019 CGTN. Beijing ICP prepared NO.16065310-3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
