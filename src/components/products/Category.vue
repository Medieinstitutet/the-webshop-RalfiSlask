<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();
const { selectedCategoryId } = storeToRefs(store);
const { setSelectedCategory } = store;

interface ICategoryProps {
  text: string;
  categoryId: number;
}

const props = defineProps<ICategoryProps>();
</script>

<template>
  <button
    :class="`${selectedCategoryId === categoryId ? 'bg-black' : 'bg-grayColor'} category`"
    @click="setSelectedCategory(props.categoryId)"
  >
    {{ text }}
  </button>
</template>
