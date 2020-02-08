import React, { Component } from 'react';
import ToolBox from 'components/App/ToolBox';
import Product from 'components/App/Product';
import { ProductsState } from "types";
import { getProducts } from "api/app";

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: []
    };
  }

  async componentDidMount() {
    const { data } = await getProducts();
    this.setState({
      product: data
    })
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
