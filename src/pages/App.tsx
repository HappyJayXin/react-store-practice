import React, { Component } from 'react';
import Header from 'components/App/Header';
import Products from 'components/App/Products';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header nickname="Admin" />
        <Products />
      </div>
    )
  }
}

export default App;
