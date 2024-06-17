<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import { storeToRefs } from 'pinia';
const store = useWebshopStore();

const { postOrders } = store;

const { isCheckoutFormValid, checkutFormError } = storeToRefs(store);

const handleClickOnPayButton = () => {
  if (isCheckoutFormValid.value) {
    postOrders();
    console.log('valid');
  } else {
    checkutFormError.value = true;
  }
};
</script>

<template>
  <button @click="handleClickOnPayButton" class="primary-button">Pay</button>
</template>
