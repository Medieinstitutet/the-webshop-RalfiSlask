import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import type { IMovieProduct, ICategory, IPaymentMethods, IModals, IInputs, IOrder } from '@/utils/types/types';
import { CartProduct } from '@/models/CartProduct';
import { textOnlyRegx } from '@/utils/regEx/regEx';
import { emptyInputs } from '@/data/formInputs';
import lodash from 'lodash';
import axios from 'axios';

const debounceSearchFetch = lodash.debounce(
  async (searchText: string, fetchBySearch: (searchText: string) => Promise<void>) => {
    await fetchBySearch(searchText);
  }
);

export const useWebshopStore = defineStore('webshop', () => {
  const products = ref<IMovieProduct[]>([]);
  const categories = ref<ICategory[]>([]);
  const selectedCategoryId = ref<number>(1); // All
  const cartProducts = ref<CartProduct[]>(JSON.parse(localStorage.getItem('cart') || '[]') as CartProduct[]);
  const searchText = ref<string>('');
  const searchResults = ref<number[]>([]);
  const paymentMethods = ref<IPaymentMethods>({ invoice: true, paypal: false });
  const modalStates = ref<IModals>({ login: false, create: false, cart: false });
  const inputs = ref<IInputs>(emptyInputs);
  const checkutFormError = ref<boolean>(false);
  const adminOrders = ref<IOrder[]>([]);
  const companyId = ref<number>(56789);
  const isOrderPayed = ref<boolean>(false);

  watch(
    cartProducts,
    newCartProducts => {
      localStorage.setItem('cart', JSON.stringify(newCartProducts));
    },
    { deep: true }
  );

  const toggleStateOfOrder = () => {
    isOrderPayed.value = !isOrderPayed.value;
  };

  const changeInput = (e: Event, key: keyof IInputs) => {
    const target = e.target as HTMLInputElement;
    inputs.value[key] = target.value;
    checkutFormError.value = false;
  };

  // Only test for name input, only required for this excercise
  const isCheckoutFormValid = computed(() => {
    return inputs.value.name.trim().length > 0 ? textOnlyRegx.test(inputs.value.name) : false;
  });

  const totalPrice = computed(() => {
    return cartProducts.value.reduce((prevV, nextV) => prevV + nextV.price * nextV.amount, 0);
  });

  const orderProducts = computed(() => {
    return cartProducts.value.map(product => {
      return { productId: product.productId, amount: product.amount };
    });
  });

  const hasActiveModal = computed(() => {
    return Object.values(modalStates.value).some(state => state);
  });

  const visibleProducts = computed(() => {
    let filteredProducts = products.value;
    console.log(searchText.value);
    if (searchText.value.trim() !== '') {
      filteredProducts = filteredProducts.filter(product => searchResults.value.includes(product.id));
    }

    if (selectedCategoryId.value !== 1) {
      filteredProducts = filteredProducts.filter(product => {
        return product.productCategory?.some(category => category.categoryId === selectedCategoryId.value);
      });
    }

    return filteredProducts;
  });

  const postOrders = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
        companyId: companyId.value,
        createdBy: inputs.value.name,
        created: new Date().toISOString(),
        paymentMethod: paymentMethods.value.invoice ? 'invoice' : 'paypal',
        totalPrice: totalPrice.value,
        orderRows: orderProducts.value, // TEST
      });

      console.log(response);

      isOrderPayed.value = true;
      localStorage.setItem('cart', JSON.stringify([]));
      cartProducts.value = [];
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      const data = response.data;
      products.value = data;
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const fetchOrdersByCompany = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/orders?companyId=${companyId.value}`);
      const data = response.data;
      adminOrders.value = data;
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      const data = response.data;
      data.unshift({ id: 1, name: 'All' });
      categories.value = data;
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const fetchBySearch = async (text: string) => {
    if (text.trim() === '') {
      searchText.value = '';
      searchResults.value = [];
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/search?searchtext=${text}`);
      const data: IMovieProduct[] | {} = response.data;
      if (Array.isArray(data)) {
        // have to convert to array of numbers, productCategory is null in the API
        searchResults.value = data.map(product => product.id);
      } else {
        searchResults.value = [];
      }
      searchText.value = text;
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const setSelectedCategory = (categoryId: number): void => {
    selectedCategoryId.value = categoryId;
  };

  const setProductsBySearch = (text: string): void => {
    debounceSearchFetch(text, fetchBySearch);
  };

  const addProductToCart = (productId: number): void => {
    const isProductAlreadyInCart = cartProducts.value.some(product => product.productId === productId);
    if (isProductAlreadyInCart) return;
    const foundProduct = products.value.find(product => product.id === productId);
    if (foundProduct) {
      const { id, name, price, imageUrl } = foundProduct;
      cartProducts.value.push(new CartProduct(name, id, price, imageUrl, 1));
    }
  };

  const removeProductFromCart = (productId: number): void => {
    cartProducts.value = cartProducts.value.filter(product => product.productId !== productId);
  };

  const increaseCartProduct = (productId: number): void => {
    const foundProduct = cartProducts.value.find(product => product.productId === productId);
    if (foundProduct) {
      foundProduct.amount++;
    }
  };

  const decreaseCartProduct = (productId: number): void => {
    const foundProduct = cartProducts.value.find(product => product.productId === productId);
    if (!foundProduct) return;
    if (foundProduct.amount > 1) {
      foundProduct.amount -= 1;
    }
  };

  const changePaymentMethod = (key: keyof IPaymentMethods): void => {
    for (const method in paymentMethods.value) {
      paymentMethods.value[method as keyof IPaymentMethods] = false;
    }
    paymentMethods.value[key] = true;
  };

  const changeStateOfModal = (key: keyof IModals, state: boolean) => {
    modalStates.value[key] = state;
  };

  const resetCheckoutForm = () => {
    inputs.value = emptyInputs;
    paymentMethods.value = { invoice: true, paypal: false };
  };

  return {
    products,
    categories,
    selectedCategoryId,
    searchResults,
    cartProducts,
    searchText,
    totalPrice,
    visibleProducts,
    paymentMethods,
    modalStates,
    hasActiveModal,
    isCheckoutFormValid,
    checkutFormError,
    inputs,
    adminOrders,
    companyId,
    isOrderPayed,
    fetchProducts,
    fetchCategories,
    fetchBySearch,
    fetchOrdersByCompany,
    postOrders,
    setSelectedCategory,
    setProductsBySearch,
    addProductToCart,
    removeProductFromCart,
    increaseCartProduct,
    decreaseCartProduct,
    changePaymentMethod,
    changeStateOfModal,
    changeInput,
    resetCheckoutForm,
    toggleStateOfOrder,
  };
});
