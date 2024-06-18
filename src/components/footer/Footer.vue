<script setup lang="ts">
import FooterInfo from './FooterInfo.vue';
</script>

<template>
  <footer class="w-full flex flex-col items-center pt-12 pb-8 gap-10 px-[5%] bg-blueColor text-white absolute bottom-0">
    <div class="flex justify-between w-full">
      <div>Matthias Webshop</div>
      <FooterInfo />
    </div>
    <div class="border-t border-solid border-white w-full">
      <div class="flex gap-4 items-center text-sm py-6">
        <p>Copyright @ 2024 Matthias</p>
        <p>|</p>
        <p class="text-gray-500">Privacy Policy Terms & Conditions</p>
      </div>
    </div>
  </footer>
</template>
