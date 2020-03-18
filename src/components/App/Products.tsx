import React, { Component } from 'react';
import ToolBox from 'components/App/ToolBox';
import Product from 'components/App/Product';
import { ProductsState, productType, CartType } from 'types';
import { getProducts } from 'api/app';
import { getEmailCart } from 'api/carts';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Panel from 'components/Common/Panel';

class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: [], // For filter data
      sourceProduct: [],
      panelActive: false,
      panelRef: React.createRef<Panel>(),
      cartNum: 0
    };
  }

  async componentDidMount() {
    const response = await getProducts();
    this.setState({
      product: response as Array<productType>,
      sourceProduct: response as Array<productType>
    });

    this.updateCartNum();
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
      callback: (data: productType) => {
        if (data) {
          this.add(data);
        }
      }
    });
  };

  add = (product: productType) => {
    const _products = [...this.state.product];
    _products.push(product);
    const _sProducts = [...this.state.sourceProduct];
    _sProducts.push(product);

    this.setState({
      product: _products,
      sourceProduct: _sProducts
    });
  };

  update = (product: productType) => {
    const _products = [...this.state.product];
    const _index = _products.findIndex(p => p.id === product.id);
    _products.splice(_index, 1, product);
    _products.push(product);

    const _sProducts = [...this.state.sourceProduct];
    const _sIndex = _sProducts.findIndex(p => p.id === product.id);
    _sProducts.splice(_sIndex, 1, product);

    this.setState({
      product: _products,
      sourceProduct: _sProducts
    });
  };

  delete = (id: number) => {
    const _products = this.state.product.filter(p => p.id !== id);
    const _sProducts = this.state.product.filter(p => p.id !== id);
    this.setState({
      product: _products,
      sourceProduct: _sProducts
    });
  };

  updateCartNum = async () => {
    const cartNum: number = await this.initCartNum();
    this.setState({
      cartNum: cartNum
    });
  };

  initCartNum: () => Promise<number> = async () => {
    const user = global.auth.getUser() || {};
    const carts: any = (await getEmailCart(user.email)) || [];
    return carts
      .map((cart: CartType) => cart.mount)
      .reduce((prev: number, curr: number) => prev + curr, 0);
  };

  render() {
    const { panelRef, cartNum } = this.state;
    return (
      <>
        <Panel ref={panelRef} />
        <ToolBox search={this.search} cartNum={cartNum} />
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
                      <Product
                        product={prod}
                        panelRef={panelRef}
                        update={this.update}
                        delete={this.delete}
                        updateCartNum={this.updateCartNum}
                      />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            {(global.auth.getUser() || {}).type === 1 && (
              <button className="is-primary button add-btn" onClick={this.toAdd}>
                Add
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
