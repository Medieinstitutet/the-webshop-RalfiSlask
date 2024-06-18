<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import AdminSection from '@/components/admin/AdminSection.vue';
import { onMounted } from 'vue';
import LargeHeading from '@/components/shared/LargeHeading.vue';
import { storeToRefs } from 'pinia';

const store = useWebshopStore();

const { companyId } = storeToRefs(store);
const { fetchOrdersByCompany } = store;

onMounted(() => {
  fetchOrdersByCompany(companyId.value);
});
</script>

<template>
  <section
    class="flex flex-col items-start w-full mt-10 max-w-[350px] sm:max-w-[500px] md:max-w-[800px] xl:max-w-[1100px]"
  >
    <LargeHeading text="Orders" />
    <AdminSection />
  </section>
</template>
