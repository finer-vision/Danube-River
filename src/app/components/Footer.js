import React, {Component} from "react";
import {asset} from "../core/utils";
import Tilde from "./Tilde";
import config from "../core/config";

export default class Footer extends Component {
  render = () => (
    <div className="Footer">
      <div className="Footer__title">
        <Tilde color={config.color.secondary}/>
        <div className="type-h2">
          Dive in Deeper
        </div>
      </div>

      <div className="Footer__wave">
        <div
          className="Footer__wave-top"
          style={{backgroundImage: `url(${asset('/assets/img/wave-top.png')})`}}
        />
        <div
          className="Footer__wave-bottom"
          style={{backgroundImage: `url(${asset('/assets/img/wave-bottom.png')})`}}
        />

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
              <Tilde/>
              <div className="type-h4">
                LIFE OF A RIVER
              </div>
              <div className="type-h1">
                The Danube
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
