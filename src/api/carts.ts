import { Get, Post, Put, Delete } from 'api/method.api';

export const postCarts = (data: any) => Post('/carts', data);

export const getCarts: (id: number) => Promise<any> = (id: number) => Get(`/carts?productId=${id}`);

export const putCarts = (id:number, data: any) => Put(`/carts/${id}`, data);

export const getAllCart = () => Get('/carts');

export const deleteCart = (id:number) => Delete(`/carts/${id}`);
