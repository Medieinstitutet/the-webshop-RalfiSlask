<script setup lang="ts">
import SmallHeading from '../shared/SmallHeading.vue';
import type { IPositiveInfo } from '@/utils/types/types';

interface IPositiveInfoProps {
  info: IPositiveInfo;
}

const props = defineProps<IPositiveInfoProps>();

const { title, description, imageUrl, alt, iconSize } = props.info;
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-4">
    <div :class="`${iconSize === 'small' ? 'md:h-20 md:w-20' : 'md:h-32 md:w-32'} h-16 w-16`">
      <img :src="imageUrl" :alt="alt" width="200" height="200" class="object-cover w-full" />
    </div>
    <div class="flex flex-col gap-1">
      <SmallHeading :text="title" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>
