export interface ProductsState {
  product: Array<productType>;
}

interface productType {
  id: number;
  name: string;
  image: string;
  price: number;
  tags: string;
  status: string;
}

export interface ProductProps {
  product: productType
}

export interface HeaderState {
  nickname: string;
};
