<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import Product from './Product.vue';
import { onMounted } from 'vue';
import SearchInput from './SearchInput.vue';
import Categories from './Categories.vue';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { filteredProducts } = storeToRefs(store);
const { fetchProducts } = store;

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <section class="max-w-[1400px] flex flex-col items-center gap-10">
    <h2 class="text-3xl">Products</h2>
    <div class="w-full flex items-center justify-between">
      <Categories />
      <SearchInput />
    </div>
    <ul class="flex flex-wrap gap-4 justify-center">
      <Product v-for="product in filteredProducts" :key="product.id" :productInfo="product" />
    </ul>
  </section>
</template>
