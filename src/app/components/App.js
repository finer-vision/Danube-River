import React, {Component, lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Loading from "./Loading";

const LandingScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "LandingScreen" */ "../screens/LandingScreen"));
const NotFoundScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "NotFoundScreen" */ "../screens/NotFoundScreen"));
const ArticleScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "ArticleScreen" */ "../screens/ArticleScreen"));
const MicroPlasticScreen = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "MicroPlasticScreen" */ "../screens/MicroPlasticScreen"));

const Screen = Component => props => <Component {...props}/>;

export default class App extends Component {
  render = () => (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <Switch>
        <Route exact path="/" render={Screen(LandingScreen)}/>
        <Route exact path="/article/old" render={Screen(ArticleScreen)}/>
        <Route exact path="/article/microplastic" render={Screen(MicroPlasticScreen)}/>
        <Route render={Screen(NotFoundScreen)}/>
      </Switch>
    </Suspense>
  );
}
