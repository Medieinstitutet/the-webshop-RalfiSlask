<script setup lang="ts">
import type { IMovieProduct } from '@/utils/types/types';
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import ProductInfoSlider from './ProductInfoSlider.vue';

const store = useWebshopStore();

const { cartProducts } = storeToRefs(store);

const { addProductToCart } = store;

interface IProductProps {
  productInfo: IMovieProduct;
}

const props = defineProps<IProductProps>();

const isProductInCart = computed(() => {
  return cartProducts.value.some(product => product.productId === props.productInfo.id);
});

const { name, price, imageUrl, description, id, year } = props.productInfo;
</script>

<template>
  <div class="product">
    <div class="px-2 flex flex-col gap-2 h-[125px] w-full">
      <h2 class="font-bold">{{ name }}</h2>
      <p>${{ price }}</p>
    </div>
    <div class="overflow-y-hidden relative w-full h-[450px] md:h-[550px]">
      <div class="w-full h-full absolute top-0 z-10">
        <img
          class="w-full h-full object-cover"
          loading="lazy"
          :src="imageUrl"
          :alt="description"
          width="200px"
          height="300px"
        />
      </div>
      <div class="group absolute bottom-0 z-30 w-full">
        <ProductInfoSlider :year="year.toString()" :description="description" />
        <button
          class="absolute bottom-0 secondary-button z-40"
          :disabled="isProductInCart"
          @click="addProductToCart(id)"
        >
          {{ isProductInCart ? 'In Cart' : 'Buy' }}
        </button>
      </div>
    </div>
  </div>
</template>
