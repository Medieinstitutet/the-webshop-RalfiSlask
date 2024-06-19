<script setup lang="ts">
import MailBag from '../components/home/MailBag.vue';
import UpperSection from '../components/home/UpperSection.vue';
import TarantinoSection from '@/components/home/TarantinoSection.vue';
</script>

<template>
  <section class="w-full flex flex-col gap-40 items-center">
    <UpperSection />
    <TarantinoSection />
    <MailBag />
  </section>
</template>
