import { Get, Post, Put } from 'api/method.api';

export const getProducts = () => Get('/products');

export const postProducts = (data: any) => Post('/products', data);

export const putProducts = (id: number ,data: any) => Put(`products/${id}`, data);
