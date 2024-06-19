<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { onMounted } from 'vue';
import Category from './Category.vue';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { categories } = storeToRefs(store);
const { fetchCategories } = store;

onMounted(() => {
  fetchCategories();
});
</script>

<template>
  <Category v-for="category in categories" :key="category.id" :text="category.name" :categoryId="category.id" />
</template>
