import { ref } from 'vue'
import type { Stock } from '@/types/stocks'
import { fetchStocks } from '@/services/stocks'

export function useStocks() {
  const stocks = ref<Stock[]>([])
  const page = ref(1)
  const isLoading = ref(false)
  const reachedEnd = ref(false)

  const loadStocks = async () => {
    if (isLoading.value || reachedEnd.value) return
    isLoading.value = true
    try {
      const newData = await fetchStocks(page.value, 20)
      if (newData.length === 0) {
        reachedEnd.value = true
      } else {
        stocks.value.push(...newData)
        page.value++
      }
    } catch (err) {
      console.error('Error loading stocks:', err)
    } finally {
      isLoading.value = false
    }
  }

  return { stocks, loadStocks, isLoading, reachedEnd }
}
