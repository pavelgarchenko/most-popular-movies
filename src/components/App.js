import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieDetailContainer from './Movies/MovieDetail/MovieDetailContainer';
import PopularListContainer from './Movies/MovieList/PopularListContainer';
import TopRatedListContainer from './Movies/MovieList/TopRatedListContainer';
import DefaultRoute from './DefaultRoute/DefaultRoute';

import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/movie/popular" />
        <Route path="/movie/popular" component={PopularListContainer} />
        <Route path="/movie/top_rated" component={TopRatedListContainer} />
        <Route path="/movie/:id" component={MovieDetailContainer} />
        <Route render={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
