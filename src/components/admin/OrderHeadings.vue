<script setup lang="ts">
import OrderHeading from './OrderHeading.vue';
import { orderHeadings } from '@/models/admin';
</script>

<template>
  <OrderHeading v-for="(heading, index) in orderHeadings" :key="index" :text="heading" />
</template>
