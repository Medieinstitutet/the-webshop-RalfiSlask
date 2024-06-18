<script setup lang="ts">
import LargeHeading from '../shared/LargeHeading.vue';
import { RouterLink } from 'vue-router';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { toggleStateOfOrder } = store;
</script>

<template>
  <div class="w-[500px] h-[500px] z-50">
    <LargeHeading text="Thank you for your order!" />
    <RouterLink to="/products">
      <button @click="toggleStateOfOrder" class="primary-button">Back To Products</button>
    </RouterLink>
  </div>
</template>
