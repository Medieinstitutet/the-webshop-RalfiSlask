export interface IMovieProduct {
  added: Date;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  productCategory: IProductCategory[];
  year: number;
}

export interface IModals {
  login: boolean;
  create: boolean;
  cart: boolean;
}

export interface IProductCategory {
  categoryId: number;
  category: null;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IPaymentMethods {
  invoice: boolean;
  paypal: boolean;
}

export interface IInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface IOrder {
  companyId: number;
  created: Date;
  createdBy: string;
  id: number;
  orderRows: IOrderProduct[];
  paymentMethod: string;
  status: number;
  totalPrice: number;
}

export interface IOrderProduct {
  id: number;
  productId: number;
  product: null;
  amount: number;
  orderId: number;
}

export interface IPositiveInfo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  iconSize: 'small' | 'medium';
}
