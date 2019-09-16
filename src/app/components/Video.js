import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {AppContext} from "../context/AppContext";
import LazyImage from "./LazyImage";
import {asset} from "../core/utils";

@AppContext
export default class Video extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    showMuteButton: true,
    autoPlay: true,
    controls: true,
    muted: false,
  };

  state = {
    initial: true,
    playing: false,
    showPlayButton: this.props.showPlayButton,
  };

  #togglePlayVideo = () => {
    if (!this.state.initial) {
      return;
    }
    this.setState({initial: false, playing: !this.state.playing});
  };

  displayPlayButton() {
    if (!this.state.showPlayButton || !this.state.initial) {
      return null;
    }
    if (this.state.playing) {
      return null;
    }
    return (
      <div className="Video__play-button">
        <LazyImage src={asset('assets/img/play-button.svg')}/>
      </div>
    );
  }

  render() {
    return (
      <div className={`Video ${this.props.className}`}>
        {this.displayPlayButton()}

        <ReactPlayer
          url={this.props.src}
          muted={this.props.muted}
          controls={this.props.controls}
          autoPlay={this.props.autoPlay}
          playing={this.state.playing}
          onPlay={() => this.setState({playing: true})}
          onPause={() => this.setState({playing: false})}
          onClick={this.#togglePlayVideo}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
