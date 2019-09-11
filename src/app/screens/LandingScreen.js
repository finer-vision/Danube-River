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

@AppContext
export default class LandingScreen extends BaseScreen {
  #screen = null;

  state = {
    loading: true,
    scrollY: 0,
    mapComponent: null,
  };

  async componentDidMount() {
    let mapComponent = null;
    if (!this.props.app.isMobile) {
      mapComponent = await import('../components/Map/index');
      await preloadAssets();
    } else {
      mapComponent = await import('../components/MobileMap');
    }

    await this.setState({loading: false, mapComponent: mapComponent.default});
    this.#screen = document.querySelector('.Screen');
    this.#screen.addEventListener('scroll', this.#handleScroll);
  }

  componentWillUnmount() {
    this.#screen.removeEventListener('scroll', this.#handleScroll);
  }

  #handleScroll = () => {
    this.setState({scrollY: this.#screen.scrollTop});
  };

  render() {
    if (this.state.loading) {
      return <Loading/>;
    }

    return (
      <Screen name="Landing" lockSections>
        <MuteToggle/>

        <Section show={true}>
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            parallaxHeaderId="landing"
          />
        </Section>

        <Section show={true}>
          {createElement(this.state.mapComponent)}
        </Section>

        <Section show={true} className="Footer__section">
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
