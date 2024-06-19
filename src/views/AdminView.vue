<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import AdminSection from '@/components/admin/AdminSection.vue';
import { onMounted } from 'vue';
import LargeHeading from '@/components/shared/XLHeading.vue';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();

const { companyId } = storeToRefs(store);
const { fetchOrdersByCompany } = store;

onMounted(() => {
  fetchOrdersByCompany(companyId.value);
});
</script>

<template>
  <section class="flex flex-col items-start pb-20 w-full mt-10 md:max-w-[800px] xl:max-w-[1100px]">
    <LargeHeading text="Orders" />
    <AdminSection />
  </section>
</template>
