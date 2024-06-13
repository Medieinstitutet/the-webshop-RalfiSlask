export interface IMovieProduct {
  added: Date;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  productCategory: ICategory[];
  year: number;
}

export interface ICategory {
  categoryId: number;
  category: null;
}
