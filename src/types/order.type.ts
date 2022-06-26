export type Order = {
  id?: number;
  user_id: number;
  status: string;
};

export type Add_Product = {
  id?: number;
  quantity: number;
  order_id: number;
  product_id: number;
};
