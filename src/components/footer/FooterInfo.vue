<script setup lang="ts">
import FooterLinksList from './FooterLinksList.vue';
import FooterList from './FooterList.vue';

const lists = [
  { id: 1, heading: 'Info', listItems: ['Shopping Policy', 'Return & Refund', 'Support', 'FAQs'] },
  { id: 2, heading: 'Office', listItems: ['12345 Hej På Dig gatan', 'Stockholm', 'Sweden', '12-345-6789'] },
];
</script>

<template>
  <div class="flex gap-6">
    <FooterLinksList />
    <FooterList v-for="list in lists" :key="list.id" :listInfo="list" />
  </div>
</template>
