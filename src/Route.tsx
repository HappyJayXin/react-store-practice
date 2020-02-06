import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Login from 'pages/Login';
import App from 'pages/App';
import NotFound from 'pages/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
