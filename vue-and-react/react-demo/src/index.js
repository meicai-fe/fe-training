import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Router>
    <Provider {...store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);