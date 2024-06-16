<script setup lang="ts">
import Payment from './Payment.vue';
</script>

<template>
  <div class="flex justify-between w-full">
    <h2>Payment Methods</h2>
    <div class="flex flex-col items-end gap-4 w-[50%]">
      <Payment paymentType="invoice" />
      <Payment paymentType="paypal" />
    </div>
  </div>
</template>
