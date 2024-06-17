<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h2 class="text-3xl uppercase text-medium">{{ text }}</h2>
</template>
