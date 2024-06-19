<script setup lang="ts">
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useWebshopStore } from './stores/webshopStore';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import Lightbox from './components/shared/Lightbox.vue';
import CartSidebar from './components/cart/CartSidebar.vue';

const store = useWebshopStore();
const { modalStates, hasActiveModal } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen relative pb-[500px] sm:pb-[350px]">
    <Header />
    <main class="w-full flex flex-col items-center h-full">
      <RouterView />
    </main>

    <Footer />
    <CartSidebar v-if="modalStates.cart" />
    <Lightbox v-if="hasActiveModal" />
  </div>
</template>

<style scoped></style>
