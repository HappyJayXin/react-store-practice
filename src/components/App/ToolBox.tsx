import React, { Component, ChangeEvent } from 'react';
import { ToolBoxProps, ToolBoxState } from "types/app";

export default class ToolBox extends Component<ToolBoxProps, ToolBoxState> {
  constructor(props: ToolBoxProps) {
    super(props);
  
    this.state = {
      searchText: ''
    }
  }
  

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({
      searchText: value
    });
    this.props.search(value);
  }

  clearSearchText = () => {
    this.setState({
      searchText: ''
    });
    this.props.search('');
  }

  render() {
    const { searchText } = this.state;

    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input search-input"
                type="text"
                placeholder="Search Product"
                onChange={this.handleChange}
                value={searchText}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>X</button>
            </div>
          </div>
        </div>
        <div className="cart-box">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-num">(0)</span>
        </div>
      </div>
    );
  }
}