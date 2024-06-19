<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();

const { changeStateOfModal } = store;
</script>

<template>
  <RouterLink to="/checkout" class="w-full">
    <button @click="changeStateOfModal('cart', false)" class="secondary-button">Checkout</button>
  </RouterLink>
</template>
