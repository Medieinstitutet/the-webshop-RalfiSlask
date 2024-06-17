<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();

const { searchText } = storeToRefs(store);
const { setProductsBySearch } = store;

const handleInputOnSearch = (e: Event) => {
  const target = e.target as HTMLInputElement;
  setProductsBySearch(target.value);
};
</script>

<template>
  <input
    :value="searchText"
    @input="handleInputOnSearch"
    class="search-input"
    type="text"
    id="search"
    placeholder="Search for a product..."
  />
</template>
