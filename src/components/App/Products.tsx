import React, { Component } from 'react';
import ToolBox from 'components/App/ToolBox';
import Product from 'components/App/Product';
import { ProductsState } from 'types';
import { getProducts } from 'api/app';

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: [], // For filter data
      sourceProduct: []
    };
  }

  async componentDidMount() {
    const { data } = await getProducts();
    this.setState({
      product: data,
      sourceProduct: data
    });
  }

  search = (text: string) => {
    let _products = [...this.state.sourceProduct];

    // Filter data
    _products = _products.filter(prod => {
      const matchArray = prod.name.match(new RegExp(text, 'gi'));
      return !!matchArray;
    });

    this.setState({
      product: _products
    });
  };

  render() {
    return (
      <>
        <ToolBox search={this.search} />
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
