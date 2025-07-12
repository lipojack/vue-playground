<template>
  <data-list :items="items" :isLoading="isLoading" :hasMore="hasMore"/>
  <div ref="sentinel" class="h-8"></div>
</template>


<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { useInfiniteStocks } from '@/composables/useInfiniteStocks'
import DataList from '@/components/DataList.vue'

const {
  items,
  isLoading,
  hasMore,
  fetchMore
} = useInfiniteStocks()


const sentinel = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) fetchMore()
  }, {
    threshold: 1.0
  })
  if (sentinel.value) observer.observe(sentinel.value)
})


</script>