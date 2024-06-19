<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import CartProduct from './CartProduct.vue';
import CartEmpty from './CartEmpty.vue';
import CheckoutButton from './CheckoutButton.vue';
import MediumHeading from '../shared/MediumHeading.vue';

const store = useWebshopStore();
const { cartProducts, totalPrice } = storeToRefs(store);
</script>

<template>
  <CartEmpty v-if="cartProducts.length === 0" />
  <div class="flex flex-col gap-10 items-start h-full px-4 pt-10 overflow-y-auto" v-else>
    <div class="flex gap-4 items-center">
      <MediumHeading text="Total price:" />
      <div class="text-xl">${{ totalPrice }}</div>
    </div>
    <div class="w-full flex flex-col items-start justify-between h-full">
      <div class="flex flex-col gap-10 w-full px-2 pb-8">
        <CartProduct v-for="cartProduct in cartProducts" :key="cartProduct.productId" :cartProductInfo="cartProduct" />
      </div>
      <CheckoutButton />
    </div>
  </div>
</template>
