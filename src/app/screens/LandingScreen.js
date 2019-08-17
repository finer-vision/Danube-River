import React from "react";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import { Link } from "react-router-dom";

export default class LandingScreen extends BaseScreen {
  render = () => (
    <Screen name="Landing">
      <div className="type-h1">Landing Screen</div>
        <Link to="/article">Article</Link>
    </Screen>
  );
}
