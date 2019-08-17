import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import { AppContext } from "../context/AppContext";
import Hero from "../components/Hero";
import Video from "../components/Video";
import { asset } from "../core/utils";
import Section from "../components/Section";

@AppContext
export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing">
      <Section>
        <Hero
          tag="Life of a River"
          title="The Danube"
          background={asset('assets/img/landing-screen-hero.png')}
        />
      </Section>

      <Section>
        <Video
          autoPlay
          muted
          sources={[{src: asset('assets/vid/landing-screen-intro.mp4'), type: 'video/mp4'}]}
        />
      </Section>
    </Screen>
  );
}
