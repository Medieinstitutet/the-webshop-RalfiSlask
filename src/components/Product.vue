<script setup lang="ts">
import type { IMovieProduct } from '@/utils/types/types';
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();

const { categories } = storeToRefs(store)

const { addProductToCart } = store;

interface IProductProps {
  productInfo: IMovieProduct;
}

defineProps<IProductProps>();


</script>

<template>
  <div class="w-[125px] sm:w-[150px] md:w-[250px] xl:w-[300px] rounded-md py-4 flex flex-col gap-4">
    <div class="px-2 flex flex-col gap-2 h-[125px]">
      <h2 class="font-bold">{{ productInfo.name }}</h2>
      <p>${{ productInfo.price }}</p>
    </div>
    <div class="w-full h-[200px] md:h-[300px]">
      <img class="w-full h-full object-cover" loading="lazy" :src="productInfo.imageUrl" :alt="productInfo.description"></img>
    </div>
    <div>
      <p>Year: {{ productInfo.year }}</p>
    </div>
    <div class="px-2 overflow-y-auto h-[150px]">
      <p>{{  productInfo.description }}</p>
    </div>
    <button @click="addProductToCart(productInfo.id)">Buy</button>
  </div>
</template>
