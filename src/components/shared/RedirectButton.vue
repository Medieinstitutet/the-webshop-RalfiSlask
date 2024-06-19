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
    ><button class="text-lg md:text-xl hover:text-grayColor transition-colors duration-300" @click="resetCheckoutForm">
      {{ title }}
    </button></RouterLink
  >
</template>
