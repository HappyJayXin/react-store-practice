import React, { Component } from 'react';
import ToolBox from 'components/App/ToolBox';
import Product from 'components/App/Product';
import { ProductsState } from 'types';
import { getProducts } from 'api/app';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Panel from 'components/Common/Panel';

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: [], // For filter data
      sourceProduct: [],
      panelActive: false,
      panelRef: React.createRef<Panel>()
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

  toAdd = () => {
    this.state.panelRef.current.open({
      callback: (data: any) => {
        console.log(data);
      }
    })
  };

  render() {
    const { panelRef } = this.state;
    return (
      <>
        <Panel ref={panelRef} />
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-desktop is-multiline">
            <TransitionGroup component={null}>
              {this.state.product.map(prod => {
                return (
                  <CSSTransition
                    classNames="product"
                    timeout={{ enter: 200, exit: 300 }}
                    key={prod.id}
                  >
                    <div className="column is-3" key={prod.id}>
                      <Product product={prod} />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            <button className="is-primary button add-btn" onClick={this.toAdd}>
              Add
            </button>
          </div>
        </div>
      </>
    );
  }
}
