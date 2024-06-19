<script setup lang="ts">
import LargeHeading from '../shared/XLHeading.vue';
import { RouterLink } from 'vue-router';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { toggleStateOfOrder } = store;
</script>

<template>
  <div class="w-[500px] flex flex-col items-center gap-10 z-50">
    <LargeHeading text="Thank you for your order!" />
    <RouterLink to="/products">
      <button @click="toggleStateOfOrder" class="primary-button uppercase">Back</button>
    </RouterLink>
  </div>
</template>
