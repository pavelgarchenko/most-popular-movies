import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import DefaultRoute from './DefaultRoute';

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div class="container">
        <Switch>
          <Redirect exact path="/" to="/popular" />
          <Route render={DefaultRoute} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
