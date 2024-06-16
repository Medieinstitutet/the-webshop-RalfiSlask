<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex items-center gap-4 text-lg">
    <nav class="flex items-center gap-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
  </div>
</template>
