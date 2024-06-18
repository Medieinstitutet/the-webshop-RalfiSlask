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
  <div class="flex justify-between items-center px-2 w-full">
    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <div class="w-[100px]">
          <img :src="cartProductInfo.imgUrl" :alt="cartProductInfo.title" width="100px" height="100px" loading="lazy" />
        </div>
        <RemoveCartProductButton @remove-product="removeProductFromCart" :productId="cartProductInfo.productId" />
      </div>
      <div>
        <p>{{ cartProductInfo.title }}</p>
        <p>{{ cartProductInfo.price }}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <DecreaseProductButton :id="cartProductInfo.productId" />
      <p>{{ cartProductInfo.amount }}</p>
      <IncreaseProductButton :id="cartProductInfo.productId" />
    </div>
  </div>
</template>
