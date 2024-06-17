<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h3 class="text-xl uppercase text-medium">{{ text }}</h3>
</template>
