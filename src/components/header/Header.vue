<script setup lang="ts">
import { useRoute } from 'vue-router';
import LargeHeading from './LargeHeading.vue';
import Navbar from './Navbar.vue';
import Cart from './Cart.vue';
import { computed } from 'vue';
import GoBackButton from '../cart-sidebar/GoBackButton.vue';

const route = useRoute();

const isCheckoutPage = computed(() => route.path === '/checkout');
</script>

<template>
  <header class="w-full">
    <div class="flex justify-between items-center border-b border-solid border-grayColor h-[75px] px-6">
      <LargeHeading text="Matthias Webshop" />
      <GoBackButton v-if="isCheckoutPage" />
      <Navbar v-else />
      <Cart v-if="!isCheckoutPage" />
    </div>
  </header>
</template>
