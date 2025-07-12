<template>
  <header>

    <div class="wrapper">

      <infinite-stocks-view @item-click="handleStockClick" />
    </div>
  </header>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfiniteStocksView from '@/views/stocks/InfiiniteStocksView.vue';
import useFetchStockDetail from '@/composables/useFetchStockDetail';

const { detail, isLoading, fetchDetail } = useFetchStockDetail();
const activeStockId = ref<number | null>(null);
const showDetail = ref(false);

const handleStockClick = async (id: number) => {
  activeStockId.value = id;
  showDetail.value = true;
  await fetchDetail(id);
};
</script>