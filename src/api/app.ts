import { Get, Post } from 'api/method.api';

export const getProducts = () => Get('/products');

export const postProducts = (data: any) => Post('/products', data)
