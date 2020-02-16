import API from 'commons/api';
import { AddInventoryState, productType } from 'types';
import { AxiosResponse } from 'axios';

export const getProducts = () => API.get('/products');

interface postProductsType {
  (product: AddInventoryState): Promise<AxiosResponse<productType>>
}

export const postProducts: postProductsType = (product: AddInventoryState) => API.post('/products', product)
