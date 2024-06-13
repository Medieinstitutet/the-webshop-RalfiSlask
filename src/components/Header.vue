<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LargeHeading from './LargeHeading.vue';
import Cart from './Cart.vue';
</script>

<template>
  <header>
    <div class="flex justify-between items-center bg-slate-200 h-[60px] px-6">
      <LargeHeading text="Matthias Webshop" />
      <div class="flex items-center gap-4 text-lg">
        <nav class="flex items-centere gap-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>
        <Cart />
      </div>
    </div>
  </header>
</template>
