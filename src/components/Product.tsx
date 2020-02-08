import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="image is4by3">
              <img src="images/1.jpg" alt="shoes"/>
            </figure>
            <p className="p-tags">25 colors</p>
            <p className="p-name">New Shoes</p>
          </div>
        </div>
        <div className="p-footer">
          <p className="price">$5380</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    )
  }
}
