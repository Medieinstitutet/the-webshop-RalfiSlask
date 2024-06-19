<script setup lang="ts">
import type { IOrderProduct } from '@/utils/types/types';
interface IOrderProductProps {
  orderInfo: IOrderProduct;
}

const props = defineProps<IOrderProductProps>();

const { id, productId, amount } = props.orderInfo;
</script>

<template>
  <div class="flex gap-4">
    <p>-</p>
    <div class="flex gap-10">
      <p class="text-sm sm:text-base w-[100px]"><span class="font-medium">ID: </span>#{{ id }}</p>
      <p class="text-sm sm:text-base w-[125px] sm:w-[150px]">
        <span class="font-medium">Product ID: </span>#{{ productId }}
      </p>
      <p class="text-sm sm:text-base w-[125px] sm:w-[150px]"><span class="font-medium">Quantity: </span>{{ amount }}</p>
    </div>
  </div>
</template>
