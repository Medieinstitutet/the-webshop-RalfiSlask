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
  <button @click="$emit('remove-product', productId)">
    <img src="../../assets/icons/remove.svg" alt="trashbin icon" width="32" height="32" loading="lazy" />
  </button>
</template>
