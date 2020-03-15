import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Login from 'pages/Login';
import App from 'pages/App';
import Cart from 'pages/Cart';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
