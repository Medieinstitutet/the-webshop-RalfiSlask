<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { changeStateOfModal } = store;
</script>

<template>
  <button @click="changeStateOfModal('cart', false)">
    <img src="../../assets/icons/close.svg" alt="close icon" width="32" height="32" />
  </button>
</template>
