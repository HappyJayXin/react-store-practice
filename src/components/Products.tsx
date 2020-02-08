import React, { Component } from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';
import { ProductsState } from "types";

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: [
        {
          id: 1,
          name: 'Shoes',
          image: 'images/1.jpg',
          tags: '14 colors',
          price: 4559,
          status: 'available'
        },
        {
          id: 2,
          name: 'Shoes',
          image: 'images/1.jpg',
          tags: '14 colors',
          price: 4559,
          status: 'available'
        }
      ]
    };
  }

  render() {
    return (
      <>
        <ToolBox />
        <div className="products">
          <div className="columns is-desktop is-multiline">
            {this.state.product.map(prod => {
              return (
                <div className="column is-3" key={prod.id}>
                  <Product product={prod} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
