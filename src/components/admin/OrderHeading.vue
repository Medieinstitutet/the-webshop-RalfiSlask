<script setup lang="ts">
import { getTextWithFirstLetterUpperCase } from '@/utils/helperfunctions/helperfunctions';
interface ILargeHeadingProps {
  text: string;
}

defineProps<ILargeHeadingProps>();
</script>

<template>
  <h2
    :class="`${
      text.toLowerCase() === 'date' ? 'col-span-2 sm:col-span-3' : 'col-span-2'
    } text-sm sm:text-lg font-medium`"
  >
    {{ getTextWithFirstLetterUpperCase(text) }}
  </h2>
</template>
