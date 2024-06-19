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
  <div class="flex items-center border-2 border-solid border-blueColor w-[350px] justify-between pr-2">
    <input
      style="outline-style: none"
      :value="searchText"
      @input="handleInputOnSearch"
      class="search-input"
      type="text"
      id="search"
      placeholder="Search for a product..."
    />
    <img src="../../assets/icons/search.svg" alt="search icon" height="32" width="32" loading="lazy" />
  </div>
</template>
