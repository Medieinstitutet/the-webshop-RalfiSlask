<script setup lang="ts">
interface IProductInfoProps {
  year: string;
  description: string;
}

defineProps<IProductInfoProps>();
</script>

<template>
  <div
    class="w-full h-[350px] text-black absolute translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-20 bottom-0 flex flex-col gap-4"
  >
    <div class="relative w-full h-full">
      <div class="bg-secondaryColor opacity-95 absolute bottom-0 z-0 w-full h-full"></div>
      <div class="absolute z-10 w-full h-full flex flex-col gap-4 px-6 py-4 font-medium">
        <div class="flex items-center justify-between">
          <p>Year</p>
          <p>{{ year }}</p>
        </div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
