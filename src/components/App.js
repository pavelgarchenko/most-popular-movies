import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieDetailContainer from './MovieDetail';
import PopularListContainer from './MovieList/PopularListContainer';
import TopRatedListContainer from './MovieList/TopRatedListContainer';
import DefaultRoute from './DefaultRoute';

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
