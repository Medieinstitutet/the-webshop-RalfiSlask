<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { changeStateOfModal } = store;
</script>

<template>
  <button @click="changeStateOfModal('cart', false)">Go Back</button>
</template>
