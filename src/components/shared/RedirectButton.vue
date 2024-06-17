<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();
const { resetCheckoutForm } = store;

interface IRedirectButtonProps {
  path: string;
  title: string;
}

defineProps<IRedirectButtonProps>();
</script>

<template>
  <RouterLink to="/products"
    ><button @click="resetCheckoutForm">{{ title }}</button></RouterLink
  >
</template>
