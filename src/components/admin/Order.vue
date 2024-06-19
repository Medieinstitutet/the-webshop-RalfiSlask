<script setup lang="ts">
import type { IOrder } from '@/utils/types/types';
import OrderProduct from './OrderProduct.vue';
import SmallHeading from '../shared/SmallHeading.vue';

interface IOrderProps {
  orderInfo: IOrder;
}

const props = defineProps<IOrderProps>();

const { created, createdBy, id, paymentMethod, totalPrice, orderRows } = props.orderInfo;
</script>

<template>
  <div class="flex flex-col gap-10 border border-solid border-black px-2 py-4 bg-white rounded-sm">
    <div class="w-full grid grid-cols-10 sm:grid-cols-12 gap-2 sm:gap-6 md:gap-10">
      <p class="col-span-2 text-sm sm:text-base">#{{ id }}</p>
      <p class="col-span-2 sm:col-span-3 w-full text-sm sm:text-base">{{ created }}</p>
      <p class="col-span-2 text-sm sm:text-base">{{ createdBy }}</p>
      <p class="col-span-2 text-sm sm:text-base">{{ totalPrice }}</p>
      <p class="col-span-2 text-sm sm:text-base">{{ paymentMethod }}</p>
    </div>
    <div class="flex flex-col gap-4">
      <SmallHeading text="products" />
      <div>
        <OrderProduct v-for="order in orderRows" :key="order.id" :orderInfo="order" />
      </div>
    </div>
  </div>
</template>
