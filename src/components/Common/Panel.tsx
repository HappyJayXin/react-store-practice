import React, { Component } from 'react';
import { PanelState, productType } from 'types';
import AddInventory from 'components/Common/AddInventory';
import EditInventory from 'components/Common/EditInventory';
import UserProfile from 'components/Common/UserProfile';

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
      },
      props: {}
    };
  }

  open = (option: { callback: () => void; comp: string; product?: productType, props: any }) => {
    this.setState({
      active: true,
      callback: option.callback,
      comp: option.comp,
      props: option.props
    });

    if (option.product) {
      this.setState({
        product: option.product
      });
    }
  };

  close = (p?: any) => {
    this.setState({
      active: false
    });

    if (p) {
      this.state.callback(p);
    }
  };

  switchComp = (comp: string, product: productType, props:any) => {
    switch (comp) {
      case 'edit':
        return <EditInventory close={this.close} key={new Date().getTime()} product={product} />;
      case 'profile':
        return <UserProfile close={this.close} user={props.user} />;
      default:
        return <AddInventory close={this.close} key={new Date().getTime()} />;
    }
  };

  render() {
    const { active, comp, product, props } = this.state;
    const _activeClass = active ? 'active' : '';

    return (
      <div className={`panel-wrapper ${_activeClass}`}>
        <div className="over-layer" onClick={() => this.close()}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={() => this.close()}>
              x
            </span>
            {this.switchComp(comp, product, props)}
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
