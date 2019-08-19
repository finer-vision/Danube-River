import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";
import {asset} from "../core/utils";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Video from "../components/Video";
import Section from "../components/Section";
import Map from "../components/Map/index";

@AppContext
export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing" lockSections>
      <Section show={false}>
        <Hero
          tag="Life of a River"
          title="The Danube"
          background={asset('assets/img/landing-screen-hero.png')}
        />
      </Section>

      <Section show={false}>
        <Video sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}/>
      </Section>

      <Section show={true}>
        <Map/>
      </Section>

      <Section show={false} className="Footer__section">
        <Footer/>
      </Section>
    </Screen>
  );
}
