<script setup lang="ts">
interface IListProps {
  listInfo: {
    id: number;
    heading: string;
    listItems: string[];
  };
}

defineProps<IListProps>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3 class="font-medium">{{ listInfo.heading }}</h3>
    <ul class="list-none flex flex-col gap-2 text-sm">
      <li v-for="(listText, index) in listInfo.listItems" :key="index">{{ listText }}</li>
    </ul>
  </div>
</template>
