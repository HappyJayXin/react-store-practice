// Products components
export interface ProductsState {
  product: Array<productType>;
  sourceProduct: Array<productType>;
  panelActive: boolean;
  panelRef: any;
  cartNum: number;
}

// Product components
export interface productType {
  id: number;
  name: string;
  image: string;
  price: number;
  tags: string;
  status: string;
}

export interface ProductProps {
  product: productType;
  panelRef: any;
  update: (product: productType) => void;
  delete: (id: number) => void;
  updateCartNum: () => Promise<void>;
}

// Header components
export interface HeaderState {
  nickname: string;
};

// ToolBox components
export interface ToolBoxProps {
  search: (value: string) => void;
  cartNum: number;
}

export interface ToolBoxState {
  searchText: string;
}

// Panel
export interface PanelState {
  active: boolean;
  comp: string;
  product: productType;
  callback: (p: string) => void
}

export interface AddInventoryProps {
  close: (p?: productType) => void;
}

export interface AddInventoryState {
  name: string;
  price: number,
  tags: string,
  image: string,
  status: string
}

export interface EditInventoryProps {
  close: (p?: productType) => void;
  product: productType;
}

export interface EditInventoryState {
  id: number;
  name: string;
  price: number,
  tags: string,
  image: string,
  status: string
}

// cartType
export interface cartType {
  productId: number;
  name: string;
  image: string;
  price: number;
  mount: number;
}
