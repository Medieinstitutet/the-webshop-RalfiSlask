<script setup lang="ts">
import { useRoute } from 'vue-router';
import CompanyLogo from './CompanyLogo.vue';
import RedirectButton from '../shared/RedirectButton.vue';
import Navbar from './Navbar.vue';
import Cart from './Cart.vue';
import { computed } from 'vue';

const route = useRoute();

const isCheckoutPage = computed(() => route.path === '/checkout');
</script>

<template>
  <header class="w-full">
    <div
      class="flex flex-col sm:flex-row justify-between items-center border-b border-solid border-grayColor border-opacity-35 bg-white h-[300px] sm:h-[75px] px-6 py-6 sm:py-0"
    >
      <CompanyLogo />
      <RedirectButton path="/products" title="Go Back" v-if="isCheckoutPage" />
      <Navbar v-else />
      <Cart v-if="!isCheckoutPage" />
    </div>
  </header>
</template>
