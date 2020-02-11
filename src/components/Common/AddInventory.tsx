import React, { Component } from 'react';
import { AddInventoryProps } from 'types'

export default class AddInventory extends Component<AddInventoryProps> {
  render() {
    const { close } = this.props
    return (
      <div className="inventory">
        <p className="title has-text-centered">
          inventory
        </p>
        <br/>
        <div className="control">
          <input className="input" type="text"/>
        </div>
        <br/>
        <div className="button" onClick={() => close('?')}>
          Cancel
        </div>
      </div>
    )
  }
}
