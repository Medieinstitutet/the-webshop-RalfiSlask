<script setup lang="ts">
import { CartProduct } from '@/models/CartProduct';
import OperatorButton from './OperatorButton.vue';
import RemoveCartProductButton from './RemoveCartProductButton.vue';
import { useWebshopStore } from '@/stores/webshopStore';

const store = useWebshopStore();

const { removeProductFromCart } = store;

interface ICartProductProps {
  cartProductInfo: CartProduct;
}

const props = defineProps<ICartProductProps>();
</script>

<template>
  <div class="flex justify-between items-center px-2">
    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <div class="w-[100px]">
          <img :src="props.cartProductInfo.imgUrl" :alt="props.cartProductInfo.title" />
        </div>
        <RemoveCartProductButton @remove-product="removeProductFromCart" :productId="props.cartProductInfo.cartId" />
      </div>
      <div>
        <p>{{ props.cartProductInfo.title }}</p>
        <p>{{ props.cartProductInfo.price }}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <!--      <OperatorButton operation="plus" />
      <OperatorButton operation="minus" /> -->
    </div>
  </div>
</template>
