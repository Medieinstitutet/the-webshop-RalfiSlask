<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import CartProducts from '@/components/cart-sidebar/CartProducts.vue';
import GoBackButton from './GoBackButton.vue';

const store = useWebshopStore();
const { modalStates, totalPrice } = storeToRefs(store);
</script>

<template>
  <div
    :class="`${
      modalStates.cart ? 'translate-x-0' : 'translate-x-full'
    } w-full sm:w-[400px] md:w-[500px] z-50 top-0 h-full fixed transform transition-all duration-300  bg-white border-r border-solid border-grayColor right-0`"
  >
    <section class="w-full flex flex-col py-4">
      <div class="flex justify-between items-center border-b border-solid border-gray-500 px-2 py-4">
        <h2 class="text-2xl">Products</h2>
        <GoBackButton />
      </div>
      <CartProducts />
      <div>{{ totalPrice }}</div>
    </section>
  </div>
</template>
