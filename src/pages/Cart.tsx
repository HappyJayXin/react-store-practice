import React, { useState, useEffect, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getAllCart } from 'api/carts';
import { CartType } from 'types';
import Layout from 'Layout';
import CartItem from 'components/Cart/CartItem';
import { formatPrice } from 'commons/helpers';
import produce from 'immer';

const Cart = () => {
  const [carts, setCarts] = useState<CartType[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const carts = await getAllCart();
      setCarts(carts as CartType[]);
    };

    fetchCart();
  }, []);

  const totalPrice = useMemo(() => {
    const totalPrice = carts.map(cart => cart.price * cart.mount).reduce((acc, curr) => acc + curr, 0);
    return formatPrice(totalPrice);
  }, [carts]);

  const updateCarts = (cart: CartType) => {
    const newCart = produce(carts, draft => {
      const _index = draft.findIndex(c => c.id === cart.id);
      draft.splice(_index, 1, cart);
    })
    setCarts(newCart);
  }

  const afterDelete = (cart: CartType) => {
    const _carts = carts.filter(c => c.id !== cart.id);
    setCarts(_carts);
  }

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Carts</span>
        <div className="cart-list">
          <TransitionGroup component={null}>
            {carts.map(cart => (
              <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                <CartItem cart={cart} updateCarts={updateCarts} afterDelete={afterDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {
          carts.length === 0 ? <div className="no-cart">NO GOODS</div> : ''
        }
        <div className="cart-total">
          Total:<span className="total-price">{totalPrice}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
