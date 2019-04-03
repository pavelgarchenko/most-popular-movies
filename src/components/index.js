import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import DefaultRoute from './DefaultRoute';

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/popular" />
        <Route render={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
