export type User = {
  id: string;
  name: string;
  email: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export interface Order {
  id: string;
  userId: string;
  productIds: string[];
  totalAmount: number;
  createdAt: Date;
}