import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import {AppContext} from "../context/AppContext";

@AppContext
export default class Video extends Component {
  static propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })).isRequired,
  };

  static defaultProps = {
    showMuteButton: true,
    autoPlay: true,
  };

  #container = createRef();
  #video = createRef();
  #observer = null;
  #timeout = null;
  state = {
    playing: false,
    showPlayButton: this.props.showPlayButton
  };

  componentDidMount() {
    if (!this.props.poster) {
      this.#timeout = setTimeout(() => {
        this.#observer = new IntersectionObserver(this.#handleEntry, {
          root: document.querySelector('.Screen'),
          rootMargin: '0px',
          threshold: 0.01,
        });
        this.#observer.observe(this.#container.current);
      }, 2000);
    }
  }

  componentWillUnmount() {
    this.#timeout !== null && clearTimeout(this.#timeout);
    if (!this.props.poster) {
      if(this.#observer !== null){
        this.#observer.unobserve(this.#container.current);
      }
    }
  }

  #handleEntry = async entries => {
    if (this.props.showMuteButton) {
      await this.#video.current[entries[0].isIntersecting ? 'play' : 'pause']();
    }
    this.#video.current.currentTime = 0;
  };

  #playVideo = () => {
    if (this.state.playing && this.props.showPlayButton) {

      this.#video.current.pause();
      this.setState({playing: false, showPlayButton: true});
    } else {

      this.#video.current.play();
      this.setState({playing: true, showPlayButton: false});
    }
  };

  displayPlayButton() {
    if (this.state.showPlayButton) {
      return (
        <div className="Video__play-button">
          <img src={`assets/img/play-button.svg`}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={`Video ${this.props.className}`} ref={this.#container}>
        {this.displayPlayButton()}

        <video ref={this.#video} playsInline autoPlay={this.props.autoPlay} muted={this.props.app.muteVideos}
               onClick={this.#playVideo}
               poster={this.props.poster}
        >
          {this.props.sources.map((source, index) => (
            <source key={`video-source-${index}`} src={source.src} type={source.type}/>
          ))}
        </video>
      </div>
    );
  }
}
