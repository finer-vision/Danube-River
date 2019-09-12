import React, {Component} from "react";
import MobileDetect from "mobile-detect";
import {HashRouter as Router} from "react-router-dom";
import App from "../components/App";
import {AppContextProvider} from "../context/AppContext";
import Loading from "../components/Loading";
import Services from "../services";

export default class AppContainer extends Component {
  state = {
    muteVideos: true,
    loading: true,
    isMobile: false,
    lockScroll: false,
    screen: null,
    scrollY: 0,
    screenW: window.innerWidth,
    screenH: window.innerHeight,
  };

  #getContext = () => ({
    muteVideos: this.state.muteVideos,
    isMobile: this.state.isMobile,
    lockScroll: this.state.lockScroll,
    screen: this.state.screen,
    scrollY: this.state.scrollY,
    screenW: this.state.screenW,
    screenH: this.state.screenH,
    toggleMuteVideos: this.#toggleMuteVideos,
    setIsMobile: this.#setIsMobile,
    toggleLockScroll: this.#toggleLockScroll,
    setScreen: this.#setScreen,
  });

  #toggleMuteVideos = muteVideos => this.setState({muteVideos});

  #setIsMobile = isMobile => this.setState({isMobile});

  #toggleLockScroll = lockScroll => !this.state.isMobile && this.setState({lockScroll});

  #handleScroll = async event => {
    if (this.state.lockScroll) {
      event.preventDefault();
    }

    if (this.state.screen !== null) {
      await this.setState({scrollY: this.state.screen.scrollTop});
    }

    Services.event.emit('screen.scroll', event);
  };

  #handleResize = async event => {
    await this.setState({screenW: window.innerWidth, screenH: window.innerHeight});
    Services.event.emit('screen.resize', event);
  };

  #setScreen = async screen => {
    this.#removeScrollListeners();
    await this.setState({screen});
    this.state.screen.addEventListener('wheel', this.#handleScroll);
    this.state.screen.addEventListener('scroll', this.#handleScroll);
  };

  #removeScrollListeners = () => {
    this.state.screen !== null && this.state.screen.removeEventListener('wheel', this.#handleScroll);
    this.state.screen !== null && this.state.screen.removeEventListener('scroll', this.#handleScroll);
  };

  componentDidMount() {
    this.setState({loading: false, isMobile: (new MobileDetect(window.navigator.userAgent)).mobile() !== null});
    window.addEventListener('resize', this.#handleResize);
  }

  componentWillUnmount() {
    this.#removeScrollListeners();
    window.removeEventListener('resize', this.#handleResize);
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
