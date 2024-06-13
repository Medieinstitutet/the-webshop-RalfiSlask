<script setup lang="ts">
interface ILargeHeading {
  text: string;
}

defineProps<ILargeHeading>();
</script>

<template>
  <h1 class="text-xl">{{ text }}</h1>
</template>
