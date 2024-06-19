<script setup lang="ts">
import { RouterLink } from 'vue-router';
import XLHeading from '../shared/XLHeading.vue';
</script>

<template>
  <div
    class="flex flex-col gap-4 px-6 py-6 bg-secondaryColor rounded-lg absolute right-1/2 md:right-[25%] md:bottom-[15%] translate-x-1/2"
  >
    <div class="w-[300px] flex flex-col gap-4">
      <XLHeading text="Cinema Magic, Delivered to you." fontStyle="uppercase" />
      <p class="text-blackColor">
        "Discover and purchase your favorite movies effortlessly from our curated collection."
      </p>
    </div>
    <RouterLink to="/products">
      <button class="primary-button">Shopping</button>
    </RouterLink>
  </div>
</template>
