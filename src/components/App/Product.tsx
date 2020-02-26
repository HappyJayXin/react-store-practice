import React, { Component } from 'react';
import { formatPrice } from 'commons/helpers';
import { ProductProps } from "types";

export default class Product extends Component<ProductProps> {
  toEdit = () => {
    if(this.props.panelRef) {
      this.props.panelRef.current.open({
        callback: (data: any) => {
          if(data) {
            this.props.update(data);
          }
        },
        comp: 'edit',
        product: this.props.product
      })
    }
  }

  render() {
    const { name, tags, image, price, status } = this.props.product;
    const _pClass: {[key: string]: string} = {
      available: 'product',
      unavailable: 'product out-stock'
    }

    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          <div className="p-head has-text-right" onClick={this.toEdit}>
            <span className="icon edit-btn">
              <i className="fas fa-sliders-h"></i>
            </span>
          </div>
          <div className="img-wrapper">
            <div className="out-stock-text">Out Of Stock</div>
            <figure className="image is4by3">
              <img src={image} alt="shoes" />
            </figure>
          </div>
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-cart" disabled={status === 'unavailable'}>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
