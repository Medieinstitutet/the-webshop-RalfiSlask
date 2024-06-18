<script setup lang="ts">
import CartForm from '@/components/checkout/CartForm.vue';
import PaymentMethods from '@/components/checkout/PaymentMethods.vue';
import PayButton from '@/components/checkout/PayButton.vue';
import LargeHeading from '@/components/shared/LargeHeading.vue';
import ThankYouForOrder from '@/components/checkout/ThankYouForOrder.vue';
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();

const { isOrderPayed } = storeToRefs(store);
</script>

<template>
  <div class="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[800px] mb-[500px]">
    <ThankYouForOrder v-if="isOrderPayed" />
    <div v-else class="px-2 md:px-10 py-12 flex flex-col items-center md:items-start gap-10">
      <LargeHeading text="Checkout" />
      <div class="flex flex-col gap-10">
        <CartForm />
        <PaymentMethods />
        <PayButton />
      </div>
    </div>
  </div>
</template>
