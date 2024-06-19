<script setup lang="ts">
import ShopNowContainer from './ShopNowContainer.vue';
import { infos } from '@/models/infos';
import PositiveInfo from './PositiveInfo.vue';
</script>

<template>
  <div class="w-full">
    <div class="relative w-full h-[500px] xl:h-[600px] bg-gray-200 flex items-center">
      <div class="absolute -translate-x-1/2 left-1/2">
        <img src="../../assets/images/movies.png" alt="star wars movies" width="700" height="500" />
      </div>
      <ShopNowContainer />
    </div>
    <div class="w-full h-[250px] md:h-[150px] flex justify-center px-4 md:px-10 bg-secondaryColor text-black">
      <div class="flex items-center justify-between w-full max-w-[1400px]">
        <PositiveInfo v-for="info in infos" :key="info.id" :info="info" />
      </div>
    </div>
  </div>
</template>
