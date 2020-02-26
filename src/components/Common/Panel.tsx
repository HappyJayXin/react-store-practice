import React, { Component } from 'react';
import { PanelState, productType } from 'types';
import AddInventory from 'components/Common/AddInventory';
import EditInventory from 'components/Common/EditInventory';

class Panel extends Component<{}, PanelState> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: false,
      callback: () => {},
      comp: '',
      product: {
        id: 0,
        name: '',
        image: '',
        price: 0,
        tags: '',
        status: ''
      }
    };
  }

  open = (option: {
    callback: () => void,
    comp: string,
    product: productType
  }) => {
    this.setState({
      active: true,
      callback: option.callback,
      comp: option.comp,
      product: option.product
    });
  };

  close = (p?: any) => {
    this.setState({
      active: false
    });

    if (p) {
      this.state.callback(p);
    }
  };

  render() {
    const { active, comp, product } = this.state;
    const _activeClass = active ? 'active' : '';

    return (
      <div className={`panel-wrapper ${_activeClass}`}>
        <div className="over-layer" onClick={() => this.close()}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={() => this.close()}>
              x
            </span>
            {comp === 'edit' ? (
              <EditInventory close={this.close} key={new Date().getTime()} product={product} />
            ) : (
              <AddInventory close={this.close} key={new Date().getTime()} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
