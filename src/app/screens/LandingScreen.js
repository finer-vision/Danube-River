import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import { AppContext } from "../context/AppContext";
import Hero from '../components/Hero'
import { asset } from '../core/utils'

@AppContext
export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing">
      <Hero tag="Life of a River" title="The Danube" background={asset('assets/img/landing-screen-hero.png')}/>
    </Screen>
  );
}
