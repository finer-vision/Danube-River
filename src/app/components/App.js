import React, {Component, lazy, Suspense} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Loading from "./Loading";
import {AppContext} from "../context/AppContext";

const LandingScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "LandingScreen" */ "../screens/LandingScreen"));
const NotFoundScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "NotFoundScreen" */ "../screens/NotFoundScreen"));
const MicroPlasticScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "MicroPlasticScreen" */ "../screens/MicroPlasticScreen"));
const Mila23Screen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "Mila23Screen" */ "../screens/Mila23Screen"));
const HydroPowerScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "HydroPowerScreen" */ "../screens/HydroPowerScreen"));
const RewildingScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "RewildingScreen" */ "../screens/RewildingScreen"));
const SturgeonScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "SturgeonScreen" */ "../screens/SturgeonScreen"));
const AboutScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "AboutScreen" */ "../screens/AboutScreen"));

const Screen = Component => props => <Component {...props}/>;

@withRouter
@AppContext
export default class App extends Component {
  #historyListener = null;

  componentDidMount() {
    this.#historyListener = this.props.history.listen(this.props.app.resetScroll);
  }

  componentWillUnmount() {
    this.#historyListener !== null && this.#historyListener();
  }

  render = () => (
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route exact path="/" render={Screen(LandingScreen)}/>
        <Route exact path="/article/microplastics" render={Screen(MicroPlasticScreen)}/>
        <Route exact path="/article/mila-23" render={Screen(Mila23Screen)}/>
        <Route exact path="/article/hydropower" render={Screen(HydroPowerScreen)}/>
        <Route exact path="/article/rewilding" render={Screen(RewildingScreen)}/>
        <Route exact path="/article/sturgeon" render={Screen(SturgeonScreen)}/>
        <Route exact path="/about" render={Screen(AboutScreen)}/>
        <Route render={Screen(NotFoundScreen)}/>
      </Switch>
    </Suspense>
  );
}
