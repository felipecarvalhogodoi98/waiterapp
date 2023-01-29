export interface Order {
  _id: string;
  table: string;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  products: Array<{
    _id: string;
    quantity: number;
    product: {
      _id: string;
      name: string;
      imagePath: string;
      price: number;
    };
  }>;
}
