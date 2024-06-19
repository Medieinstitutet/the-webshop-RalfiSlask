<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import AdminSection from '@/components/admin/AdminSection.vue';
import { onMounted } from 'vue';
import LargeHeading from '@/components/shared/XLHeading.vue';

const store = useWebshopStore();
const { fetchOrdersByCompany } = store;

onMounted(() => {
  fetchOrdersByCompany();
});
</script>

<template>
  <section class="flex flex-col items-center sm:items-start pb-20 w-full mt-10 md:max-w-[800px] xl:max-w-[1100px]">
    <LargeHeading text="Orders" />
    <AdminSection />
  </section>
</template>
