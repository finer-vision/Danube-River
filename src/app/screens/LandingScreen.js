import React, {createElement} from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Services from "../services";

@AppContext
export default class LandingScreen extends BaseScreen {
  state = {
    mapComponent: null,
    lockSections: false,
  };

  // Don't lock sections until halfway past the header section, to allow for more of an impactful parallax effect.
  #handleScroll = () => this.setState({lockSections: this.props.app.scrollY >= this.props.app.screenH * 0.6});

  componentDidMount() {
    Services.event.on('screen.scroll', this.#handleScroll);
  }

  componentWillUnmount() {
    Services.event.off('screen.scroll', this.#handleScroll);
  }

  render() {
    return (
      <Screen name="Landing" lockSections={this.state.lockSections}>
        <Section show={true} className="Section__landing-hero">
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

        <Section show={true} className="Footer__section">
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
