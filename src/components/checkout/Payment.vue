<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import type { IPaymentMethods } from '@/utils/types/types';
import { getTextWithFirstLetterUpperCase } from '@/utils/helperfunctions/helperfunctions';
const store = useWebshopStore();
const { changePaymentMethod } = store;

const { paymentMethods } = storeToRefs(store);

interface IPaymentProps {
  paymentType: keyof IPaymentMethods;
}

defineProps<IPaymentProps>();
</script>

<template>
  <div class="flex items-center gap-4 h-12 w-full">
    <button
      @click="changePaymentMethod(paymentType)"
      class="w-6 h-6 rounded-full border border-solid border-yellow-300 flex justify-center items-center"
    >
      <span v-if="paymentMethods[paymentType]" class="inline-block h-2 w-2 bg-slate-400 rounded-full"></span>
    </button>
    <p>{{ getTextWithFirstLetterUpperCase(paymentType.toString()) }}</p>
  </div>
</template>
