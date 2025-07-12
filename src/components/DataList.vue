<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 rounded shadow"
    >
      <p class="text-lg font-semibold">{{ item.name }}</p>
      <p class="text-sm text-gray-500">{{ item.symbol }}</p>
    </div>

    <div v-if="isLoading" class="text-center text-gray-400">Loading...</div>
    <div v-else-if="!hasMore" class="text-center text-gray-500">No more data</div>
  
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  items: Array<{ id: number; name: string; symbol: string }>;
  isLoading: boolean;
  hasMore: boolean;
}>();
</script>
