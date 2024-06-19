<script setup lang="ts">
interface ILargeHeadingProps {
  text: string;
  fontStyle?: 'uppercase';
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h2 :class="`${fontStyle === 'uppercase' ? 'uppercase' : ''} text-black text-xl font-medium`">
    {{ text }}
  </h2>
</template>
