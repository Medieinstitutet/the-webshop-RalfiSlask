<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import CartProduct from './CartProduct.vue';
import CartEmpty from './CartEmpty.vue';
import CheckoutButton from './CheckoutButton.vue';

const store = useWebshopStore();
const { cartProducts } = storeToRefs(store);
</script>

<template>
  <CartEmpty v-if="cartProducts.length === 0" />
  <div class="flex flex-col gap-4 items-center" v-else>
    <CartProduct v-for="cartProduct in cartProducts" :key="cartProduct.cartId" :cartProductInfo="cartProduct" />
    <CheckoutButton />
  </div>
</template>
