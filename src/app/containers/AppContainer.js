import React, {Component} from "react";
import MobileDetect from "mobile-detect";
import {HashRouter as Router} from "react-router-dom";
import App from "../components/App";
import {AppContextProvider} from "../context/AppContext";
import Loading from "../components/Loading";

export default class AppContainer extends Component {
  #scrollIdleTimeout = null;
  #scrollIdleDelay = 250;

  state = {
    muteVideos: true,
    loading: true,
    isMobile: false,
    lockScroll: false,
    screen: null,
  };

  #getContext = () => ({
    muteVideos: this.state.muteVideos,
    isMobile: this.state.isMobile,
    lockScroll: this.state.lockScroll,
    toggleMuteVideos: this.#toggleMuteVideos,
    setIsMobile: this.#setIsMobile,
    toggleLockScroll: this.#toggleLockScroll,
    setScreen: this.#setScreen,
  });

  #toggleMuteVideos = muteVideos => this.setState({muteVideos});

  #setIsMobile = isMobile => this.setState({isMobile});

  #toggleLockScroll = lockScroll => {
    if (this.state.isMobile) {
      return;
    }
    this.setState({lockScroll});
  };

  #setScreen = async screen => {
    this.state.screen !== null && this.state.screen.removeEventListener('wheel', this.#handleScroll);
    await this.setState({screen});
    this.state.screen.addEventListener('wheel', this.#handleScroll);
  };

  #handleScroll = () => {
    this.#clearScrollIdleTimeout();
    this.#scrollIdleTimeout = setTimeout(this.#handleScrollIdleTimeout, this.#scrollIdleDelay);

    const totalScroll = this.state.screen.scrollHeight - window.innerHeight;
    console.log(totalScroll, this.state.screen.scrollTop);
  };

  #clearScrollIdleTimeout = () => {
    this.#scrollIdleTimeout !== null && clearTimeout(this.#scrollIdleTimeout);
    this.#scrollIdleTimeout = null;
  };

  #handleScrollIdleTimeout = () => {
    if (this.state.screen === null) {
      return;
    }
    console.log('ScrollIdleTimeout');
  };

  componentDidMount() {
    this.setState({loading: false, isMobile: (new MobileDetect(window.navigator.userAgent)).mobile() !== null});
  }

  componentWillUnmount() {
    this.state.screen !== null && this.state.screen.removeEventListener('wheel', this.#handleScroll);
    this.#clearScrollIdleTimeout();
  }

  render() {
    if (this.state.loading) {
      return <Loading/>;
    }

    return (
      <Router>
        <AppContextProvider value={this.#getContext()}>
          <App/>
        </AppContextProvider>
      </Router>
    );
  }
}
