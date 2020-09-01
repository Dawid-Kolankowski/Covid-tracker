import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import countryDetails from "./countryDetails/countryDetails";
import worldDetails from "./worldDetails/worldDetails";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/details/world" component={worldDetails} />
      <Route path="/details/:country" component={countryDetails} />
    </Switch>
  );
};

export default App;
