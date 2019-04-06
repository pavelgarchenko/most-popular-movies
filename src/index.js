import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./components/App";
import reducer from "./reducers/reducer";

import "./styles.scss";

const middleware = applyMiddleware(thunk, logger);
const store =  createStore(reducer, middleware);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);