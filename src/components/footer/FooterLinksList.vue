<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3 class="font-medium">Page</h3>
    <ul class="list-none flex flex-col gap-2 text-sm">
      <RouterLink to="/"> <li class="hover:text-gray-400 transition-all duration-300">Home</li></RouterLink>
      <RouterLink to="/products">
        <li class="hover:text-gray-400 transition-all duration-300">Products</li>
      </RouterLink>
      <li>Contact Us</li>
    </ul>
  </div>
</template>
