<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex items-center gap-4 text-lg">
    <nav class="flex flex-col sm:flex-row items-center gap-2 list-none font-medium">
      <RouterLink to="/"><li class="nav-text">Home</li></RouterLink>
      <RouterLink to="/products"><li class="nav-text">Products</li></RouterLink>
      <RouterLink to="/admin"><li class="nav-text">Admin</li></RouterLink>
    </nav>
  </div>
</template>
