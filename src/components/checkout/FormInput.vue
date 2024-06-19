<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshopStore';
import type { IInputs } from '@/utils/types/types';
import { storeToRefs } from 'pinia';
const store = useWebshopStore();
const { checkutFormError } = storeToRefs(store);

const { changeInput } = store;

interface INumberProps {
  inputInfo: {
    placeholder: string;
    label: string;
    id: string;
    type: string;
    required?: boolean;
  };
}

const props = defineProps<INumberProps>();
const { placeholder, label, id, type, required } = props.inputInfo;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <label class="font-[600]" :for="id">{{ label }}{{ required ? ' *' : '' }}</label>
      <p class="text-red-500" v-if="required && checkutFormError">not valid</p>
    </div>

    <input
      @input="(e) => changeInput(e, id as keyof IInputs)"
      class="input"
      :id="id"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>
