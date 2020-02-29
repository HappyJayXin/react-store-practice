
// cartType
export interface CartType {
  productId: number;
  name: string;
  image: string;
  price: number;
  mount: number;
}

export interface CartItemProps {
  cart: CartType
}
