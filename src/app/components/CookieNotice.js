import React, {Component} from "react";
import {asset} from "../core/utils";

export default class CookieNotice extends Component {
  state = {
    show: localStorage.getItem('CookieNotice.status') !== 'actioned',
  };

  #close = () => {
    this.setState({show: false});
    localStorage.setItem('CookieNotice.status', 'actioned');
  };

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div className="CookieNotice">
        <div className="CookieNotice__body">
          <div className="CookieNotice__title type-h4">
            Our Privacy Statement & Cookie Policy
          </div>
          <div className="CookieNotice__info type-p">
            By continuing to browse our site you agree to our use of cookies, revised Privacy Policy and Terms of Use.
            You can change your cookie settings through your browser.
          </div>
          <div className="CookieNotice__links">
            <a href="https://www.cgtn.com/privacy" target="_blank" className="type-h4">Privacy policy</a>
            <a href="https://www.cgtn.com/terms-of-use" target="_blank" className="type-h4">Terms of use</a>
          </div>
        </div>
        <div className="CookieNotice__actions">
          <div className="CookieNotice__close" onClick={this.#close}>&times;</div>
          <div className="CookieNotice__agree type-h4" onClick={this.#close}>
            I agree <img src={asset('/assets/img/tick.svg')} alt="I agree"/>
          </div>
        </div>
      </div>
    );
  }
}
