import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import {
  ControlBar,
  CurrentTimeDisplay,
  ForwardControl,
  PlaybackRateMenuButton,
  Player,
  ReplayControl,
  TimeDivider,
  VolumeMenuButton
} from "video-react";
import Hls from "hls.js";
import {AppContext} from "../context/AppContext";
import {Waypoint} from "react-waypoint";
import Services from "../services";

@AppContext
export default class Video extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    autoPlay: true,
    controls: true,
    muted: false,
  };

  #video = createRef();

  #togglePlay = playing => () => {
    this.#video.current[playing ? 'play' : 'pause']();
    playing && Services.event.emit('video.play', this.props.src);
  };

  #handleVideoPlay = src => {
    src !== this.props.src && this.#video.current && this.#video.current.pause();
  };

  #handleStateChange = state => {
    !state.paused && Services.event.emit('video.play', this.props.src);
  };

  componentDidMount() {
    if (Hls.isSupported()) {
      if (Hls.isSupported() && this.#video.current && this.props.src) {
        const hls = new Hls();
        hls.loadSource(this.props.src);
        hls.attachMedia(this.#video.current.video.video);
      }
    }
    this.#video.current.subscribeToStateChange(this.#handleStateChange);
    Services.event.on('video.play', this.#handleVideoPlay);
  }

  componentWillUnmount() {
    Services.event.off('video.play', this.#handleVideoPlay);
  }

  render() {
    return (
      <div className={`Video ${this.props.className}`}>
        <Player
          ref={this.#video}
          fluid
          playsInline
          src={this.props.src}
          poster={this.props.poster}
          muted={this.props.muted}
          controls={this.props.controls}
          autoPlay={this.props.autoPlay}
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1}/>
            <ForwardControl seconds={30} order={1.2}/>
            <CurrentTimeDisplay order={4.1}/>
            <TimeDivider order={4.2}/>
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1}/>
            <VolumeMenuButton disabled/>
          </ControlBar>
        </Player>
        <Waypoint onLeave={this.#togglePlay(false)}/>
      </div>
    );
  }
}
