import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import { AppContext } from "../context/AppContext";
import { asset } from "../core/utils";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Section from "../components/Section";
import MapZoomed from "../components/MapZoomed";

@AppContext
export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing">
      <Section show={true}>
        <Hero
          tag="Life of a River"
          title="The Danube"
          background={asset('assets/img/landing-screen-hero.png')}
        />
      </Section>

      <Section show={true}>
        <Video sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}/>
      </Section>

      <Section show={true}>
        <MapZoomed/>
      </Section>
    </Screen>
  );
}
