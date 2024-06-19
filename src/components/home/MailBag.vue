<script setup lang="ts">
import SubmitButton from './SubmitButton.vue';
import XLHeading from '@/components/shared/XLHeading.vue';
</script>

<template>
  <div class="h-[350px] w-full bg-secondaryColor flex flex-col justify-center items-center gap-10">
    <div class="flex flex-col items-center gap-4">
      <XLHeading text="Join Our Mailing List" />
      <p class="text-grayColor w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] text-center">
        Sign up to recieve inspiration, product updated and special offers from our team
      </p>
    </div>
    <div class="border border-solid border-blueColor h-[40px] md:h-[60px] w-[350px] md:w-[500px] relative">
      <input type="text" class="h-full w-full pl-4 pr-40" placeholder="example@gmail.com" />
      <SubmitButton />
    </div>
  </div>
</template>
