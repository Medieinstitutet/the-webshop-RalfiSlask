<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { increaseCartProduct } = store;

interface IButtonProps {
  id: number;
}

defineProps<IButtonProps>();
</script>

<template>
  <button @click="increaseCartProduct(id)" class="operator-button">
    <span class="mb-1">+</span>
  </button>
</template>
