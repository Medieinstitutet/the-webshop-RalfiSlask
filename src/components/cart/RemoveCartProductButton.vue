<script setup lang="ts">
interface IRemoveButtonProps {
  productId: number;
}

defineProps<IRemoveButtonProps>();

defineEmits<{
  (e: 'remove-product', productId: number): void;
}>();
</script>

<template>
  <button @click="$emit('remove-product', productId)">Remove</button>
</template>
