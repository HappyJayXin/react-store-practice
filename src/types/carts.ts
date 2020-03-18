
// cartType
export interface CartType {
  id: number;
  productId: number;
  name: string;
  image: string;
  price: number;
  mount: number;
  userId: string;
}

export interface CartItemProps {
  cart: CartType;
  updateCarts: (cart: CartType) => void;
  afterDelete: (cart: CartType) => void;
}
