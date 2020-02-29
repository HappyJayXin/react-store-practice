import React, { useState, useEffect } from 'react';
import { getAllCart } from 'api/app';
import { CartType } from 'types';
import Layout from 'Layout';
import CartItem from 'components/Cart/CartItem';
import { formatPrice } from 'commons/helpers';

const Cart = () => {
  const [carts, setCarts] = useState<CartType[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const carts = await getAllCart();
      setCarts(carts as CartType[]);
    };

    fetchCart();
  }, [carts]);

  const totalPrice = () => {
    const totalPrice = carts.map(cart => cart.price * cart.mount).reduce((acc, curr) => acc + curr, 0);
    return formatPrice(totalPrice);
  };

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Carts</span>
        <div className="cart-list">
          {carts.map(cart => (
            <CartItem key={cart.productId} cart={cart} />
          ))}
        </div>
        <div className="cart-total">
          Total:<span className="total-price">{totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
