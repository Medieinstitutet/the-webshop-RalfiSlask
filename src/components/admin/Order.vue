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
  <div class="flex flex-col gap-4">
    <div class="w-full grid grid-cols-12 gap-10">
      <p class="col-span-2">#{{ id }}</p>
      <p class="col-span-3">{{ created }}</p>
      <p class="col-span-2">{{ createdBy }}</p>
      <p class="col-span-2">{{ totalPrice }}</p>
      <p class="col-span-2">{{ paymentMethod }}</p>
    </div>
    <div class="flex flex-col gap-2">
      <SmallHeading text="products" />
      <div>
        <OrderProduct v-for="order in orderRows" :key="order.id" :orderInfo="order" />
      </div>
    </div>
  </div>
</template>
