import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import {asset, map, preloadAssets} from "../core/utils";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Video from "../components/Video";
import Section from "../components/Section";
import Map from "../components/Map/index";
import Loading from "../components/Loading";

@AppContext
export default class LandingScreen extends BaseScreen {
  #screen = null;

  state = {
    loading: true,
    scrollY: 0,
  };

  async componentDidMount() {
    await preloadAssets();
    await this.setState({loading: false});
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
        <Section show={true}>
          <Hero
            parallax
            tag="The Danube"
            title="Life of a River"
            background={asset('assets/img/landing-screen-hero.png')}
            style={{
              backgroundPosition: `50% ${map(this.state.scrollY, 0, window.innerHeight, 100, 0)}%`,
            }}
          />
        </Section>

        <Section show={true}>
          <Video sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}/>
        </Section>

        <Section show={true}>
          <Map/>
        </Section>

        <Section show={true} className="Footer__section">
          <Footer/>
        </Section>
      </Screen>
    );
  }
}
