import React, { Component } from 'react';
import { PanelProps } from "types";

class Panel extends Component<PanelProps> {
  render() {
    const { active, close } = this.props;
    const _activeClass = active ? 'active' : ''

    return (
      <div className={`panel-wrapper ${_activeClass}`}>
        <div className="over-layer" onClick={close}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={close}>x</span>
            <p className="has-text-centered">Children Component</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;
