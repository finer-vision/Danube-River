import React, {createContext} from "react";

const Context = createContext({});

export const MapContextProvider = ({value, children}) => (
  <Context.Provider value={value}>
    {children}
  </Context.Provider>
);

export const MapContext = Component => props => (
  <Context.Consumer>
    {map => <Component {...props} map={map}/>}
  </Context.Consumer>
);
