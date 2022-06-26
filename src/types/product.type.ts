export type Product = {
  id?: number;
  name: string;
  price: number;
  category?: string;
};

export type Create_Product = {
  name: string;
  price: number;
  category?: string;
};
