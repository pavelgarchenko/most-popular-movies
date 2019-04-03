import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieDetail from './MovieDetail';
import PopularMovies from './PopularMovies';
import DefaultRoute from './DefaultRoute';

import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/popular" />
        <Route path="/movies/popular" component={PopularMovies} />
        <Route path="/movies/popular/:id" component={MovieDetail} />
        <Route render={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
