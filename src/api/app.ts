import { Get, Post, Put, Delete } from 'api/method.api';
import { cartType } from 'components/App/Product';

export const getProducts = () => Get('/products');

export const postProducts = (data: any) => Post('/products', data);

export const putProducts = (id: number ,data: any) => Put(`products/${id}`, data);

export const delProducts = (id: number) => Delete(`/products/${id}`);

export const postCarts = (data: any) => Post('/carts', data);

export const getCarts: (id: number) => Promise<any> = (id: number) => Get(`/carts?productId=${id}`);

export const putCarts = (id:number, data: any) => Put(`/carts/${id}`, data);
