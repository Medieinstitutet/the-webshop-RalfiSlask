<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Product from './Product.vue';
import SearchInput from './SearchInput.vue';
import Categories from './Categories.vue';

const store = useWebshopStore();
const { visibleProducts } = storeToRefs(store);
const { fetchProducts } = store;

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <section class="max-w-[1400px] flex flex-col items-center gap-14 py-10 pb-[400px]">
    <h2 class="text-3xl">Products</h2>
    <div class="flex flex-col gap-6">
      <div class="w-full flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between px-4">
        <Categories />
      </div>
      <SearchInput />
    </div>

    <ul class="flex flex-wrap gap-4 justify-center">
      <Product v-for="product in visibleProducts" :key="product.id" :productInfo="product" />
    </ul>
  </section>
</template>
