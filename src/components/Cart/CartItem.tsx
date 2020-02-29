import React from 'react';
import { CartItemProps } from 'types';
import { formatPrice } from 'commons/helpers';

const CartItem = ({cart}:CartItemProps) => {
  const {image, name, price, mount} = cart;

  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close">X</span>
      </div>
      <div className="column is-narrow">
        <img src={image} alt={name} width="100" />
      </div>
      <div className="column cart-name is-narrow">
        { name }
      </div>
      <div className="column">
        <div className="price">{formatPrice(price)}</div>
      </div>
      <div className="column">
        <input type="number" className="input num-input" defaultValue={mount} />
      </div>
      <div className="column">
        <span className="sum-price">{formatPrice(mount * price)}</span>
      </div>
    </div>
  )
}

export default CartItem;
