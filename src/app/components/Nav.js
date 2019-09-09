import React from 'react';
import {MatchPath, NavLink} from "react-router-dom";

export default class Nav extends React.Component {
  
  render() {

    return (
      <nav className="Nav">
        <div className="Nav__container">
          <li className="Nav__item">
            <NavLink className="Nav__link" exact={true} activeClassName="Nav--active" to="/">Introduction</NavLink>
          </li>

          <li className="Nav__item">
            <NavLink className="Nav__link" activeClassName="Nav--active" to="/article/sturgeon">Sturgeon</NavLink>
          </li>

          <li className="Nav__item">
            <NavLink className="Nav__link" activeClassName="Nav--active" to="/article/microplastic">Microplastic</NavLink>
          </li>

          <li className="Nav__item">
            <NavLink className="Nav__link" activeClassName="Nav--active" to="/article/hydro-power">Hydro-power</NavLink>
          </li>

          <li className="Nav__item">
            <NavLink className="Nav__link" activeClassName="Nav--active" to="/article/rewilding">Rewilding</NavLink>
          </li>

          <li className="Nav__item">
            <NavLink className="Nav__link" activeClassName="Nav--active" to="/article/mila-23">Mila 23</NavLink>
          </li>
        </div>
      </nav>
    );
  }
}
