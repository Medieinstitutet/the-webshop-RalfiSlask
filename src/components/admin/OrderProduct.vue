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
    <p><span class="font-medium">ID: </span>#{{ id }}</p>
    <p><span class="font-medium">Product ID: </span>#{{ productId }}</p>
    <p><span class="font-medium">Quantity: </span>{{ amount }}</p>
  </div>
</template>
