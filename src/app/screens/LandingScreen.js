import React, {createElement} from "react";
import {Howl} from "howler";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Services from "../services";
import config from "../core/config";
import {asset} from "../core/utils";
import MuteToggle from "../components/ToggleMute";

@AppContext
export default class LandingScreen extends BaseScreen {
  #howl = new Howl({
    src: [
      asset('/assets/audio/background.wav'),
      asset('/assets/audio/background.mp3'),
    ],
    ...config.landing.sound,
  });

  state = {
    activeMap: 'zoomed',
    mapSection: config.articles[0].id,
    lockSections: false,
    audioMuted: true,
  };

  // Don't lock sections until halfway past the header section, to allow for more of an impactful parallax effect.
  #handleScroll = () => {
    this.setState({lockSections: this.props.app.scrollY >= this.props.app.screenH * 0.6});
    this.#fadeSound();
  };

  #handleMapSectionChange = mapSection => this.setState({mapSection});

  #handleMapChange = activeMap => this.setState({activeMap});

  #toggleMute = () => {
    const audioMuted = !this.state.audioMuted;
    this.setState({audioMuted});
    this.#howl.mute(audioMuted);
  };

  // Fade the sound effect up and down on scroll, no higher than volume defined in config.landing.sound.volume
  #fadeSound = () => {
    if (this.state.audioMuted) {
      return;
    }

    let volume = config.landing.sound.volume - (this.props.app.scrollY/config.landing.sound.fadeRate);
    volume = Math.max(0, Math.min(config.landing.sound.volume, volume));
    this.#howl.volume(volume);
  };

  componentDidMount() {
    document.title = 'Danube River';
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.content = "Explore the story of the Danube – Europe's second longest river, after the Volga.";
    }
    Services.event.on('screen.scroll', this.#handleScroll);
    Services.event.on('map.section.change', this.#handleMapSectionChange);
    Services.event.on('map.change', this.#handleMapChange);
  }

  componentWillUnmount() {
    this.#howl.mute(true);
    Services.event.off('screen.scroll', this.#handleScroll);
    Services.event.off('map.section.change', this.#handleMapSectionChange);
    Services.event.off('map.change', this.#handleMapChange);
  }

  render() {
    return (
      <Screen name="Landing" lockSections={this.state.lockSections}>
        <MuteToggle
          muted={this.state.audioMuted}
          toggleMute={this.#toggleMute}
        />

        <Section className="Section__landing-hero">
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            parallaxHeaderId="landing"
          />
          <div class='scroll-icon'></div>
        </Section>

        <Section name="map">
          {createElement(this.props.app.mapComponent)}
        </Section>

        <Section
          show={this.props.app.isMobile ? true : this.state.mapSection === config.articles[config.articles.length - 1].id}
          className="Footer__section"
        >
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
