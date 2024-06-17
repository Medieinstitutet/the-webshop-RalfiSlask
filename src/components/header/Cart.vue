<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { changeStateOfModal } = store;
const { cartProducts } = storeToRefs(store);
</script>

<template>
  <button @click="changeStateOfModal('cart', true)" class="relative">
    <span>To Cashier</span>
    <span class="flex items-center gap-2 bg-grayColor w-6 justify-center rounded-full absolute right-0 top-[-20px]">
      <p>{{ cartProducts.length }}</p>
    </span>
  </button>
</template>
