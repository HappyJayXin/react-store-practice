import React, { Component } from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

export default class Products extends Component {
  render() {
    return (
      <>
        <ToolBox />
        <div className="products">
          <div className="columns is-desktop is-multiline">
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
          </div>
        </div>
      </>
    );
  }
}
