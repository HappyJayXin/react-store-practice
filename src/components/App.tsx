import React, { Component } from 'react';
import Header from 'components/Header';
import Products from 'components/Products';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Products />
      </div>
    )
  }
}
