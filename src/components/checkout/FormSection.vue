<script setup lang="ts">
import MediumHeading from '../shared/MediumHeading.vue';
import FormInput from './FormInput.vue';
import type { IInput } from '@/utils/types/types';

interface IFormSectionProps {
  formInfo: {
    id: number;
    heading: string;
    inputs: IInput[];
  };
}

defineProps<IFormSectionProps>();
</script>
<template>
  <div class="flex flex-col gap-6">
    <MediumHeading text="Billing Details" />
    <div class="flex flex-wrap justify-between gap-y-4">
      <FormInput v-for="input in formInfo.inputs" :key="input.id" :inputInfo="input" />
    </div>
  </div>
</template>
