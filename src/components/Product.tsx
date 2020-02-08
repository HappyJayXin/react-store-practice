import React, { Component } from 'react';
import { formatPrice } from 'commons/helpers';
import { ProductProps } from "types";

export default class Product extends Component<ProductProps> {
  render() {
    const { name, tags, image, price } = this.props.product;

    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="image is4by3">
              <img src={image} alt="shoes" />
            </figure>
            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
