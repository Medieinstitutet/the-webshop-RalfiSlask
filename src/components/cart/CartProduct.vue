<script setup lang="ts">
import { CartProduct } from '@/models/CartProduct';
import RemoveCartProductButton from './RemoveCartProductButton.vue';
import DecreaseProductButton from './DecreaseProductButton.vue';
import IncreaseProductButton from './IncreaseProductButton.vue';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();

const { removeProductFromCart } = store;

interface ICartProductProps {
  cartProductInfo: CartProduct;
}

defineProps<ICartProductProps>();
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex items-center gap-4 w-[275px]">
      <div class="flex gap-2">
        <div class="w-[100px]">
          <img :src="cartProductInfo.imgUrl" :alt="cartProductInfo.title" width="100px" height="100px" loading="lazy" />
        </div>
      </div>
      <div class="flex flex-col items-start gap-4">
        <div>
          <p class="font-medium">{{ cartProductInfo.title }}</p>
          <p>${{ cartProductInfo.price }}</p>
        </div>
        <RemoveCartProductButton @remove-product="removeProductFromCart" :productId="cartProductInfo.productId" />
      </div>
    </div>
    <div class="flex items-center justify-between w-[150px]">
      <DecreaseProductButton :id="cartProductInfo.productId" />
      <p class="text-xl">{{ cartProductInfo.amount }}</p>
      <IncreaseProductButton :id="cartProductInfo.productId" />
    </div>
  </div>
</template>
