<script setup lang="ts">
import FooterInfo from './FooterInfo.vue';
</script>

<template>
  <footer
    class="w-full flex flex-col items-center pt-12 pb-8 gap-10 px-[5%] bg-blueColor h-[500px] sm:h-[350px] text-white absolute bottom-0"
  >
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-0 justify-between w-full">
      <div>Matthias Webshop</div>
      <FooterInfo />
    </div>
    <div class="border-t border-solid border-white w-full">
      <div class="flex flex-col sm:flex-row gap-4 items-center text-sm py-6">
        <p>Copyright @ 2024 Matthias</p>
        <p class="opacity-0 sm:opacity-100">|</p>
        <p class="text-gray-500">Privacy Policy Terms & Conditions</p>
      </div>
    </div>
  </footer>
</template>
