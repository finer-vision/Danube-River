import React, {Component, lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Loading from "./Loading";

const LandingScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "LandingScreen" */ "../screens/LandingScreen"));
const NotFoundScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "NotFoundScreen" */ "../screens/NotFoundScreen"));
const MicroPlasticScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "MicroPlasticScreen" */ "../screens/MicroPlasticScreen"));

const Screen = Component => props => <Component {...props}/>;

export default class App extends Component {
  render = () => (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <Switch>
        <Route exact path="/" render={Screen(LandingScreen)}/>
        <Route exact path="/article/:id" render={Screen(MicroPlasticScreen)}/>
        <Route render={Screen(NotFoundScreen)}/>
      </Switch>
    </Suspense>
  );
}
