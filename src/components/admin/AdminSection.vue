<script setup lang="ts">
import Order from './Order.vue';
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
import OrderHeadings from './OrderHeadings.vue';
const store = useWebshopStore();

const { adminOrders } = storeToRefs(store);
console.log(adminOrders.value);
</script>

<template>
  <section
    class="mt-[80px] w-full grid grid-cols-10 sm:grid-cols-12 sm:gap-6 md:gap-10 rounded-md shadow-md border border-solid border-black bg-primaryColor py-8 px-2 sm:px-4"
  >
    <OrderHeadings />
    <div class="col-span-12 flex flex-col gap-4">
      <Order v-for="order in adminOrders" :key="order.id" :orderInfo="order" />
    </div>
  </section>
</template>
