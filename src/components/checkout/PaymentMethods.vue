<script setup lang="ts">
import MediumHeading from '../shared/MediumHeading.vue';
import Payment from './Payment.vue';
</script>

<template>
  <div class="flex justify-between w-full">
    <MediumHeading text="Payment Methods" />
    <div class="flex flex-col items-end gap-4 w-[325px]">
      <Payment paymentType="invoice" />
      <Payment paymentType="paypal" />
    </div>
  </div>
</template>
