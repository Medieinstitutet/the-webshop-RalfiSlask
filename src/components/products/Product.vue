<script setup lang="ts">
import type { IMovieProduct } from '@/utils/types/types';
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useWebshopStore();

const { cartProducts } = storeToRefs(store)

const { addProductToCart } = store;

interface IProductProps {
  productInfo: IMovieProduct;
}

const props = defineProps<IProductProps>()

const isProductInCart = computed(() => {
  return cartProducts.value.some(product => product.cartId === props.productInfo.id);
})


</script>

<template>
  <div class="product">
    <div class="px-2 flex flex-col gap-2 h-[125px] w-full">
      <h2 class="font-bold">{{ productInfo.name }}</h2>
      <p>${{ productInfo.price }}</p>
    </div>
    <div class="w-full h-[200px] md:h-[300px]">
      <img class="w-full h-full object-cover" loading="lazy" :src="productInfo.imageUrl" :alt="productInfo.description" width="200px" height="300px"></img>
    </div>
    <div class="w-full">
      <p>Year: {{ productInfo.year }}</p>
    </div>
    <div class="px-2 overflow-y-auto h-[150px]">
      <p>{{  productInfo.description }}</p>
    </div>
    <button class="primary-button" :disabled="isProductInCart" @click="addProductToCart(productInfo.id)">{{ isProductInCart ? 'In Cart' : 'Buy'}}</button>
  </div>
</template>
