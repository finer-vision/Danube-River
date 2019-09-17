import React, {createElement} from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Services from "../services";
import config from "../core/config";

@AppContext
export default class LandingScreen extends BaseScreen {
  state = {
    mapSection: 'zoomed',
    mapComponent: null,
    lockSections: false,
  };

  // Don't lock sections until halfway past the header section, to allow for more of an impactful parallax effect.
  #handleScroll = () => this.setState({lockSections: this.props.app.scrollY >= this.props.app.screenH * 0.6});

  #handleMapSectionChange = mapSection => this.setState({mapSection});

  componentDidMount() {
    Services.event.on('screen.scroll', this.#handleScroll);
    Services.event.on('map.section.change', this.#handleMapSectionChange);
  }

  componentWillUnmount() {
    Services.event.off('screen.scroll', this.#handleScroll);
    Services.event.off('map.section.change', this.#handleMapSectionChange);
  }

  render() {
    return (
      <Screen name="Landing" lockSections={this.state.lockSections}>
        <Section show={this.state.mapSection === 'zoomed'} className="Section__landing-hero">
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            parallaxHeaderId="landing"
          />
        </Section>

        <Section show={true} name="map">
          {createElement(this.props.app.mapComponent)}
        </Section>

        <Section
          show={!this.props.app.isMobile && this.state.mapSection === config.articles[config.articles.length - 1].id}
          className="Footer__section"
        >
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
