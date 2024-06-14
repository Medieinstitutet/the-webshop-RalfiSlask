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

export interface IProductCategory {
  categoryId: number;
  category: null;
}

export interface ICategory {
  id: number;
  name: string;
}
