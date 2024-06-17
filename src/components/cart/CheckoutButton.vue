<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();

const { changeStateOfModal } = store;
</script>

<template>
  <RouterLink to="/checkout">
    <button @click="changeStateOfModal('cart', false)" class="primary-button">Checkout</button>
  </RouterLink>
</template>
