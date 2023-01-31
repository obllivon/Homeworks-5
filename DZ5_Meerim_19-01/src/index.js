import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {rootReducer} from "./redux/reducer";
import {Provider} from "react-redux";
import {applyMiddleware} from "redux";
import {logger} from "redux-logger/src";

const store = createStore(rootReducer, applyMiddleware(logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
