<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { changeStateOfModal } = store;
const { cartProducts } = storeToRefs(store);
</script>

<template>
  <button @click="changeStateOfModal('cart', true)" class="relative w-[170px] justify-center flex sm:justify-end">
    <img src="../../assets/icons/cart.svg" alt="cart logo" width="32" height="32" />
    <span
      v-if="cartProducts.length > 0"
      class="flex items-center gap-2 bg-blueColor text-white w-6 justify-center rounded-full absolute right-[-8px] top-[-12px]"
    >
      <p>{{ cartProducts.length }}</p>
    </span>
  </button>
</template>
