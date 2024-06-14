import { defineStore } from 'pinia';
import axios from 'axios';
import type { IMovieProduct, ICategory } from '@/utils/types/types';
import { CartProduct } from '@/models/CartProduct';

interface IWebshopStates {
  products: IMovieProduct[];
  categories: ICategory[];
  selectedCategoryId: number;
  searchResults: number[];
  cartProducts: CartProduct[];
  searchText: string;
}

export const useWebshopStore = defineStore('webshop', {
  state: (): IWebshopStates => ({
    products: [],
    categories: [],
    selectedCategoryId: 1, // All
    cartProducts: [{ title: 'hej', cartId: 1, price: 200, imgUrl: '', quantity: 1 }],
    searchText: '',
    searchResults: [],
  }),
  getters: {
    totalPrice: state => {
      return state.cartProducts.reduce((prevV, nextV) => {
        return prevV + nextV.price * nextV.quantity;
      }, 0);
    },
    visibleProducts: state => {
      let products = state.products;
      if (state.searchText.trim() === '') {
        products = state.products;
      } else {
        products = state.products.filter(product => state.searchResults.includes(product.id));
      }

      if (state.selectedCategoryId !== 1) {
        products = products.filter(product => {
          return product.productCategory?.some(category => category.categoryId === state.selectedCategoryId);
        });
        console.log('products after filter:', products);
      }

      return products;
    },
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        const data = response.data;
        this.products = data;
        console.log('products:', data);
      } catch (err) {
        console.log(err, 'error');
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        const data = response.data;
        data.unshift({ id: 1, name: 'All' });
        this.categories = data;
      } catch (err) {
        console.log(err, 'error');
      }
    },
    async fetchBySearch(searchText: string) {
      if (searchText.trim() === '') {
        searchText = '';
        this.searchResults = [];
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/search?searchtext=${searchText}`);
        const data: IMovieProduct[] | {} = response.data;
        if (Array.isArray(data)) {
          // have to convert to array of numbers, productCategory is null in the API
          this.searchResults = data.map(product => product.id);
        } else {
          this.searchResults = [];
        }
        this.searchText = searchText;
      } catch (err) {
        console.log(err, 'error');
      }
    },
    setSelectedCategory(categoryId: number): void {
      this.selectedCategoryId = categoryId;
    },
    setProductsBySearch(searchText: string) {
      this.fetchBySearch(searchText);
    },
    addProductToCart(productId: number): void {
      const isProductAlreadyInCart = this.cartProducts.some(product => product.cartId === productId);
      if (isProductAlreadyInCart) return;
      const foundProduct = this.products.find(product => product.id === productId);
      if (foundProduct) {
        const { id, name, price, imageUrl } = foundProduct;
        this.cartProducts.push(new CartProduct(name, id, price, imageUrl, 1));
        console.log('cartProducts', this.cartProducts);
      }
    },
    removeProductFromCart(productId: number): void {
      this.cartProducts = this.cartProducts.filter(product => product.cartId !== productId);
    },
    increaseCartProduct(productId: number): void {
      const foundProduct = this.cartProducts.find(product => product.cartId === productId);
      if (foundProduct) {
        foundProduct.quantity++;
      }
    },
    decreaseCartProduct(productId: number): void {
      const foundProduct = this.cartProducts.find(product => product.cartId === productId);
      if (!foundProduct) return;
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
      }
    },
  },
});
