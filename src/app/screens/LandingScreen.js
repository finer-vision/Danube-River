import React, {createElement} from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import {preloadAssets} from "../core/utils";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Loading from "../components/Loading";
import MuteToggle from "../components/MuteToggle";
import Services from "../services";
import config from "../core/config";

@AppContext
export default class LandingScreen extends BaseScreen {
  state = {
    loading: true,
    mapComponent: null,
    lockSections: false,
  };

  // Don't lock sections until halfway past the header section, to allow for more of an impactful parallax effect.
  #handleScroll = () => this.setState({lockSections: this.props.app.scrollY >= window.innerHeight * 0.6});

  async componentDidMount() {
    Services.event.on('screen.scroll', this.#handleScroll);
    const mapComponent = await import(`../components/${this.props.app.isMobile ? 'MobileMap' : 'Map/index'}`);
    this.setState({loading: false, mapComponent: mapComponent.default});
  }

  componentWillUnmount() {
    Services.event.off('screen.scroll', this.#handleScroll);
  }

  render() {
    if (this.state.loading) {
      return <Loading/>;
    }

    return (
      <Screen name="Landing" lockSections={this.state.lockSections}>
        <MuteToggle/>

        <Section show={true}>
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            parallaxHeaderId="landing"
          />
        </Section>

        <Section show={true} name="map">
          {createElement(this.state.mapComponent)}
        </Section>

        <Section show={true} className="Footer__section">
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
