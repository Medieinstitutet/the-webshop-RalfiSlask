<script setup>
import FormSection from './FormSection.vue';
import { formInputs } from '@/data/formInputs';
</script>

<template>
  <form class="w-full">
    <div class="flex flex-col gap-4">
      <FormSection v-for="form in formInputs" :key="form.id" :formInfo="form" />
    </div>
  </form>
</template>
