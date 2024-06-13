<script setup lang="ts">
import type { IMovieProduct } from '@/utils/types/types';

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
      <img class="w-full h-full object-cover" :src="productInfo.imageUrl"></img>
    </div>
    <div class="px-2 overflow-y-auto h-[150px]">
      <p>{{  productInfo.description }}</p>
    </div>
    
  </div>

</template>
