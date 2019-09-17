import React from "react";
import {Link} from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Screen from "../components/Screen";
import {AppContext} from "../context/AppContext";

@AppContext
export default class NotFoundScreen extends BaseScreen {
  componentDidMount() {
    document.title = 'Page Not Found';
  }

  render = () => (
    <Screen name="NotFound">
      <h1>Page Not Found</h1>
      <Link to="/">Back to the start</Link>
    </Screen>
  );
}
