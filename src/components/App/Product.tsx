import React, { Component } from 'react';
import { formatPrice } from 'commons/helpers';
import { withRouter } from 'react-router-dom';
import { ProductProps, CartType } from 'types';
import { postCarts, getCarts, putCarts } from 'api/carts';
import { toast } from 'react-toastify';

class Product extends Component<ProductProps> {
  toEdit = () => {
    if(this.props.panelRef) {
      this.props.panelRef.current.open({
        callback: (data: any) => {
          if(data) {
            this.props.update(data);
            this.props.delete(data.id);
          }
        },
        comp: 'edit',
        product: this.props.product
      })
    }
  }

  addCart = async () => {
    if(!global.auth.isLogin()) {
      this.props.history.push('/login');
      toast.info('Please Login First');
      return;
    }

    try {
      const user = global.auth.getUser() || {};
      const { id, name, image, price } = this.props.product;
      const carts = await getCarts(id);

      if(carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        await putCarts(cart.id ,cart);
      } else {
        const cart: CartType = {
          id,
          productId: id,
          name,
          image,
          price,
          mount: 1,
          userId: user.email
        }

        await postCarts(cart);
      }
      toast.success('Already add.');
      this.props.updateCartNum();
    } catch(err) {
      toast.error('add error.');
    }
  }

  renderManagerBtn = () => {
    const user = global.auth.getUser() || {};

    if (user.type === 1) {
      return (
        <div className="p-head has-text-right" onClick={this.toEdit}>
          <span className="icon edit-btn">
            <i className="fas fa-sliders-h"></i>
          </span>
        </div>
      )
    }
  };

  render() {
    const { name, tags, image, price, status } = this.props.product;
    const _pClass: {[key: string]: string} = {
      available: 'product',
      unavailable: 'product out-stock'
    }

    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          {this.renderManagerBtn()}
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
          <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart}>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
