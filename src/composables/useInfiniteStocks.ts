import { ref } from 'vue'
import type { Stock } from '@/types/stocks'
import { fetchStocks } from '@/services/stocks'

export const useInfiniteStocks = () => {
  const items = ref<Stock[]>([])
  const page = ref(1)
  const isLoading = ref(false)
  const hasMore = ref(true)

  const fetchMore = async () => {
    if (isLoading.value || !hasMore.value) return

    isLoading.value = true

    try {
      const data = await fetchStocks(page.value, 20)

      if (data.length === 0) {
        hasMore.value = false
      } else {
        items.value.push(...data)
        page.value++
      }
    } catch (err) {
      console.error('Fetch failed:', err)
      hasMore.value = false
    } finally {
      isLoading.value = false
    }
  }

  return {
    items,
    page,
    hasMore,
    isLoading,
    fetchMore,
  }
}
