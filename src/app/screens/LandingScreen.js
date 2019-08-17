import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import { AppContext } from "../context/AppContext";

@AppContext
export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing">
      <div className="type-h1">Landing Screen</div>
    </Screen>
  );
}
