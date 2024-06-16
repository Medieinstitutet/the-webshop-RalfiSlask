<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h1 class="text-xl">{{ text }}</h1>
</template>
