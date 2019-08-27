import React, {Component, createRef} from "react";
import PropTypes from "prop-types";

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
    muted: true,
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

  #toggleMute = () => {
    const muted = !this.state.muted;
    this.setState({muted});
    !muted && this.#video.current.play();
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

  displayMuteButton() {
    if (this.props.showMuteButton) {
      return (
        <div className="Video__mute" onClick={this.#toggleMute}>
          <svg width={50} height={50}>
            <g fill="none" fillRule="evenodd">
              <path fillOpacity={0.9} fill="#FFF" d="M0 0h50v50H0z"/>
              <g fill="#EB4535">
                <path
                  d="M18.124 12.11a1.555 1.555 0 00-1.64.313l-6.463 6.799H5.505c-.828 0-1.505.651-1.505 1.444v8.667c0 .794.677 1.444 1.505 1.444h4.516l6.462 6.8c.43.413 1.078.537 1.64.313.564-.222.93-.75.93-1.335v-23.11c0-.584-.366-1.113-.93-1.336"
                />
                {this.state.muted && (
                  <path
                    d="M45.238 17.794c0 2.119-.512 3.726-1.535 4.821-1.024 1.095-2.512 1.643-4.465 1.643a7.515 7.515 0 01-2.678-.5c-.881-.333-1.87-.881-2.965-1.643-1.023-.714-1.85-1.202-2.482-1.464a5.032 5.032 0 00-1.946-.393c-.952 0-1.679.297-2.179.893-.5.595-.75 1.464-.75 2.607h-3c0-2.12.506-3.726 1.518-4.822 1.012-1.095 2.506-1.642 4.482-1.642.905 0 1.798.166 2.679.5.88.333 1.869.88 2.964 1.642 1.024.715 1.851 1.203 2.482 1.465.631.262 1.28.393 1.947.393.952 0 1.678-.298 2.178-.893.5-.596.75-1.465.75-2.607h3zM45.238 26.722c0 2.12-.512 3.726-1.535 4.822-1.024 1.095-2.512 1.642-4.465 1.642a7.515 7.515 0 01-2.678-.5c-.881-.333-1.87-.88-2.965-1.642-1.023-.715-1.85-1.203-2.482-1.465a5.032 5.032 0 00-1.946-.393c-.952 0-1.679.298-2.179.893-.5.596-.75 1.465-.75 2.607h-3c0-2.119.506-3.726 1.518-4.821 1.012-1.095 2.506-1.643 4.482-1.643.905 0 1.798.167 2.679.5.88.333 1.869.881 2.964 1.643 1.024.714 1.851 1.202 2.482 1.464.631.262 1.28.393 1.947.393.952 0 1.678-.297 2.178-.893.5-.595.75-1.464.75-2.607h3z"
                    fillRule="nonzero"
                  />
                )}
              </g>
            </g>
          </svg>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={`Video ${this.props.className}`} ref={this.#container}>
        {this.displayMuteButton()}
        {this.displayPlayButton()}

        <video ref={this.#video} playsInline autoPlay={this.props.autoPlay} muted={this.state.muted}
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
