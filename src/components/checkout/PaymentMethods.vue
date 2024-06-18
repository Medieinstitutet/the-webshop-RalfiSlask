<script setup lang="ts">
import MediumHeading from '../shared/MediumHeading.vue';
import Payment from './Payment.vue';
</script>

<template>
  <div class="flex justify-between w-full">
    <MediumHeading text="payment methods" />
    <div class="flex flex-col items-end gap-4 w-[50%]">
      <Payment paymentType="invoice" />
      <Payment paymentType="paypal" />
    </div>
  </div>
</template>
