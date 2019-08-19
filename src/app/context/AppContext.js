import React, {createContext} from "react";

const Context = createContext({});

export const AppContextProvider = ({value, children}) => (
  <Context.Provider value={value}>
    {children}
  </Context.Provider>
);

export const AppContext = Component => props => (
  <Context.Consumer>
    {app => <Component {...props} app={app}/>}
  </Context.Consumer>
);
