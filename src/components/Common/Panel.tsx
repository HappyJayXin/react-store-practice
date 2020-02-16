import React, { Component } from 'react';
import { PanelState } from "types";
import AddInventory from 'components/Common/AddInventory';

class Panel extends Component<{} ,PanelState> {
  constructor(props: any) {
    super(props);
  
    this.state = {
      active: false,
      callback: () => {}
    }
  }
  
  open = (option: { callback: () => void }) => {
    this.setState({
      active: true,
      callback: option.callback
    });
  }

  close = (p?: any) => {
    this.setState({
      active: false
    });

    if(p) {
      this.state.callback(p);
    }
  }

  render() {
    const { active } = this.state;
    const _activeClass = active ? 'active' : ''

    return (
      <div className={`panel-wrapper ${_activeClass}`}>
        <div className="over-layer" onClick={() => this.close()}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={() => this.close()}>x</span>
            <AddInventory close={this.close} key={new Date().getTime()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;
