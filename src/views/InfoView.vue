<template>
  <header>

    <div class="wrapper">

      <infinite-stocks-list @item-click="handleStockClick" />
      <stock-detail-drawer
        :show="showDetail"
        :detail="detail"
        :isLoading="isLoading"
        @update:show="showDetail = $event"
      />
    </div>
  </header>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfiniteStocksList from '@/views/stocks/InfiiniteStocksList.vue';
import StockDetailDrawer from '@/views/stocks/StockDetailDrawer.vue';
import useFetchStockDetail from '@/composables/useFetchStockDetail';

const { detail, isLoading, fetchDetail } = useFetchStockDetail();
const activeStockId = ref<number | null>(null);
const showDetail = ref(false);

const handleStockClick = async (id: number) => {
  activeStockId.value = id;
  if (!showDetail.value) showDetail.value = true;
  await fetchDetail(id);
};
</script>