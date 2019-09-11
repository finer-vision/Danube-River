import React, {Component} from "react";
import MobileDetect from "mobile-detect";
import {HashRouter as Router} from "react-router-dom";
import App from "../components/App";
import {AppContextProvider} from "../context/AppContext";
import Loading from "../components/Loading";

export default class AppContainer extends Component {
  state = {
    muteVideos: true,
    loading: true,
    isMobile: false,
    lockScroll: false,
  };

  #getContext = () => ({
    muteVideos: this.state.muteVideos,
    isMobile: this.state.isMobile,
    lockScroll: this.state.lockScroll,
    toggleMuteVideos: this.#toggleMuteVideos,
    setIsMobile: this.#setIsMobile,
    toggleLockScroll: this.#toggleLockScroll,
  });

  #toggleMuteVideos = muteVideos => this.setState({muteVideos});

  #setIsMobile = isMobile => this.setState({isMobile});

  #toggleLockScroll = lockScroll => {
    if (this.state.isMobile) {
      return;
    }
    this.setState({lockScroll});
    console.log('AppContainer.#lockScroll->lockScroll', lockScroll);
  };

  componentDidMount() {
    const md = new MobileDetect(window.navigator.userAgent);
    this.setState({loading: false, isMobile: md.mobile() !== null});
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
