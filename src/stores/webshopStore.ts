import { defineStore } from 'pinia';
import axios from 'axios';
import type { IMovieProduct } from '@/utils/types/types';

interface IWebshopStates {
  products: IMovieProduct[];
}

export const useWebshopStore = defineStore('webshop', {
  state: (): IWebshopStates => ({
    products: [],
  }),
  actions: {
    async fetchShopData(endpoint: string) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}`);
        const data = response.data;
        this.products = data;
        console.log(this.products);
      } catch (err) {
        console.log(err, 'error');
      }
    },
  },
});
