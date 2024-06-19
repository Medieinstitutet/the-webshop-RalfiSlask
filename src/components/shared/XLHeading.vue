<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
  fontStyle?: 'uppercase';
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h2 :class="`${fontStyle === 'uppercase' ? 'uppercase' : ''} text-black text-2xl xl:text-3xl font-medium`">
    {{ text }}
  </h2>
</template>
