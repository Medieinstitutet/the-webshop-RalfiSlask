<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import CartProduct from './CartProduct.vue';

const store = useWebshopStore();
const { cartProducts } = storeToRefs(store);
</script>

<template>
  <CartProduct v-for="cartProduct in cartProducts" :key="cartProduct.cartId" :cartProductInfo="cartProduct" />
</template>
