import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieDetail from './Movies/MovieDetail';
import MovieList from './Movies/MovieList';
import DefaultRoute from './DefaultRoute/DefaultRoute';

import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/movie/popular" />
        <Route path="/movie/popular" component={MovieList} />
        <Route path="/movie/top_rated" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route render={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
