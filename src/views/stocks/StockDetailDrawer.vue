<template>

  
    <n-drawer
      :show="show"
      :width="400"
      :showMask="false"
      @update:show="$emit('update:show', $event)"
    >
    <n-drawer-content>
      <div v-if="isLoading" class="p-4 text-center">
        <n-spin />
      </div>
      <div v-else-if="detail" class="p-4">
        <h2 class="text-xl font-bold mb-4">{{ detail.name }}</h2>
      </div>
        </n-drawer-content>
    </n-drawer>


</template>


<script setup lang="ts">

import type { StockDetail } from '@/types/stocks';
import { NDrawer, NDrawerContent, NSpin } from 'naive-ui';

defineProps<{
  show: boolean;
  detail: StockDetail | null;
  isLoading: boolean;
}>()

defineEmits(['update:show'])
</script>

