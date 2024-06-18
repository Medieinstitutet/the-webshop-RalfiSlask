<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h2 class="text-3xl uppercase font-medium">{{ text }}</h2>
</template>
