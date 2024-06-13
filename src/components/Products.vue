<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import Product from './Product.vue';
import { onMounted } from 'vue';

const { products, fetchShopData } = useWebshopStore();

console.log(products);

onMounted(() => {
  fetchShopData('products');
});
</script>

<template>
  <section>
    <ul class="flex flex-wrap gap-4 justify-center">
      <Product v-for="product in products" :key="product.id" :productInfo="product" />
    </ul>
  </section>
</template>
