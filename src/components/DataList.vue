<template>
  <div>
    <!-- <ul>
      <n-data-table
        :columns="columns"
        :data="stocks"
        :pagination="pagination"
        :bordered="false"
        :max-height="400"
        :width="800"
      />
    </ul> -->
    <!-- <button @click="loadStocks" :disabled="isLoading || reachedEnd">
      {{ reachedEnd ? 'No more data' : isLoading ? 'Loading...' : 'Load more' }}
    </button> -->

    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 rounded shadow"
    >
      <p class="text-lg font-semibold">{{ item.name }}</p>
      <p class="text-sm text-gray-500">{{ item.symbol }}</p>
    </div>

    <div ref="sentinel" class="h-8"></div>

    <div v-if="isLoading" class="text-center text-gray-400">Loading...</div>
    <div v-else-if="!hasMore" class="text-center text-gray-500">No more data</div>
  
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'

// import type { DataTableColumns } from 'naive-ui'
// import { NDataTable } from 'naive-ui'

// import type { Stock } from '@/types/stocks'
// import { useStocks } from '@/composables/useStocks'
import { useInfiniteStocks } from '@/composables/useInfiniteStocks'

// const { stocks, loadStocks, isLoading, reachedEnd } = useStocks()
// const { items, page, isLoading: infiniteLoading, reachedEnd: infiniteReachedEnd } = useInfiniteStocks()
const {
  items,
  isLoading,
  hasMore,
  fetchMore
} = useInfiniteStocks()

// onMounted(() => loadStocks())

const sentinel = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) fetchMore()
  }, {
    threshold: 1.0
  })
  if (sentinel.value) observer.observe(sentinel.value)
})

// const createStockColumns = (():DataTableColumns<Stock> => {
//   return [
//     {
//       title: 'ID',
//       key: 'id'
//     },
//     {
//       title: 'Symbol',
//       key: 'symbol'
//     },
//     {
//       title: 'Name',
//       key: 'name'
//     },
//     {
//       title: 'Price',
//       key: 'price',
//       render(row) {
//         return `$${row.price.toFixed(2)}`
//       }
//     }
//   ]
// })

// const columns = createStockColumns()

// const pagination = false as const
</script>
