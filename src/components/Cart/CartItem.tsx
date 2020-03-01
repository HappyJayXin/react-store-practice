import React, { useState, useMemo } from 'react';
import { CartItemProps } from 'types';
import { formatPrice } from 'commons/helpers';
import { putCarts, deleteCart } from 'api/carts';
import produce from "immer";

const CartItem = ({cart, updateCarts, afterDelete}:CartItemProps) => {
  const [mount, setMount] = useState(cart.mount);
  const {id, image, name, price} = cart || {};

  const sumPrice = useMemo(() => {
    return formatPrice(mount * price)
  }, [mount, price]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _mount:number = parseInt(e.target.value);
    setMount(_mount);

    const newCart = produce(cart, draft => ({
      ...draft,
      mount: _mount
    }))

    putCarts(id, newCart).then(() => {
      updateCarts(newCart);
    })
  };

  const handleDeleteCart = () => {
    deleteCart(id).then(() => {
      afterDelete(cart);
    })
  }

  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close" onClick={handleDeleteCart}>X</span>
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
        <input type="number" className="input num-input" value={mount} onChange={ handleChange} min={1}/>
      </div>
      <div className="column">
        <span className="sum-price">{sumPrice}</span>
      </div>
    </div>
  )
}

export default CartItem;
