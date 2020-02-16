// Products components
export interface ProductsState {
  product: Array<productType>;
  sourceProduct: Array<productType>,
  panelActive: boolean,
  panelRef: any
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
}

// Header components
export interface HeaderState {
  nickname: string;
};

// ToolBox components
export interface ToolBoxProps {
  search: (value: string) => void
}

export interface ToolBoxState {
  searchText: string
}

// Panel
export interface PanelState {
  active: boolean,
  callback: (p: string) => void
}

export interface AddInventoryProps {
  close: (p?: productType) => void
}

export interface AddInventoryState {
  name: string;
  price: number,
  tags: string,
  image: string,
  status: string
}
