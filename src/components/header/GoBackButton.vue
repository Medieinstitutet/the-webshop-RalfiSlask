<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { changeStateOfCartSidebar } = store;
</script>

<template>
  <button @click="changeStateOfCartSidebar(false)">Go Back</button>
</template>
